const SMALL_CITY_PACKS = ["0.5г", "1.0г", "2.0г"];
const ALL_PACKS = ["0.5г", "1.0г", "2.0г", "3.0г", "5.0г"];
const PHARMACY_PACKS = ["2шт", "3шт", "5шт"];
const DELIVERY_TYPES = ["🧲", "🚪", "🔒", "⛏️"];

function randomType(){
  return DELIVERY_TYPES[Math.floor(Math.random() * DELIVERY_TYPES.length)];
}

function getCityType(city){
  const districts = (typeof districtsDBAll !== 'undefined' && districtsDBAll[city]) || ["Весь город"];
  if(districts.length === 1 && districts[0] === "Весь город") return "small";
  if(districts.length <= 7) return "medium";
  return "big";
}

// Получить цены для варианта по типу города
function getPacksForCity(prices, cityType){
  return prices[cityType] || prices["medium"] || {};
}

function buildVariantMulti(id, name, emoji, desc, prices){
  // prices = { small: {...}, medium: {...}, big: {...} }
  // Для статичного stock используем medium как базу
  const basePacks = prices.medium || prices.big || {};
  return { id, name, emoji, desc, prices, packs: basePacks };
}

// Универсальная функция цены — одинаковая везде для связки город+вариант+фасовка
function getCityPrice(variant, city, pack){
  const cityType = getCityType(city);
  const basePacks = variant.prices
    ? (variant.prices[cityType] || variant.prices["medium"] || variant.packs)
    : variant.packs;
  const basePrice = basePacks[pack] || Object.values(basePacks)[0] || 0;

  // Детерминированный разброс ±7% уникальный для города+варианта+фасовки
  const seedStr = city + "_" + variant.id + "_" + pack;
  let h = 0;
  for(let i = 0; i < seedStr.length; i++){
    h = Math.imul(31, h) + seedStr.charCodeAt(i) | 0;
  }
  const variation = ((Math.abs(h) % 1000) / 1000) * 0.14 - 0.07; // от -7% до +7%
  return Math.round(basePrice * (1 + variation));
}

// Минимальная цена варианта для города (для показа в списке)
function getMinCityPrice(variant, city){
  const cityType = getCityType(city);
  const basePacks = variant.prices
    ? (variant.prices[cityType] || variant.prices["medium"] || variant.packs)
    : variant.packs;
  const firstPack = Object.keys(basePacks)[0];
  return getCityPrice(variant, city, firstPack);
}

function seededRandom(seed){
  let h = 0;
  for(let i = 0; i < seed.length; i++){
    h = Math.imul(31, h) + seed.charCodeAt(i) | 0;
  }
  return function(){
    h = Math.imul(h ^ h >>> 16, 0x45d9f3b) | 0;
    return ((h ^ h >>> 16) >>> 0) / 0xffffffff;
  };
}

function generateStockForCity(districts, variantId, city, packsToUse){
  const seed = city + "_" + variantId;
  const rand = seededRandom(seed);

  const stock = {};
  const isSmallCity = districts.length === 1 && districts[0] === "Весь город";

  if(isSmallCity){
    stock["Весь город"] = { type: "🚪", packs: SMALL_CITY_PACKS };
    return stock;
  }

  // до 5 районов → 1-2 с товаром, 6+ → 2-3 с товаром
  const guaranteedCount = districts.length >= 6 ? 2 : 1;
  const maxCount = districts.length >= 6 ? 3 : 2;

  districts.forEach(d => {
    stock[d] = { type: "❌", packs: [] };
  });

  // Каждому району назначаем тип ОДИН РАЗ — равномерно все 4 типа
  const allTypes = ["🧲","🚪","🔒","⛏️"];
  const shuffledForTypes = [...districts].sort(() => rand() - 0.5);
  shuffledForTypes.forEach((d, i) => {
    stock[d].type = allTypes[i % allTypes.length];
  });

  (packsToUse || ALL_PACKS).forEach(pack => {
    const shuffled = [...districts].sort(() => rand() - 0.5);
    const count = guaranteedCount + Math.floor(rand() * (maxCount - guaranteedCount + 1));
    const chosen = shuffled.slice(0, count);

    chosen.forEach(d => {
      // 3.0г — с 20% шансом пропускаем район
      if(pack === "3.0г" && rand() < 0.20) return;
      if(!stock[d].packs.includes(pack)) stock[d].packs.push(pack);
    });
  });

  return stock;
}

// ==============================
// КАТАЛОГ ТОВАРОВ
// ==============================

const newProducts = {

  natural: {
 name: "МАРИХУАНА 🌿",
    emoji: "🌿",
    items: [
      {
        id: "natural-1",
        name: "Гашиш🍫",
        emoji: "🍫",
        desc: "Мощный плотный, рысыпчатый гаш, печати все разные!!",
        variants: [
          buildVariantMulti("natural-1-classic","ice-o-lator Papaya","🍫","УРОВЕНЬ ТГК - 30+% ИНДИКА",{
            small:  {"0.5г":2790,"1.0г":3675,"2.0г":4540},
            medium: {"0.5г":2890,"1.0г":3875,"2.0г":4560,"3.0г":5434,"5.0г":6350},
            big:    {"0.5г":3179,"1.0г":4262,"2.0г":5016,"3.0г":5977,"5.0г":6985},
          }),
          buildVariantMulti("natural-1-choco","Ice-o-Lator Lemon-Cherry Gelato","🍫","Именно то, что нужно!✌️",{
            small:  {"0.5г":2790,"1.0г":3675,"2.0г":4540},
            medium: {"0.5г":2490,"1.0г":3575,"2.0г":4360,"3.0г":5134,"5.0г":6185},
            big:    {"0.5г":2739,"1.0г":3933,"2.0г":4796,"3.0г":5647,"5.0г":6804},
          }),
          buildVariantMulti("natural-1-vanilla","Ice-O-Lator Bubble","🍫","Когда стандартное не катит! Встречай Bubble Hash🍫🍫🍫",{
            small:  {"0.5г":2790,"1.0г":3675,"2.0г":4540},
            medium: {"0.5г":2490,"1.0г":3575,"2.0г":4360,"3.0г":5134,"5.0г":6185},
            big:    {"0.5г":2739,"1.0г":3933,"2.0г":4796,"3.0г":5647,"5.0г":6804},
          }),
        ]
      },
      {
        id: "natural-2",
        name: "Шишки🌿",
        emoji: "🌲",
        desc: "УБОЙНАЯ СИЛА, БОЖЕСТВЕННАЯ МОЩЬ",
        variants: [
          buildVariantMulti("natural-2-dry","Permanent Marker 30+ТГК","🌲","мощный бескомпромиссный high-stone-эффект",{
            small:  {"0.5г":2690,"1.0г":3455,"2.0г":4360},
            medium: {"0.5г":2390,"1.0г":3475,"2.0г":4160,"3.0г":5094,"5.0г":6115},
            big:    {"0.5г":2629,"1.0г":3823,"2.0г":4576,"3.0г":5603,"5.0г":6727},
          }),
          buildVariantMulti("natural-2-fresh","Future #1","🌲","30 - 37% ТГК!!!",{
            small:  {"0.5г":2690,"1.0г":3455,"2.0г":4360},
            medium: {"0.5г":2590,"1.0г":3575,"2.0г":4460,"3.0г":5289,"5.0г":6260},
            big:    {"0.5г":2849,"1.0г":3933,"2.0г":4906,"3.0г":5818,"5.0г":6886},
          }),
          buildVariantMulti("natural-2-oil"," RS11 x Banana OG","🌲"," с ароматом цитрусовой цедры, фруктов и диковинных пряностей.🍊",{
            small:  {"0.5г":2690,"1.0г":3455,"2.0г":4360},
            medium: {"0.5г":2590,"1.0г":3575,"2.0г":4460,"3.0г":5289,"5.0г":6260},
            big:    {"0.5г":2849,"1.0г":3933,"2.0г":4906,"3.0г":5818,"5.0г":6886},
          }),
        ]
      },
    ]
  },

  bio: {
    name: "Стимуляторы",
    emoji: "⚡",
    items: [
      {
        id: "bio-1",
        name: "Кокаин/Амфетамин",
        emoji: "🧺",
        desc: "Ты не ловишь эйфорию — ты просто становишься центром комфорта.",
        variants: [
          buildVariantMulti("bio-1-a","Кокаин APPLE FishScale 🍏","🧺","Apple Fish Scale — когда лёгкость должна стоить дорого.",{
            small:  {"0.5г":4895,"1.0г":8678,"2.0г":14151},
            medium: {"0.5г":4895,"1.0г":8678,"2.0г":14151},
            big:    {"0.5г":5500,"1.0г":9750,"2.0г":15900},
          }),
          buildVariantMulti("bio-1-b","Амфетамин","🧺","Твоя ЦНС скажет тебе спасибо за выбор такого продукта.",{
            small:  {"1.0г":2661,"2.0г":4263,"3.0г":5776},
            medium: {"1.0г":2661,"2.0г":4263,"3.0г":5776},
            big:    {"1.0г":2990,"2.0г":4790,"3.0г":6490},
          }),
          buildVariantMulti("bio-1-c","Альфа Мука","🧺","Чистая, воздушная мука. Качество вас удивит.",{
            small:  {"0.5г":1709,"1.0г":2358,"2.0г":3524,"3.0г":5740,"5.0г":8678},
            medium: {"0.5г":1709,"1.0г":2358,"2.0г":3524,"3.0г":5740,"5.0г":8678},
            big:    {"0.5г":1920,"1.0г":2650,"2.0г":3960,"3.0г":6450,"5.0г":9750},
          }),
        ]
      },
      {
        id: "bio-2",
        name: "ALHA-PVP CRYSTAL 💎",
        emoji: "🌾",
        desc: "Ваш поставщик удовольствий, BUDDA.",
        variants: [
          buildVariantMulti("bio-2-a","A-PVP БЕЛЫЙ Crystal","🌾","мощный эффект, отсутствие побочных эффектов при соблюдении дозировок",{
            small:  {"0.5г":2394,"1.0г":3373,"2.0г":4672,"3.0г":5598,"5.0г":8001},
            medium: {"0.5г":2394,"1.0г":3373,"2.0г":4672,"3.0г":5598,"5.0г":8001},
            big:    {"0.5г":2690,"1.0г":3790,"2.0г":5250,"3.0г":6290,"5.0г":8990},
          }),
          buildVariantMulti("bio-2-b","A-PVP ЗЕЛЕНЫЙ Crystal","🌾","мощный эффект, отсутствие побочных эффектов при соблюдении дозировок",{
            small:  {"0.5г":2118,"1.0г":3151,"2.0г":4379,"3.0г":5180,"5.0г":6444},
            medium: {"0.5г":2118,"1.0г":3151,"2.0г":4379,"3.0г":5180,"5.0г":6444},
            big:    {"0.5г":2380,"1.0г":3540,"2.0г":4920,"3.0г":5820,"5.0г":7240},
          }),
        ]
      },
    ]
  },

  euphoria: {
    name: "Эйфоретики",
    emoji: "✨",
    items: [
      {
        id: "eu-1",
        name: "МЕФЕДРОН 💕",
        emoji: "🍓",
        desc: "Свежая партия от 20.03.2026 уже на витрине, все клады в касание! 💕",
        variants: [
          buildVariantMulti("eu-1-a","⚡Мефедрон Кристалл VIP (VHQ)⚡","🍓","Незабываемый каскад впечатлений 💫, идеальная чистота ✨",{
            small:  {"0.5г":2138,"1.0г":3182,"2.0г":4066,"3.0г":5016,"5.0г":7210},
            medium: {"0.5г":2138,"1.0г":3182,"2.0г":4066,"3.0г":5016,"5.0г":7210},
            big:    {"0.5г":2250,"1.0г":3350,"2.0г":4280,"3.0г":5280,"5.0г":7590},
          }),
          buildVariantMulti("eu-1-b","⚡️ Мефедрон Мука Pure Flour VHQ ⚡️","🍓","Незабываемый каскад впечатлений 💫, идеальная чистота ✨",{
            small:  {"0.5г":2014,"1.0г":2964,"2.0г":3971,"3.0г":4826,"5.0г":5976},
            medium: {"0.5г":2014,"1.0г":2964,"2.0г":3971,"3.0г":4826,"5.0г":5976},
            big:    {"0.5г":2120,"1.0г":3120,"2.0г":4180,"3.0г":5080,"5.0г":6290},
          }),
        ]
      },
      {
        id: "eu-2",
        name: "MDMA",
        emoji: "🫐",
        desc: "Лучший способ скоротать самые белые ночи или обеспечить их себе 🌌",
        variants: [
          buildVariantMulti("eu-2-a","MDMA ШАМПАНЬ","🫐","Идеальная поправка к самочувствию, чтобы открыть для себя мир бесконечной любви ❤️",{
            small:  {"0.5г":3743,"1.0г":5178,"2.0г":6574,"3.0г":7458},
            medium: {"0.5г":3743,"1.0г":5178,"2.0г":6574,"3.0г":7458},
            big:    {"0.5г":3940,"1.0г":5450,"2.0г":6920,"3.0г":7850},
          }),
          buildVariantMulti("eu-2-b","MDMA WHITE","🫐","Одна лишь эйфория и никаких оговорок мелким шрифтом.",{
            small:  {"0.5г":3667,"1.0г":4573,"2.0г":7057,"3.0г":7868},
            medium: {"0.5г":3667,"1.0г":4573,"2.0г":7057,"3.0г":7868},
            big:    {"0.5г":3860,"1.0г":4814,"2.0г":7428,"3.0г":8282},
          }),
        ]
      },
    ]
  },

  pharmacy: {
    name: "★ Марки | ★ Экстази ",
    desc: "Вас обязательно унесёт в сказочный мир, от которого Вы не сможете оторваться.",
    items: [
      {
        id: "ph-1",
        name: "Марки LSD | Экстази",
        emoji: "🍊",
        desc: "Витамин C, апельсиновый вкус",
        variants: [
          buildVariantMulti("ph-1-b","⚡️ LSD: 250mkg ⚡️","🍊","Подходит для продвинутых психонавтов.",{
            small:  {"2шт":2755,"3шт":3515,"5шт":4940},
            medium: {"2шт":2755,"3шт":3515,"5шт":4940},
            big:    {"2шт":2900,"3шт":3700,"5шт":5200},
          }),
          buildVariantMulti("ph-1-a","Экстази MIX 🔴🟣🔵","🍊","Эти таблетки позволят выжать максимум удовольствий и эйфории из любого мероприятия",{
            small:  {"2шт":2460,"3шт":3752,"5шт":4731},
            medium: {"2шт":2460,"3шт":3752,"5шт":4731},
            big:    {"2шт":2590,"3шт":3950,"5шт":4980},
          }),
        ]
      },
    ]
  }
};
