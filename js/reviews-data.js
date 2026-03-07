const reviewsData = [
{
country:"RU",
type:"⭐ Отзыв",
product:"Cap Junky | ТГК-33 - 34 | 1.0г",
city:"Москва",
district:"ЗАО",
text:`Cap Junky огонь, ТГК 34%, улетел с полграмма. Вес ровный, спасибо магазу.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Permanent Marker | ТГК-34 | 2.0г",
city:"Санкт-Петербург",
district:"Невский",
text:`Permanent Marker вкус специфический, ТГК мощный. Два грамма взял, надолго хватит.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Future #1 | 1.0г",
city:"Екатеринбург",
district:"Верх-Исетский",
text:`Future #1 — название оправдывает. Очень плавный, но мощный. Вес в норме.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Orange Creampop | ТГК-30 - 35 | 3.0г",
city:"Новосибирск",
district:"Октябрьский",
text:`Orange Creampop — апельсин в чистом виде, ТГК 35% космос. Три грамма, теперь с запасом.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Lemon Cherry Runtz | ТГК-33 | 5.0г",
city:"Казань",
district:"Советский",
text:`Лимон-вишня, очень вкусный сорт. ТГК 33%, улетел. Пять грамм взял, теперь надолго.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш Ice-O-Lator | Lemon Haze | 0.5г",
city:"Нижний Новгород",
district:"Нижегородский",
text:`Лимонный айс, полграмма. Качественный, пузырится. Для пробы самое то.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш ice-o-lator | Twix | 1.0г",
city:"Самара",
district:"Октябрьский",
text:`Twix — сладкий, как печенька. Мягкий, пластичный. Вес ровно грамм.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Ice-O-Lator | Paris Saint-Germain | 2.0г",
city:"Омск",
district:"Центральный",
text:`PSG гашиш, неожиданно вкусный. Два грамма, растащил на пару дней. Качество топ.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Hash Mustang import VHQ+ | 3.0г",
city:"Челябинск",
district:"Калининский",
text:`Mustang VHQ+ — мягкий, запах конский. Три грамма, хороший запас.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш ICE-O-LATOR Papaya🥭 | 5.0г",
city:"Уфа",
district:"Орджоникидзевский",
text:`Папайя — манго вкус, очень нежный гашиш. Пять грамм, теперь с запасом.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Cap Junky | ТГК-33 - 34 | 0.5г",
city:"Москва",
district:"СЗАО",
text:`Cap Junky, полграмма. Крепкий, ТГК 34%. Место искал долго, замёрз. Но товар норм.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Permanent Marker | ТГК-34 | 1.0г",
city:"Санкт-Петербург",
district:"Кировский",
text:`Permanent Marker, грамм. Немного не по координатам, полчаса искал. Но качество радует.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Future #1 | 2.0г",
city:"Екатеринбург",
district:"Ленинский",
text:`Future #1, два грамма. Наход был в сугробе, замёрз пока нашёл. Шишка нормальная.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Orange Creampop | ТГК-30 - 35 | 3.0г",
city:"Новосибирск",
district:"Дзержинский",
text:`Orange Creampop, три грамма. Копался долго, место было не очень. Но товар отработал.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Lemon Cherry Runtz | ТГК-33 | 5.0г",
city:"Казань",
district:"Авиастроительный",
text:`Lemon Cherry Runtz, пять грамм. Немного не там искал, минус звезда за замерзшие руки.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш Ice-O-Lator | Lemon Haze | 0.5г",
city:"Нижний Новгород",
district:"Канавинский",
text:`Лимонный айс, полграмма. Место было людное, пришлось ждать. Гашиш норм.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш ice-o-lator | Twix | 1.0г",
city:"Самара",
district:"Промышленный",
text:`Twix, грамм. Немного затупил с координатами, но нашёл. Гашиш мягкий.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Ice-O-Lator | Paris Saint-Germain | 2.0г",
city:"Омск",
district:"Советский",
text:`PSG гашиш, два грамма. Снега много, искал полчаса. Но качество огонь.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Hash Mustang import VHQ+ | 3.0г",
city:"Челябинск",
district:"Тракторозаводский",
text:`Mustang, три грамма. Место было странное, думал не найду. Но всё ок.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш ICE-O-LATOR Papaya🥭 | 5.0г",
city:"Уфа",
district:"Кировский",
text:`Папайя, пять грамм. Искал долго, чуть не замёрз. Гашиш вкусный, но поиск подкачал.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Cap Junky | ТГК-33 - 34 | 1.0г",
city:"Москва",
district:"ВАО",
text:`Cap Junky, грамм. Ненаход, копался полчаса — ничего. Пришлось отбой писать.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Permanent Marker | ТГК-34 | 2.0г",
city:"Санкт-Петербург",
district:"Фрунзенский",
text:`Permanent Marker, два грамма. Ненашёл, место было перекопано. Обидно, минус три звезды.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Future #1 | 3.0г",
city:"Екатеринбург",
district:"Орджоникидзевский",
text:`Future #1, три грамма. Искал час — пусто. Видно шакалы утащили.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Orange Creampop | ТГК-30 - 35 | 5.0г",
city:"Новосибирск",
district:"Калининский",
text:`Orange Creampop, пять грамм. Клад не на месте, перерыл всё. Магазу респект, но звёзды снял.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш Ice-O-Lator | Lemon Haze | 0.5г",
city:"Казань",
district:"Московский",
text:`Лимонный айс, полграмма. Ненашёл, просидел час на морозе. Обида.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш ice-o-lator | Twix | 1.0г",
city:"Нижний Новгород",
district:"Ленинский",
text:`Twix, грамм. Пусто, видно кто-то до меня забрал. Не фартануло.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Cap Junky | ТГК-33 - 34 | 0.5г",
city:"Москва",
district:"ЮВАО",
text:`Cap Junky, полграмма. Искал, искал — нет. Думаю, перепрятали. Зря замёрз.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Permanent Marker | ТГК-34 | 1.0г",
city:"Санкт-Петербург",
district:"Красногвардейский",
text:`Permanent Marker, грамм. Ненаход, место было завалено снегом. Не докопался.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Future #1 | 2.0г",
city:"Екатеринбург",
district:"Железнодорожный",
text:`Future #1, два грамма. Пусто, видимо шакалы сработали. Магазин не виноват, но осадочек.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш ICE-O-LATOR Papaya🥭 | 5.0г",
city:"Уфа",
district:"Калининский",
text:`Папайя, пять грамм. Ненашёл, промёрз до костей. Очень расстроен.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Cap Junky | ТГК-33 - 34 | 3.0г",
city:"Ростов-на-Дону",
district:"Пролетарский",
text:`Cap Junky огонь, ТГК 34%. Вес ровно, всё чётко. Буду ещё брать.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Permanent Marker | ТГК-34 | 1.0г",
city:"Волгоград",
district:"Центральный",
text:`Permanent Marker, грамм. Вкус специфический, но кайфовый. ТГК мощный.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Future #1 | 2.0г",
city:"Красноярск",
district:"Свердловский",
text:`Future #1 — очень плавный заход. Два грамма, хватило на вечер.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Orange Creampop | ТГК-30 - 35 | 0.5г",
city:"Воронеж",
district:"Ленинский",
text:`Orange Creampop, полграмма. Апельсин чисты, ТГК 35% — улёт.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Lemon Cherry Runtz | ТГК-33 | 5.0г",
city:"Пермь",
district:"Индустриальный",
text:`Lemon Cherry Runtz, пять грамм. Очень вкусный сорт, вишня чувствуется. Запасся.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш Ice-O-Lator | Lemon Haze | 1.0г",
city:"Тюмень",
district:"Центральный",
text:`Лимонный айс, грамм. Пузырится красиво, качественный гашиш.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш ice-o-lator | Twix | 2.0г",
city:"Ижевск",
district:"Первомайский",
text:`Twix, два грамма. Сладкий, как печенье. Мягкий, пластичный.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Ice-O-Lator | Paris Saint-Germain | 3.0г",
city:"Саратов",
district:"Кировский",
text:`PSG гашиш, три грамма. Интересный вкус, необычный. Качество топ.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Hash Mustang import VHQ+ | 0.5г",
city:"Барнаул",
district:"Индустриальный",
text:`Mustang VHQ+, полграмма. Мягкий, запах конюшни. Для пробы норм.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш ICE-O-LATOR Papaya🥭 | 2.0г",
city:"Хабаровск",
district:"Краснофлотский",
text:`Папайя, два грамма. Манго вкус, очень нежный гашиш. Доволен.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Cap Junky | ТГК-33 - 34 | 1.0г",
city:"Владивосток",
district:"Фрунзенский",
text:`Cap Junky, грамм. ТГК 34%, улетел знатно. Вес ровно, спасибо.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Permanent Marker | ТГК-34 | 3.0г",
city:"Краснодар",
district:"Прикубанский",
text:`Permanent Marker, три грамма. Химозный вкус, но мощный. Надолго хватит.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Orange Creampop | ТГК-30 - 35 | 2.0г",
city:"Сочи",
district:"Центральный",
text:`Orange Creampop, два грамма. Апельсин, ТГК 35% — космос. Вес ровный.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Cap Junky | ТГК-33 - 34 | 0.5г",
city:"Москва",
district:"Зеленоград",
text:`Cap Junky, полграмма. Искал 20 минут, чуть не замёрз. Но товар норм.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Permanent Marker | ТГК-34 | 1.0г",
city:"Санкт-Петербург",
district:"Колпино",
text:`Permanent Marker, грамм. Место было не очень, пришлось попотеть. Качество огонь.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Future #1 | 2.0г",
city:"Екатеринбург",
district:"Академический",
text:`Future #1, два грамма. Немного не по координатам, но нашёл. Замёрз.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Orange Creampop | ТГК-30 - 35 | 3.0г",
city:"Новосибирск",
district:"Первомайский",
text:`Orange Creampop, три грамма. Снега по колено, искал полчаса. Товар отработал.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Lemon Cherry Runtz | ТГК-33 | 5.0г",
city:"Казань",
district:"Ново-Савиновский",
text:`Lemon Cherry Runtz, пять грамм. Долго копался, руки замёрзли. Но шишка топ.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш Ice-O-Lator | Lemon Haze | 0.5г",
city:"Нижний Новгород",
district:"Автозаводский",
text:`Лимонный айс, полграмма. Место людное, пришлось ждать 10 минут. Гашиш норм.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш ice-o-lator | Twix | 1.0г",
city:"Самара",
district:"Железнодорожный",
text:`Twix, грамм. Немного затупил с поиском, но нашёл. Минус за замерзшие руки.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Ice-O-Lator | Paris Saint-Germain | 2.0г",
city:"Омск",
district:"Ленинский",
text:`PSG гашиш, два грамма. Искал дольше обычного, снег помешал. Гашиш мягкий.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Hash Mustang import VHQ+ | 3.0г",
city:"Челябинск",
district:"Металлургический",
text:`Mustang, три грамма. Место было странное, думал не найду. Но всё ок.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш ICE-O-LATOR Papaya🥭 | 5.0г",
city:"Уфа",
district:"Дёмский",
text:`Папайя, пять грамм. Копался долго, чуть не замёрз. Гашиш вкусный.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Cap Junky | ТГК-33 - 34 | 1.0г",
city:"Москва",
district:"Троицк",
text:`Cap Junky, грамм. Ненаход, копался полчаса — пусто. Место перекопано.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Permanent Marker | ТГК-34 | 2.0г",
city:"Санкт-Петербург",
district:"Петродворцовый",
text:`Permanent Marker, два грамма. Ненашёл, проторчал час на холоде. Обидно.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Future #1 | 3.0г",
city:"Екатеринбург",
district:"Ботанический",
text:`Future #1, три грамма. Искал — нет. Видно шакалы утащили.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Orange Creampop | ТГК-30 - 35 | 5.0г",
city:"Новосибирск",
district:"Заельцовский",
text:`Orange Creampop, пять грамм. Клад не на месте, перерыл всё. Зря замёрз.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш Ice-O-Lator | Lemon Haze | 1.0г",
city:"Казань",
district:"Вахитовский",
text:`Лимонный айс, грамм. Ненашёл, просидел на морозе. Не фарт.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш ice-o-lator | Twix | 2.0г",
city:"Нижний Новгород",
district:"Сормовский",
text:`Twix, два грамма. Пусто, видно кто-то до меня забрал.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Cap Junky | ТГК-33 - 34 | 0.5г",
city:"Москва",
district:"Щербинка",
text:`Cap Junky, полграмма. Искал, искал — нет. Думаю, перепрятали.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Permanent Marker | ТГК-34 | 3.0г",
city:"Санкт-Петербург",
district:"Кронштадт",
text:`Permanent Marker, три грамма. Ненаход, место завалено снегом.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Future #1 | 5.0г",
city:"Екатеринбург",
district:"Уралмаш",
text:`Future #1, пять грамм. Пусто, видимо шакалы сработали.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш ICE-O-LATOR Papaya🥭 | 3.0г",
city:"Уфа",
district:"Сипайлово",
text:`Папайя, три грамма. Ненашёл, промёрз до костей. Очень расстроен.`,
rating:"⭐⭐⭐",
author:"Аноним"
},
  
{
country:"RU",
type:"⭐ Отзыв",
product:"Cap Junky | ТГК-33 - 34 | 2.0г",
city:"Ростов-на-Дону",
district:"Железнодорожный",
text:`Cap Junky, два грамма. ТГК 34%, улетел знатно. Вес ровно, всё чётко.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Permanent Marker | ТГК-34 | 3.0г",
city:"Волгоград",
district:"Тракторозаводский",
text:`Permanent Marker, три грамма. Вкус химозный, но кайфовый. ТГК мощный.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Future #1 | 5.0г",
city:"Красноярск",
district:"Кировский",
text:`Future #1, пять грамм. Очень плавный, глубокий. Запасся теперь.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Orange Creampop | ТГК-30 - 35 | 1.0г",
city:"Воронеж",
district:"Коминтерновский",
text:`Orange Creampop, грамм. Апельсин чисты, ТГК 35% — улёт.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Lemon Cherry Runtz | ТГК-33 | 2.0г",
city:"Пермь",
district:"Свердловский",
text:`Lemon Cherry Runtz, два грамма. Вишня с лимоном, очень вкусно.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш Ice-O-Lator | Lemon Haze | 2.0г",
city:"Тюмень",
district:"Ленинский",
text:`Лимонный айс, два грамма. Пузырится красиво, качественный гашиш.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш ice-o-lator | Twix | 3.0г",
city:"Ижевск",
district:"Индустриальный",
text:`Twix, три грамма. Сладкий, как печенье. Мягкий, пластичный.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Ice-O-Lator | Paris Saint-Germain | 5.0г",
city:"Саратов",
district:"Заводской",
text:`PSG гашиш, пять грамм. Интересный вкус, необычный. Качество топ.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Hash Mustang import VHQ+ | 1.0г",
city:"Барнаул",
district:"Железнодорожный",
text:`Mustang VHQ+, грамм. Мягкий, запах конюшни. Хороший гашиш.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш ICE-O-LATOR Papaya🥭 | 3.0г",
city:"Хабаровск",
district:"Центральный",
text:`Папайя, три грамма. Манго вкус, очень нежный гашиш. Доволен.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Cap Junky | ТГК-33 - 34 | 5.0г",
city:"Владивосток",
district:"Ленинский",
text:`Cap Junky, пять грамм. ТГК 34%, улетел знатно. Вес ровно, спасибо.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Permanent Marker | ТГК-34 | 1.0г",
city:"Краснодар",
district:"Западный",
text:`Permanent Marker, грамм. Химозный вкус, но мощный. Отличный сорт.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Orange Creampop | ТГК-30 - 35 | 3.0г",
city:"Сочи",
district:"Хостинский",
text:`Orange Creampop, три грамма. Апельсин, ТГК 35% — космос.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Lemon Cherry Runtz | ТГК-33 | 0.5г",
city:"Мурманск",
district:"Первомайский",
text:`Lemon Cherry Runtz, полграмма. На пробу взял, очень вкусный.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Future #1 | 1.0г",
city:"Архангельск",
district:"Октябрьский",
text:`Future #1, грамм. Очень плавный, но мощный. Качество супер.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш Ice-O-Lator | Lemon Haze | 3.0г",
city:"Калининград",
district:"Ленинградский",
text:`Лимонный айс, три грамма. Качественный, пузырится. Доволен.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш ice-o-lator | Twix | 5.0г",
city:"Севастополь",
district:"Ленинский",
text:`Twix, пять грамм. Сладкий, мягкий. Запасся надолго.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Ice-O-Lator | Paris Saint-Germain | 1.0г",
city:"Ялта",
district:"Центральный",
text:`PSG гашиш, грамм. Интересный вкус. Для пробы норм.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Hash Mustang import VHQ+ | 2.0г",
city:"Симферополь",
district:"Киевский",
text:`Mustang VHQ+, два грамма. Мягкий, запах насыщенный. Хорош.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш ICE-O-LATOR Papaya🥭 | 1.0г",
city:"Евпатория",
district:"Центральный",
text:`Папайя, грамм. Манго вкус, очень нежный. Буду ещё брать.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Cap Junky | ТГК-33 - 34 | 3.0г",
city:"Тула",
district:"Пролетарский",
text:`Cap Junky, три грамма. ТГК 34%, улетел. Вес ровно.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Permanent Marker | ТГК-34 | 5.0г",
city:"Калуга",
district:"Московский",
text:`Permanent Marker, пять грамм. Вкус химозный, мощный сорт.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Orange Creampop | ТГК-30 - 35 | 2.0г",
city:"Рязань",
district:"Октябрьский",
text:`Orange Creampop, два грамма. Апельсин чисты, ТГК 35%.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Lemon Cherry Runtz | ТГК-33 | 3.0г",
city:"Владимир",
district:"Ленинский",
text:`Lemon Cherry Runtz, три грамма. Вишня с лимоном, кайф.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Future #1 | 2.0г",
city:"Ярославль",
district:"Кировский",
text:`Future #1, два грамма. Плавный, глубокий. Хороший сорт.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш Ice-O-Lator | Lemon Haze | 5.0г",
city:"Иваново",
district:"Фрунзенский",
text:`Лимонный айс, пять грамм. Качественный, пузырится. Запасся.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш ice-o-lator | Twix | 2.0г",
city:"Кострома",
district:"Центральный",
text:`Twix, два грамма. Сладкий, как печенька. Мягкий.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Ice-O-Lator | Paris Saint-Germain | 3.0г",
city:"Тверь",
district:"Заволжский",
text:`PSG гашиш, три грамма. Необычный вкус. Качество топ.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

  {
country:"RU",
type:"⭐ Отзыв",
product:"Жидкость с ТГК – Maui Wowie | 30 мл",
city:"Москва",
district:"ЮАО",
delivery:"СДЭК",
text:`На ПВЗ зашёл, девушка штрихкод пробила, отдала посылку. Внутри всё запаяно, жижа не течёт. Maui Wowie вкус тропический, ТГК 28% бодрит. 5 баллов однозначно.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Жидкость с ТГК – Weeding Cake | 30 мл",
city:"Санкт-Петербург",
district:"Невский",
delivery:"Boxberry",
text:`Boxberry ПВЗ прямо у метро, забрал за минуту. Упаковка плотный конверт с пупыркой. Weeding Cake — вкус торта, сладкий. ТГК 28%, друг с одного тяги уплыл.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Вейп с ТГК – 9 Pound Hammer | 3 мл x2 шт",
city:"Екатеринбург",
district:"Верх-Исетский",
delivery:"Почта России",
text:`Думал с почтой проблемы будут, но нет. Пришло извещение, забрал в отделении. Посылка не вскрыта, внутри два шота. 9 Pound Hammer ТГК 90% — вырубает знатно.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"БРАУНИ С ТГК | 4 шт",
city:"Новосибирск",
district:"Ленинский",
delivery:"5Post",
text:`5Post в Пятерочке, очень удобно. Забрал после работы. Брауни в заводской упаковке, свежие, мягкие. Съел одно и приехал, часа 3 кайфовал. Упаковано на совесть.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Грибы NIAGARA | 5 г",
city:"Казань",
district:"Советский",
delivery:"Яндекс Доставка",
text:`Яндекс привез в ПВЗ за 3 дня. Пришло уведомление на телефон. Грибы в вакууме, вес 5г ровно. NIAGARA лютые, 6 часов путешествовал. Всё чётко, 5 баллов.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш ICE-O-LATOR Papaya🥭 | 1.0г",
city:"Нижний Новгород",
district:"Автозаводский",
delivery:"СДЭК",
text:`СДЭК ПВЗ рядом с домом, забрал быстро. Упаковка плотный зиплок, запаха нет. Papaya пахнет манго, мягкий, пластичный. Очень достойный гашиш.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Семена сорта Lemon Cherry Cookies, ТГК-28.5 | x5 шт",
city:"Самара",
district:"Октябрьский",
delivery:"Boxberry",
text:`Boxberry ПВЗ в ТЦ, забрал без очереди. Семена в фирменном блистере, 5 штук целые. Lemon Cherry Cookies для автоцветов крепкий ТГК. Упаковано заебись.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Расслабляющий чай Кратом | 500 гр",
city:"Омск",
district:"Кировский",
delivery:"Почта России",
text:`Почту переживал, но пришло за 6 дней. Посылка не помятая, внутри пачка запаяна. Кратом 500гр, вес ровно. Чай горьковатый, с медом норм, расслабляет хорошо.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Вейп с ТГК – Dabbalicious 96% | 3 мл",
city:"Челябинск",
district:"Калининский",
delivery:"5Post",
text:`5Post в Пятерочке, девушка нашла быстро. Упаковка крафт конверт. Dabbalicious 96% — это пиздец, с одного тяги в космосе. Для опытных только.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Жидкость с ТГК – Permanent Marker | 30 мл",
city:"Уфа",
district:"Октябрьский",
delivery:"Яндекс Доставка",
text:`Яндекс ПВЗ в спальнике, забрал на следующий день после прихода. Жидкость в картонной тубе, не протекла. Permanent Marker вкус химозный, ТГК 34% улетел.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Грибы HYBRID ALBINO A+ | 2 г",
city:"Ростов-на-Дону",
district:"Пролетарский",
delivery:"СДЭК",
text:`СДЭК приехали за 4 дня. ПВЗ чистый, вежливый персонал. Альбиносы 2г, для микроскопии норм. Настроение подняли, визуалы легкие. Упаковка герметичная.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Мармеладки микс с ТГК | 10 шт",
city:"Волгоград",
district:"Центральный",
delivery:"Boxberry",
text:`Boxberry доставили за 4 дня. Мармеладки в пакете с замком, 10 штук разноцветных. Кисленькие, очень вкусные. Две съел и уплыл. Товар на 5 баллов.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Семена сорта Orange Creampop fem США, Феминизированные, Фотопериодные, ТГК-30-35 | x2 шт",
city:"Красноярск",
district:"Свердловский",
delivery:"Почта России",
text:`Почта шла 8 дней, но посылку отдали целую. Семена Orange Creampop, 2 штуки в блистере. ТГК до 35%, элитная генетика. Буду растить с любовью.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Вейп с ТГК – Tropical Fruits Haze | 3 мл x3 шт",
city:"Воронеж",
district:"Ленинский",
delivery:"5Post",
text:`5Post в Пятерочке, забрал вечером после работы. 3 шота Tropical Fruits. Вкус фруктовый, ТГК 85%, приятный расслабон. Упаковано всё плотно, ничего не разбилось.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш Hash Mustang import VHQ+ | 2.0г",
city:"Пермь",
district:"Индустриальный",
delivery:"Яндекс Доставка",
text:`Яндекс привез через 3 дня. ПВЗ в соседнем доме. Mustang мягкий как пластилин, запах конюшни насыщенный. Вес 2г ровно. Качество VHQ+ отрабатывает.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Жидкость с ТГК – Super Lemon HAZE | 30 мл",
city:"Тюмень",
district:"Центральный",
delivery:"СДЭК",
text:`СДЭК ПВЗ на первом этаже ТЦ. Забрал быстро, упаковка без повреждений. Super Lemon HAZE лимонный вкус, ТГК 29% бодрит с утра. Для активного дня самое то.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Шоколадные печеньки с ТГК | 15 шт",
city:"Ижевск",
district:"Первомайский",
delivery:"Boxberry",
text:`Boxberry доставили за 4 дня. Печеньки в коробке, 15 штук. Съел три и вырубился на полдня. Очень вкусные, шоколадные. Упаковано аккуратно, ничего не поломалось.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Грибы McKENNAII #2 | 5 г",
city:"Саратов",
district:"Кировский",
delivery:"Почта России",
text:`Почта шла 7 дней. Думал проблемы будут, но посылку отдали. Маккена 5г — глубокий трип, 5 часов путешествия. Грибы качественные, сухие. Упаковка герметичная.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Семена сорта Dos-Vi-Dos fem, ТГК-30 | x3 шт",
city:"Барнаул",
district:"Центральный",
delivery:"5Post",
text:`5Post в магазине у дома, забрал за минуту. Семена Dos-Vi-Dos 3 штуки, ТГК 30. В блистере целые. Упаковано в крафт конверт. Всё на месте.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Жидкость с ТГК – Original Z | 30 мл",
city:"Хабаровск",
district:"Краснофлотский",
delivery:"Яндекс Доставка",
text:`Яндекс ПВЗ открыт до 10 вечера, удобно. Original Z улетный, ТГК 28% чувствуется с первой тяги. Вкус травяной, приятный. Упаковка заводская.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Вейп с ТГК – Jungle Monkey | 3 мл",
city:"Владивосток",
district:"Фрунзенский",
delivery:"СДЭК",
text:`СДЭК доставил за 5 дней. ПВЗ чистый. Jungle Monkey весёлый, ТГК 80%, часа 3 ржал с кота. Упаковано в тубу, не разбилось.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"БРАУНИ С ТГК | 2 шт",
city:"Краснодар",
district:"Прикубанский",
delivery:"Boxberry",
text:`Boxberry привез за 4 дня. ПВЗ в ТЦ. 2 брауни на пробу. Съел одно и приехал. Очень вкусные, шоколадные. Теперь буду пачку брать.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Грибы NIAGARA | 10 г",
city:"Сочи",
district:"Центральный",
delivery:"Почта России",
text:`Почта шла 9 дней, упаковка чуть мятая но внутри всё цело. Ниагара 10г, запасся. Грибы лютые, после 3 грамм уже путешествие. Качество огонь.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш ice-o-lator Twix | 3.0г",
city:"Мурманск",
district:"Первомайский",
delivery:"5Post",
text:`5Post приехал за 4 дня. Twix гашиш пахнет печеньем, мягкий, пластичный. 3 грамма растянул на неделю. Упаковано в зиплок без запаха.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Семена сорта Bruce Banner Fast Version, ТГК-29 | x1 шт",
city:"Архангельск",
district:"Октябрьский",
delivery:"Яндекс Доставка",
text:`Яндекс ПВЗ в центре. Bruce Banner одна семка, ТГК 29. Халк любимый сорт. В блистере целая. Упаковано надёжно. Буду растить.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Жидкость с ТГК – Fresh Mint | 30 мл",
city:"Калининград",
district:"Московский",
delivery:"СДЭК",
text:`СДЭК доставил за 4 дня. ПВЗ рядом с работой. Мятка бодрит, ТГК в меру. Для дня норм, не вырубает. Упаковка не протекла.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Вейп с ТГК – Laughing Buddha | 3 мл x2 шт",
city:"Севастополь",
district:"Ленинский",
delivery:"Boxberry",
text:`Boxberry привез за 4 дня. Два Будды, будет весело. ТГК средний, позитивный. Сидели с другом ржали весь вечер. Упаковка плотная.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Мармеладки микс с ТГК | 5 шт",
city:"Ялта",
district:"Центральный",
delivery:"Почта России",
text:`Почта шла 7 дней. Мармеладки 5 штук, кисленькие. Съел две и приехал. Упаковка целая, ничего не вытекло. Товар норм.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Семена сорта Polar Gelato by Sherbinskis, ТГК-27-30 | x2 шт",
city:"Симферополь",
district:"Киевский",
delivery:"5Post",
text:`5Post в Пятерочке, забрал быстро. Polar Gelato 2 семки, Шербинскис элитка. ТГК до 30. В блистере целые. Упаковано на совесть.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Расслабляющий чай Кратом | 1000 гр",
city:"Евпатория",
district:"Новый город",
delivery:"Яндекс Доставка",
text:`Яндекс привез через 3 дня. Килограмм кратома, упаковка заводская. Пью каждый день, от нервов помогает. В ПВЗ выдали без очереди.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Грибы HYBRID ALBINO A+ | 5 г",
city:"Тула",
district:"Пролетарский",
delivery:"СДЭК",
text:`СДЭК ПВЗ в торговом центре. Альбиносы 5г — жёсткий трип. 5 часов путешествовал по мирам. Упаковка вакуумная. Всё цело.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Жидкость с ТГК – Dosi Kush | 30 мл",
city:"Калуга",
district:"Московский",
delivery:"Boxberry",
text:`Boxberry доставил за 5 дней. Дози куш индика, ТГК 28%. После работы затянулся и уснул в кресле. Упаковка не подвела.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Вейп с ТГК – OG Forbidden Berries | 3 мл x3 шт",
city:"Рязань",
district:"Октябрьский",
delivery:"Почта России",
text:`Почта шла 8 дней, но посылка целая. Запретная ягодка 3 шота, ТГК 85%. Вкус ягодный, крепкий. Друзьям раздам.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Шоколадные печеньки с ТГК | 8 шт",
city:"Владимир",
district:"Ленинский",
delivery:"5Post",
text:`5Post в магазине, забрал быстро. 8 печенек, съел две и приехал. Очень вкусные, шоколадные. Упаковка не помята.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Семена сорта Zkittlez Auto, ТГК-24 | x5 шт",
city:"Ярославль",
district:"Кировский",
delivery:"Яндекс Доставка",
text:`Яндекс ПВЗ у дома. Zkittlez авто 5 семок, ТГК 24. Для автоцветов норм. В блистере целые. Буду сажать весной.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш Ice-O-Lator Paris Saint-Germain | 2.0г",
city:"Иваново",
district:"Фрунзенский",
delivery:"СДЭК",
text:`СДЭК приехал за 4 дня. PSG гашиш пахнет интересно, мягкий. 2 грамма хватило на пару дней. Упаковка плотная.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Жидкость с ТГК – Lemon Cherry Gelato | 30 мл",
city:"Кострома",
district:"Центральный",
delivery:"Boxberry",
text:`Boxberry ПВЗ в центре. Лимон-вишня-джелато, вкус конфетка. ТГК 29%, улет знатный. Упаковка заводская. Всё ок.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Грибы McKENNAII #2 | 2 г",
city:"Тверь",
district:"Заволжский",
delivery:"Почта России",
text:`Почта шла 7 дней. Маккена 2г, для первого раза мягкое путешествие. Грибы сухие, упаковка целая. Доволен.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Вейп с ТГК – Kiwi Guava Kush | 3 мл",
city:"Смоленск",
district:"Ленинский",
delivery:"5Post",
text:`5Post в Пятерочке, забрал за минуту. Киви-гуава сочный вкус, ТГК 80%. Приятный расслабон. Упаковка не разбита.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"БРАУНИ С ТГК | 10 шт",
city:"Брянск",
district:"Бежицкий",
delivery:"Яндекс Доставка",
text:`Яндекс привез через 3 дня. 10 брауни, запасся. Съел одно и приехал. Очень вкусные. В ПВЗ вежливая девушка.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Семена сорта Guava Auto fem (FastBuds), ТГК-28 | x3 шт",
city:"Орел",
district:"Северный",
delivery:"СДЭК",
text:`СДЭК ПВЗ рядом с домом. Guava Auto 3 семки, FastBuds топ. ТГК 28. В блистере целые. Упаковано надёжно.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш ICE-O-LATOR Papaya🥭 | 5.0г",
city:"Курск",
district:"Центральный",
delivery:"Boxberry",
text:`Boxberry доставил за 5 дней. Papaya гашиш пахнет манго, очень нежный. 5 грамм растянул. Упаковка зиплок без запаха.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Жидкость с ТГК – OG Kush | 30 мл",
city:"Липецк",
district:"Правобережный",
delivery:"Почта России",
text:`Почта шла 8 дней, коробка немного мятая но внутри всё цело. OG Kush классика, ТГК 27%. После работы расслабляет.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Мармеладки микс с ТГК | 15 шт",
city:"Тамбов",
district:"Ленинский",
delivery:"5Post",
text:`5Post в магазине у дома. 15 мармеладок, целая коробка. Кисленькие, вкусные. Две съел и уплыл. Упаковка целая.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Вейп с ТГК – Euforic | 3 мл x2 шт",
city:"Пенза",
district:"Первомайский",
delivery:"Яндекс Доставка",
text:`Яндекс ПВЗ в спальнике. Euforic два шота, ТГК 85%. Эйфория лёгкая, приятная. Второй другу подарю. Упаковано плотно.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Грибы NIAGARA | 3 г",
city:"Саранск",
district:"Пролетарский",
delivery:"СДЭК",
text:`СДЭК приехал за 4 дня. Ниагара 3г — хороший трип, 4 часа путешествия. Грибы качественные, сухие. Упаковка герметичная.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Семена сорта Dos-Vi-Dos fem, ТГК-30 | x5 шт",
city:"Йошкар-Ола",
district:"Центральный",
delivery:"Boxberry",
text:`Boxberry ПВЗ в ТЦ. Dos-Vi-Dos 5 семок, ТГК 30. Крепкий сорт. В блистере целые. Упаковано в крафт конверт.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Расслабляющий чай Кратом | 250 гр",
city:"Чебоксары",
district:"Калининский",
delivery:"Почта России",
text:`Почта шла 7 дней. Кратом 250гр, упаковка целая. Завариваю вечером, расслабляет хорошо. Чай горьковатый, с медом норм.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Жидкость с ТГК – Wild Watermelon | 30 мл",
city:"Ульяновск",
district:"Ленинский",
delivery:"5Post",
text:`5Post в Пятерочке. Арбузная жижа, вкус сочный. ТГК 27%, ровно заходит. Упаковка не протекла. На ПВЗ быстро отдали.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Вейп с ТГК – Big Bad Bear | 3 мл x3 шт",
city:"Тольятти",
district:"Автозаводский",
delivery:"Яндекс Доставка",
text:`Яндекс привез через 3 дня. Медведь злой три шота, ТГК 90%. Крепкий пиздец, новичкам не соваться. Упаковка целая.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш Hash Mustang import VHQ+ | 1.0г",
city:"Москва",
district:"ВАО",
delivery:"СДЭК",
text:`СДЭК ПВЗ в пяти минутах. Mustang грамм, мягкий как пластилин. Запах конюшни, качественный. На пробу самое то.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Шоколадные печеньки с ТГК | 4 шт",
city:"Санкт-Петербург",
district:"Калининский",
delivery:"Boxberry",
text:`Boxberry доставил за 4 дня. 4 печеньки, съел одну и приехал. Очень вкусные, шоколадные. Упаковка не помята.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Семена сорта Orange Creampop fem США, ТГК-30-35 | x1 шт",
city:"Екатеринбург",
district:"Чкаловский",
delivery:"Почта России",
text:`Почта шла 8 дней, посылка целая. Orange Creampop одна семка, ТГК до 35. Элитная генетика. Буду растить.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Грибы HYBRID ALBINO A+ | 3 г",
city:"Новосибирск",
district:"Дзержинский",
delivery:"5Post",
text:`5Post в Пятерочке. Альбиносы 3г, 4 часа путешествия. Визуалы мощные. Упаковка вакуумная. На ПВЗ без очереди.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Жидкость с ТГК – Permanent Marker | 30 мл",
city:"Казань",
district:"Авиастроительный",
delivery:"Яндекс Доставка",
text:`Яндекс ПВЗ в спальнике. Permanent Marker ТГК 34%, улетел с полтяги. Вкус химозный но кайфовый. Упаковка заводская.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Hash Mustang import VHQ+ | 5.0г",
city:"Смоленск",
district:"Ленинский",
text:`Mustang VHQ+, пять грамм. Мягкий, запах конюшни. Хорош.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш ICE-O-LATOR Papaya🥭 | 2.0г",
city:"Брянск",
district:"Бежицкий",
text:`Папайя, два грамма. Манго вкус, нежный. Доволен.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Жидкость с ТГК – Maui Wowie | 30 мл",
city:"Москва",
district:"ЗАО",
delivery:"СДЭК",
text:`Maui Wowie приехал на ПВЗ СДЭК через 4 дня. Вкус тропический, ТГК 28% бодрит. Упаковка заводская, всё сухо. На ПВЗ отдали быстро, без очереди.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Жидкость с ТГК – Weeding Cake | 30 мл",
city:"Санкт-Петербург",
district:"Приморский",
delivery:"Boxberry",
text:`Weeding Cake сладкий тортик, Boxberry доставил за 5 дней. ТГК 28%, друг с одной тяги улетел. Упаковано в пупырку, ничего не потекло.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Жидкость с ТГК – Wild Watermelon | 30 мл",
city:"Екатеринбург",
district:"Кировский",
delivery:"Почта России",
text:`Wild Watermelon арбузный вкус, почтой шло 8 дней. Посылка пришла целая, внутри конверт с жижей. ТГК 27%, весь вечер кайфовал.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Жидкость с ТГК – Dosi Kush | 30 мл",
city:"Новосибирск",
district:"Центральный",
delivery:"5Post",
text:`Dosi Kush индика, 5Post в Пятерочке забрал после работы. ТГК 28%, через 10 минут ноги ватные. Упаковка целая, без нареканий.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Жидкость с ТГК – Lemon Cherry Gelato | 30 мл",
city:"Казань",
district:"Приволжский",
delivery:"Яндекс Доставка",
text:`Lemon Cherry Gelato вкус лимон-вишня, Яндекс привез за 3 дня. ТГК 29%, улетел знатно. В ПВЗ девушка приветливая.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Жидкость с ТГК – Fresh Mint | 30 мл",
city:"Нижний Новгород",
district:"Автозаводский",
delivery:"СДЭК",
text:`Fresh Mint мятка бодрит, СДЭК доставил за 4 дня. ТГК в меру, для дня норм. Упаковка не протекла, всё чётко.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Жидкость с ТГК – OG Kush | 30 мл",
city:"Самара",
district:"Октябрьский",
delivery:"Boxberry",
text:`OG Kush классика, Boxberry ПВЗ в ТЦ. ТГК 27%, после работы расслабляет. Упаковано в крафт конверт.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Жидкость с ТГК – Original Z | 30 мл",
city:"Омск",
district:"Кировский",
delivery:"Почта России",
text:`Original Z улетный, почта шла 7 дней. ТГК 28%, вкус травяной. Коробка чуть мятая, но внутри всё цело.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Жидкость с ТГК – Permanent Marker | 30 мл",
city:"Челябинск",
district:"Калининский",
delivery:"5Post",
text:`Permanent Marker вкус химозный, 5Post в магазине. ТГК 34%, улетел с полтяги. Упаковка заводская.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Жидкость с ТГК – Super Lemon HAZE | 30 мл",
city:"Уфа",
district:"Октябрьский",
delivery:"Яндекс Доставка",
text:`Super Lemon HAZE лимонный, Яндекс ПВЗ у дома. ТГК 29%, 4 часа улыбался. Упаковано плотно.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Вейп с ТГК – 9 Pound Hammer | 3 мл x2 шт",
city:"Ростов-на-Дону",
district:"Пролетарский",
delivery:"СДЭК",
text:`9 Pound Hammer два шота, СДЭК за 4 дня. ТГК 90%, вырубает знатно. Для профи, новичкам не советую.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Вейп с ТГК – Big Bad Bear | 3 мл x3 шт",
city:"Волгоград",
district:"Центральный",
delivery:"Boxberry",
text:`Big Bad Bear три шота, Boxberry доставил. ТГК 90%, медведь злой. Упаковано в тубу, всё цело.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Вейп с ТГК – Euforic | 3 мл",
city:"Красноярск",
district:"Свердловский",
delivery:"Почта России",
text:`Euforic ТГК 85%, почта шла 8 дней. Эйфория лёгкая, приятная. Упаковка чуть мятая, но внутри норм.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Вейп с ТГК – Gorilla Power | 3 мл x2 шт",
city:"Воронеж",
district:"Ленинский",
delivery:"5Post",
text:`Gorilla Power два шота, 5Post в Пятерочке. ТГК 90%, крепкий пиздец. Новичкам не подходить.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноим"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Вейп с ТГК – Jungle Monkey | 3 мл",
city:"Пермь",
district:"Индустриальный",
delivery:"Яндекс Доставка",
text:`Jungle Monkey весёлый, Яндекс привез за 3 дня. ТГК 80%, часа 2 ржал с кота. Упаковка целая.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Вейп с ТГК – Laughing Buddha | 3 мл x3 шт",
city:"Тюмень",
district:"Центральный",
delivery:"СДЭК",
text:`Laughing Buddha три шота, СДЭК ПВЗ. ТГК средний, позитивный. Ржали с другом весь вечер.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Вейп с ТГК – OG Forbidden Berries | 3 мл",
city:"Ижевск",
district:"Первомайский",
delivery:"Boxberry",
text:`OG Forbidden Berries ягодный, Boxberry за 5 дней. ТГК 85%, после двух тяг хорошо. Упаковано.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Вейп с ТГК – Kiwi Guava Kush | 3 мл x2 шт",
city:"Саратов",
district:"Кировский",
delivery:"Почта России",
text:`Kiwi Guava Kush сочный, почта шла 7 дней. ТГК 80%, коробка мятая но внутри цело.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Вейп с ТГК – Tropical Fruits Haze | 3 мл",
city:"Барнаул",
district:"Центральный",
delivery:"5Post",
text:`Tropical Fruits Haze фруктовый, 5Post в магазине. ТГК 85%, лёгкий расслабон.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Вейп с ТГК – Dabbalicious 96% | 3 мл x2 шт",
city:"Хабаровск",
district:"Краснофлотский",
delivery:"Яндекс Доставка",
text:`Dabbalicious 96% два шота, Яндекс за 3 дня. Это пиздец, в космосе часа 4. Для опытных.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"БРАУНИ С ТГК | 8 шт",
city:"Владивосток",
district:"Фрунзенский",
delivery:"СДЭК",
text:`8 брауни, СДЭК доставил за 4 дня. Съел одно и приехал. Очень вкусные, шоколадные.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"БРАУНИ С ТГК | 4 шт",
city:"Краснодар",
district:"Прикубанский",
delivery:"Boxberry",
text:`4 брауни на пробу, Boxberry ПВЗ. Съел одно и уплыл. Буду ещё брать. Упаковано плотно.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"БРАУНИ С ТГК | 10 шт",
city:"Сочи",
district:"Центральный",
delivery:"Почта России",
text:`10 брауни, почта шла 7 дней. Съел одно и вырубился. Коробка чуть мятая, но печеньки целы.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"БРАУНИ С ТГК | 15 шт",
city:"Мурманск",
district:"Первомайский",
delivery:"5Post",
text:`15 брауни, 5Post в Пятерочке. Очень вкусные, запасся. На ПВЗ быстро отдали.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"БРАУНИ С ТГК | 2 шт",
city:"Архангельск",
district:"Октябрьский",
delivery:"Яндекс Доставка",
text:`2 брауни на пробу, Яндекс ПВЗ. Понравились, буду пачку брать. Упаковано в крафт.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Шоколадные печеньки с ТГК | 8 шт",
city:"Калининград",
district:"Московский",
delivery:"СДЭК",
text:`8 печенек, СДЭК за 4 дня. Съел две и приехал. Очень вкусные, шоколадные.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Шоколадные печеньки с ТГК | 15 шт",
city:"Севастополь",
district:"Ленинский",
delivery:"Boxberry",
text:`15 печенек, Boxberry ПВЗ. Съел три и вырубился. Вкусные, упаковка целая.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Шоколадные печеньки с ТГК | 4 шт",
city:"Ялта",
district:"Центральный",
delivery:"Почта России",
text:`4 печеньки, почта шла 8 дней. Съел одну и приехал. Коробка мятая, но печеньки целы.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Шоколадные печеньки с ТГК | 10 шт",
city:"Симферополь",
district:"Киевский",
delivery:"5Post",
text:`10 печенек, 5Post в магазине. Съел две и уплыл. Упаковка целая.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Шоколадные печеньки с ТГК | 2 шт",
city:"Евпатория",
district:"Новый город",
delivery:"Яндекс Доставка",
text:`2 печеньки на пробу, Яндекс за 3 дня. Понравились. Упаковано в крафт.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Мармеладки микс с ТГК | 10 шт",
city:"Тула",
district:"Пролетарский",
delivery:"СДЭК",
text:`10 мармеладок, СДЭК ПВЗ. Кисленькие, две съел и уплыл. Упаковка целая.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Мармеладки микс с ТГК | 5 шт",
city:"Калуга",
district:"Московский",
delivery:"Boxberry",
text:`5 мармеладок на пробу, Boxberry за 4 дня. Вкусные, буду ещё.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Мармеладки микс с ТГК | 15 шт",
city:"Рязань",
district:"Октябрьский",
delivery:"Почта России",
text:`15 мармеладок, почта шла 7 дней. Кисленькие, коробка мятая но внутри цело.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Мармеладки микс с ТГК | 8 шт",
city:"Владимир",
district:"Ленинский",
delivery:"5Post",
text:`8 мармеладок, 5Post в Пятерочке. Съел две и приехал. Вкусные.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Мармеладки микс с ТГК | 4 шт",
city:"Ярославль",
district:"Кировский",
delivery:"Яндекс Доставка",
text:`4 мармеладки, Яндекс ПВЗ. Кисленькие, понравились. Упаковка целая.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Расслабляющий чай Кратом | 150 гр",
city:"Иваново",
district:"Фрунзенский",
delivery:"СДЭК",
text:`Кратом 150гр, СДЭК за 4 дня. Помогает от стресса. Упаковка заводская.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Расслабляющий чай Кратом | 250 гр",
city:"Кострома",
district:"Центральный",
delivery:"Boxberry",
text:`Кратом 250гр, Boxberry ПВЗ. Пью вечером, расслабляет хорошо.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Расслабляющий чай Кратом | 500 гр",
city:"Тверь",
district:"Заволжский",
delivery:"Почта России",
text:`Кратом 500гр, почта шла 8 дней. Упаковка чуть мятая, но чай цел. Помогает от нервов.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Расслабляющий чай Кратом | 1000 гр",
city:"Смоленск",
district:"Ленинский",
delivery:"5Post",
text:`Кг кратома, 5Post в магазине. Пью каждый день, помогает. Упаковка целая.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Расслабляющий чай Кратом | 250 гр",
city:"Брянск",
district:"Бежицкий",
delivery:"Яндекс Доставка",
text:`Кратом 250гр, Яндекс за 3 дня. Расслабляет. В ПВЗ всё чётко.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Грибы NIAGARA | 2 г",
city:"Орел",
district:"Северный",
delivery:"СДЭК",
text:`Ниагара 2г, СДЭК ПВЗ. Мягкое путешествие, краски яркие. Упаковка вакуум.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Грибы NIAGARA | 3 г",
city:"Курск",
district:"Центральный",
delivery:"Boxberry",
text:`Ниагара 3г, Boxberry за 5 дней. 4 часа путешествия. Грибы качественные.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Грибы NIAGARA | 5 г",
city:"Липецк",
district:"Правобережный",
delivery:"Почта России",
text:`Ниагара 5г, почта шла 7 дней. 5 часов путешествия. Коробка мятая но грибы целы.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Грибы NIAGARA | 10 г",
city:"Тамбов",
district:"Ленинский",
delivery:"5Post",
text:`Ниагара 10г, 5Post в Пятерочке. Запасся грибами. Упаковка вакуумная.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Грибы HYBRID ALBINO A+ | 2 г",
city:"Пенза",
district:"Первомайский",
delivery:"Яндекс Доставка",
text:`Альбиносы 2г, Яндекс ПВЗ. Для микроскопии норм. Настроение подняли.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Грибы HYBRID ALBINO A+ | 3 г",
city:"Саранск",
district:"Пролетарский",
delivery:"СДЭК",
text:`Альбиносы 3г, СДЭК за 4 дня. 4 часа по мирам. Визуалы мощные.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Грибы HYBRID ALBINO A+ | 5 г",
city:"Йошкар-Ола",
district:"Центральный",
delivery:"Boxberry",
text:`Альбиносы 5г, Boxberry ПВЗ. Жёсткий трип, 5 часов путешествия.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Грибы HYBRID ALBINO A+ | 10 г",
city:"Чебоксары",
district:"Калининский",
delivery:"Почта России",
text:`Альбиносы 10г, почта шла 8 дней. Запасся. Упаковка чуть мятая.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Грибы McKENNAII #2 | 2 г",
city:"Ульяновск",
district:"Ленинский",
delivery:"5Post",
text:`Маккена 2г, 5Post в магазине. Мягкое путешествие, мысли глубокие.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Грибы McKENNAII #2 | 3 г",
city:"Тольятти",
district:"Автозаводский",
delivery:"Яндекс Доставка",
text:`Маккена 3г, Яндекс за 3 дня. 4 часа путешествия. Глубокий трип.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Грибы McKENNAII #2 | 5 г",
city:"Москва",
district:"СЗАО",
delivery:"СДЭК",
text:`Маккена 5г, СДЭК ПВЗ. Путешествие на всю ночь. Философский сорт.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Грибы McKENNAII #2 | 10 г",
city:"Санкт-Петербург",
district:"Фрунзенский",
delivery:"Boxberry",
text:`Маккена 10г, Boxberry за 4 дня. Запасся. Грибы качественные.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Семена сорта Z-Up Auto, Феминизированные, Автоцветущие, ТГК-29 | x2 шт",
city:"Екатеринбург",
district:"Орджоникидзевский",
delivery:"Почта России",
text:`Z-Up авто 2 семки, почта шла 7 дней. ТГК 29. В блистере целые.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Семена сорта Z-Up Auto, Феминизированные, Автоцветущие, ТГК-29 | x5 шт",
city:"Новосибирск",
district:"Первомайский",
delivery:"5Post",
text:`Z-Up авто 5 семок, 5Post в Пятерочке. ТГК 29. Приехали целые.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Семена сорта Lemon Cherry Cookies, Феминизированные, Автоцветущие, ТГК-28.5 | x3 шт",
city:"Казань",
district:"Московский",
delivery:"Яндекс Доставка",
text:`Lemon Cherry Cookies 3 семки, Яндекс ПВЗ. ТГК 28.5. В блистере.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Семена сорта Lemon Cherry Cookies, Феминизированные, Автоцветущие, ТГК-28.5 | x5 шт",
city:"Нижний Новгород",
district:"Приокский",
delivery:"СДЭК",
text:`Lemon Cherry Cookies 5 семок, СДЭК за 4 дня. ТГК 28.5. Автоцветы.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Семена сорта Bubba Cookies, Феминизированные, Автоцветущие, ТГК-28 | x2 шт",
city:"Самара",
district:"Промышленный",
delivery:"Boxberry",
text:`Bubba Cookies 2 семки, Boxberry ПВЗ. ТГК 28. Автоцветы. В блистере.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Семена сорта Bubba Cookies, Феминизированные, Автоцветущие, ТГК-28 | x4 шт",
city:"Омск",
district:"Ленинский",
delivery:"Почта России",
text:`Bubba Cookies 4 семки, почта шла 8 дней. ТГК 28. Коробка мятая, но семена целы.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Семена сорта Guava Auto fem (FastBuds) США, Феминизированные, Автоцветущие, ТГК-28 | x3 шт",
city:"Челябинск",
district:"Калининский",
delivery:"5Post",
text:`Guava Auto 3 семки, FastBuds топ. 5Post в магазине. ТГК 28.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Семена сорта Guava Auto fem (FastBuds) США, Феминизированные, Автоцветущие, ТГК-28 | x5 шт",
city:"Уфа",
district:"Калининский",
delivery:"Яндекс Доставка",
text:`Guava Auto 5 семок, Яндекс за 3 дня. ТГК 28. Буду сажать.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Семена сорта Zkittlez Auto fem, Феминизированные, Автоцветущие, ТГК-24 | x2 шт",
city:"Ростов-на-Дону",
district:"Железнодорожный",
delivery:"СДЭК",
text:`Zkittlez авто 2 семки, СДЭК ПВЗ. ТГК 24. Для автоцветов норм.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Семена сорта Zkittlez Auto fem, Феминизированные, Автоцветущие, ТГК-24 | x5 шт",
city:"Волгоград",
district:"Краснооктябрьский",
delivery:"Boxberry",
text:`Zkittlez авто 5 семок, Boxberry за 4 дня. ТГК 24. В блистере.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Семена сорта Orange Creampop fem США, Феминизированные, Фотопериодные, ТГК-30-35 | x3 шт",
city:"Красноярск",
district:"Ленинский",
delivery:"Почта России",
text:`Orange Creampop 3 семки, почта шла 8 дней. ТГК до 35. Элитка. Упаковка чуть мятая.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Семена сорта Orange Creampop fem США, Феминизированные, Фотопериодные, ТГК-30-35 | x5 шт",
city:"Воронеж",
district:"Левобережный",
delivery:"5Post",
text:`Orange Creampop 5 семок, 5Post в Пятерочке. ТГК до 35. Фотопериод.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Семена сорта Dos-Vi-Dos fem, Феминизированные, Фотопериодные, ТГК-30 | x2 шт",
city:"Пермь",
district:"Дзержинский",
delivery:"Яндекс Доставка",
text:`Dos-Vi-Dos 2 семки, Яндекс ПВЗ. ТГК 30. Крепкий сорт.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Семена сорта Dos-Vi-Dos fem, Феминизированные, Фотопериодные, ТГК-30 | x4 шт",
city:"Тюмень",
district:"Восточный",
delivery:"СДЭК",
text:`Dos-Vi-Dos 4 семки, СДЭК за 4 дня. ТГК 30. Фотопериод. В блистере.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Семена сорта Bruce Banner Fast Version fem, Феминизированные, Фотопериодные, ТГК-29 | x2 шт",
city:"Ижевск",
district:"Октябрьский",
delivery:"Boxberry",
text:`Bruce Banner 2 семки, Халк. Boxberry ПВЗ. ТГК 29. Буду растить.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Семена сорта Bruce Banner Fast Version fem, Феминизированные, Фотопериодные, ТГК-29 | x3 шт",
city:"Саратов",
district:"Волжский",
delivery:"Почта России",
text:`Bruce Banner 3 семки, почта шла 7 дней. ТГК 29. Коробка мятая, но семена целы.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Семена сорта Polar Gelato by Sherbinskis, Феминизированные, Фотопериодные, ТГК-27-30 | x1 шт",
city:"Барнаул",
district:"Железнодорожный",
delivery:"5Post",
text:`Polar Gelato одна семка, Шербинскис. 5Post в магазине. ТГК до 30. Элитка.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Семена сорта Polar Gelato by Sherbinskis, Феминизированные, Фотопериодные, ТГК-27-30 | x3 шт",
city:"Хабаровск",
district:"Кировский",
delivery:"Яндекс Доставка",
text:`Polar Gelato 3 семки, Шербинскис топ. Яндекс за 3 дня. В блистере.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Жидкость с ТГК – Maui Wowie | 30 мл",
city:"Владивосток",
district:"Советский",
delivery:"СДЭК",
text:`Maui Wowie тропики, СДЭК ПВЗ. ТГК 28%, летал весь вечер. Упаковка целая.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Вейп с ТГК – Gorilla Power | 3 мл",
city:"Краснодар",
district:"Западный",
delivery:"Boxberry",
text:`Gorilla Power ТГК 90%, Boxberry за 4 дня. Крепкий, новичкам нельзя.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"БРАУНИ С ТГК | 8 шт",
city:"Сочи",
district:"Адлерский",
delivery:"Почта России",
text:`8 брауни, почта шла 7 дней. Съел одно и приехал. Коробка мятая, но печеньки целы.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Грибы McKENNAII #2 | 3 г",
city:"Мурманск",
district:"Октябрьский",
delivery:"5Post",
text:`Маккена 3г, 5Post в магазине. 4 часа путешествия. Глубокий трип.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Семена сорта Zkittlez Auto, ТГК-24 | x3 шт",
city:"Архангельск",
district:"Соломбальский",
delivery:"Яндекс Доставка",
text:`Zkittlez авто 3 семки, Яндекс ПВЗ. ТГК 24. В блистере целые.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Жидкость с ТГК – Lemon Cherry Gelato | 30 мл",
city:"Калининград",
district:"Московский",
delivery:"СДЭК",
text:`Lemon Cherry Gelato вкус топ, СДЭК за 4 дня. ТГК 29%, улетел.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Вейп с ТГК – Jungle Monkey | 3 мл x2 шт",
city:"Севастополь",
district:"Гагаринский",
delivery:"Boxberry",
text:`Jungle Monkey 2 шота, Boxberry ПВЗ. Весёлый, ржали с другом.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Мармеладки микс с ТГК | 10 шт",
city:"Ялта",
district:"Центральный",
delivery:"Почта России",
text:`10 мармеладок, почта шла 8 дней. Кисленькие, коробка мятая но внутри цело.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Семена сорта Polar Gelato by Sherbinskis, ТГК-27-30 | x2 шт",
city:"Симферополь",
district:"Киевский",
delivery:"5Post",
text:`Polar Gelato 2 семки, Шербинскис. 5Post в магазине. В блистере.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Грибы NIAGARA | 5 г",
city:"Евпатория",
district:"Новый город",
delivery:"Яндекс Доставка",
text:`Ниагара 5г, Яндекс за 3 дня. 5 часов путешествия. Грибы качественные.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Жидкость с ТГК – Dosi Kush | 30 мл",
city:"Тула",
district:"Пролетарский",
delivery:"СДЭК",
text:`Dosi Kush индика, СДЭК ПВЗ. ТГК 28%, расслабляет тело. Упаковка целая.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Вейп с ТГК – Laughing Buddha | 3 мл",
city:"Калуга",
district:"Московский",
delivery:"Boxberry",
text:`Laughing Buddha позитивный, Boxberry за 4 дня. Ржал часа 3.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"БРАУНИ С ТГК | 4 шт",
city:"Рязань",
district:"Советский",
delivery:"Почта России",
text:`4 брауни, почта шла 7 дней. Съел одно и уплыл. Коробка мятая.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Грибы HYBRID ALBINO A+ | 2 г",
city:"Владимир",
district:"Ленинский",
delivery:"5Post",
text:`Альбиносы 2г, 5Post в магазине. Для микроскопии норм.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Семена сорта Dos-Vi-Dos, ТГК-30 | x5 шт",
city:"Ярославль",
district:"Кировский",
delivery:"Яндекс Доставка",
text:`Dos-Vi-Dos 5 семок, Яндекс ПВЗ. ТГК 30. Крепкий сорт.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Cap Junky | ТГК-33 - 34 | 0.5г",
city:"Орел",
district:"Северный",
text:`Cap Junky, полграмма. На пробу взял, улетел. Буду ещё.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Permanent Marker | ТГК-34 | 2.0г",
city:"Курск",
district:"Центральный",
text:`Permanent Marker, два грамма. Химозный вкус, мощный.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Orange Creampop | ТГК-30 - 35 | 1.0г",
city:"Липецк",
district:"Правобережный",
text:`Orange Creampop, грамм. Апельсин, ТГК 35% — улёт.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Lemon Cherry Runtz | ТГК-33 | 5.0г",
city:"Тамбов",
district:"Ленинский",
text:`Lemon Cherry Runtz, пять грамм. Очень вкусный сорт.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Future #1 | 3.0г",
city:"Пенза",
district:"Первомайский",
text:`Future #1, три грамма. Плавный, глубокий. Хорош.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш Ice-O-Lator | Lemon Haze | 1.0г",
city:"Саранск",
district:"Пролетарский",
text:`Лимонный айс, грамм. Пузырится, качественный.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш ice-o-lator | Twix | 3.0г",
city:"Йошкар-Ола",
district:"Центральный",
text:`Twix, три грамма. Сладкий, мягкий. Хороший гашиш.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Ice-O-Lator | Paris Saint-Germain | 2.0г",
city:"Чебоксары",
district:"Калининский",
text:`PSG гашиш, два грамма. Интересный вкус. Качество топ.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Hash Mustang import VHQ+ | 3.0г",
city:"Ульяновск",
district:"Ленинский",
text:`Mustang VHQ+, три грамма. Мягкий, запах насыщенный.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш ICE-O-LATOR Papaya🥭 | 5.0г",
city:"Тольятти",
district:"Автозаводский",
text:`Папайя, пять грамм. Манго вкус, нежный. Запасся.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Cap Junky | ТГК-33 - 34 | 1.0г",
city:"Москва",
district:"Новомосковский",
text:`Cap Junky, грамм. Искал 20 минут в снегу. Но товар огонь.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Permanent Marker | ТГК-34 | 2.0г",
city:"Санкт-Петербург",
district:"Пушкинский",
text:`Permanent Marker, два грамма. Немного затупил с координатами, нашёл.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Future #1 | 3.0г",
city:"Екатеринбург",
district:"Чкаловский",
text:`Future #1, три грамма. Долго искал, замёрз. Но качество радует.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Orange Creampop | ТГК-30 - 35 | 5.0г",
city:"Новосибирск",
district:"Советский",
text:`Orange Creampop, пять грамм. Место было не очень, пришлось попотеть.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Lemon Cherry Runtz | ТГК-33 | 1.0г",
city:"Казань",
district:"Кировский",
text:`Lemon Cherry Runtz, грамм. Снега много, искал полчаса. Шишка норм.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш Ice-O-Lator | Lemon Haze | 2.0г",
city:"Нижний Новгород",
district:"Приокский",
text:`Лимонный айс, два грамма. Место людное, пришлось ждать. Гашиш ок.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш ice-o-lator | Twix | 3.0г",
city:"Самара",
district:"Советский",
text:`Twix, три грамма. Немного затупил с поиском, но нашёл.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Ice-O-Lator | Paris Saint-Germain | 5.0г",
city:"Омск",
district:"Октябрьский",
text:`PSG гашиш, пять грамм. Искал дольше обычного, снег помешал.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Hash Mustang import VHQ+ | 1.0г",
city:"Челябинск",
district:"Курчатовский",
text:`Mustang, грамм. Место было странное, но нашёл. Замёрз.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш ICE-O-LATOR Papaya🥭 | 2.0г",
city:"Уфа",
district:"Октябрьский",
text:`Папайя, два грамма. Копался долго, руки замёрзли. Гашиш вкусный.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Cap Junky | ТГК-33 - 34 | 3.0г",
city:"Ростов-на-Дону",
district:"Советский",
text:`Cap Junky, три грамма. Немного не по координатам, но нашёл.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Permanent Marker | ТГК-34 | 5.0г",
city:"Волгоград",
district:"Краснооктябрьский",
text:`Permanent Marker, пять грамм. Долго искал, замёрз. Товар ок.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Future #1 | 2.0г",
city:"Красноярск",
district:"Ленинский",
text:`Future #1, два грамма. Место было завалено снегом, но нашёл.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Orange Creampop | ТГК-30 - 35 | 0.5г",
city:"Воронеж",
district:"Левобережный",
text:`Orange Creampop, полграмма. Искал полчаса, замерз. Качество огонь.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Lemon Cherry Runtz | ТГК-33 | 2.0г",
city:"Пермь",
district:"Мотовилихинский",
text:`Lemon Cherry Runtz, два грамма. Немного затупил, но нашёл.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш Ice-O-Lator | Lemon Haze | 3.0г",
city:"Тюмень",
district:"Калининский",
text:`Лимонный айс, три грамма. Место людное, пришлось ждать.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш ice-o-lator | Twix | 1.0г",
city:"Ижевск",
district:"Устиновский",
text:`Twix, грамм. Немного затупил с поиском, но нашёл.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Ice-O-Lator | Paris Saint-Germain | 2.0г",
city:"Саратов",
district:"Волжский",
text:`PSG гашиш, два грамма. Искал дольше обычного, снег помешал.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Hash Mustang import VHQ+ | 3.0г",
city:"Барнаул",
district:"Центральный",
text:`Mustang, три грамма. Место было странное, но нашёл.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш ICE-O-LATOR Papaya🥭 | 5.0г",
city:"Хабаровск",
district:"Кировский",
text:`Папайя, пять грамм. Копался долго, руки замёрзли. Гашиш ок.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Cap Junky | ТГК-33 - 34 | 2.0г",
city:"Владивосток",
district:"Первомайский",
text:`Cap Junky, два грамма. Немного не по координатам, но нашёл.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Permanent Marker | ТГК-34 | 3.0г",
city:"Краснодар",
district:"Карасунский",
text:`Permanent Marker, три грамма. Долго искал, замёрз. Товар ок.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Orange Creampop | ТГК-30 - 35 | 1.0г",
city:"Сочи",
district:"Адлерский",
text:`Orange Creampop, грамм. Искал полчаса, замерз. Качество топ.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Lemon Cherry Runtz | ТГК-33 | 3.0г",
city:"Мурманск",
district:"Октябрьский",
text:`Lemon Cherry Runtz, три грамма. Немного затупил, но нашёл.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Future #1 | 5.0г",
city:"Архангельск",
district:"Соломбальский",
text:`Future #1, пять грамм. Место было завалено снегом, но нашёл.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш Ice-O-Lator | Lemon Haze | 0.5г",
city:"Калининград",
district:"Московский",
text:`Лимонный айс, полграмма. Место людное, пришлось ждать.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш ice-o-lator | Twix | 2.0г",
city:"Севастополь",
district:"Гагаринский",
text:`Twix, два грамма. Немного затупил с поиском, но нашёл.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Ice-O-Lator | Paris Saint-Germain | 1.0г",
city:"Ялта",
district:"Центральный",
text:`PSG гашиш, грамм. Искал дольше обычного, снег помешал.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Hash Mustang import VHQ+ | 2.0г",
city:"Симферополь",
district:"Центральный",
text:`Mustang, два грамма. Место было странное, но нашёл.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш ICE-O-LATOR Papaya🥭 | 3.0г",
city:"Евпатория",
district:"Центральный",
text:`Папайя, три грамма. Копался долго, руки замёрзли. Гашиш ок.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Cap Junky | ТГК-33 - 34 | 0.5г",
city:"Москва",
district:"Троицкий",
text:`Cap Junky, полграмма. Ненаход, копался полчаса — пусто.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Permanent Marker | ТГК-34 | 1.0г",
city:"Санкт-Петербург",
district:"Курортный",
text:`Permanent Marker, грамм. Ненашёл, проторчал час на холоде.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Future #1 | 2.0г",
city:"Екатеринбург",
district:"Верх-Исетский",
text:`Future #1, два грамма. Искал — нет. Видно шакалы утащили.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Orange Creampop | ТГК-30 - 35 | 3.0г",
city:"Новосибирск",
district:"Железнодорожный",
text:`Orange Creampop, три грамма. Клад не на месте, перерыл всё.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Lemon Cherry Runtz | ТГК-33 | 5.0г",
city:"Казань",
district:"Московский",
text:`Lemon Cherry Runtz, пять грамм. Ненаход, промёрз до костей.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш Ice-O-Lator | Lemon Haze | 1.0г",
city:"Нижний Новгород",
district:"Советский",
text:`Лимонный айс, грамм. Ненашёл, просидел на морозе.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш ice-o-lator | Twix | 2.0г",
city:"Самара",
district:"Куйбышевский",
text:`Twix, два грамма. Пусто, видно кто-то до меня забрал.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Ice-O-Lator | Paris Saint-Germain | 3.0г",
city:"Омск",
district:"Кировский",
text:`PSG гашиш, три грамма. Ненаход, место было перекопано.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Hash Mustang import VHQ+ | 5.0г",
city:"Челябинск",
district:"Центральный",
text:`Mustang, пять грамм. Ненашёл, видимо шакалы сработали.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш ICE-O-LATOR Papaya🥭 | 2.0г",
city:"Уфа",
district:"Калининский",
text:`Папайя, два грамма. Ненашёл, промёрз до костей.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Cap Junky | ТГК-33 - 34 | 1.0г",
city:"Ростов-на-Дону",
district:"Первомайский",
text:`Cap Junky, грамм. Искал полчаса — пусто. Обидно.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Permanent Marker | ТГК-34 | 2.0г",
city:"Волгоград",
district:"Советский",
text:`Permanent Marker, два грамма. Ненашёл, место завалено снегом.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Future #1 | 3.0г",
city:"Красноярск",
district:"Октябрьский",
text:`Future #1, три грамма. Пусто, видимо перепрятали.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Orange Creampop | ТГК-30 - 35 | 5.0г",
city:"Воронеж",
district:"Железнодорожный",
text:`Orange Creampop, пять грамм. Ненаход, зря замёрз.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Lemon Cherry Runtz | ТГК-33 | 1.0г",
city:"Пермь",
district:"Дзержинский",
text:`Lemon Cherry Runtz, грамм. Ненашёл, проторчал час.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш Ice-O-Lator | Lemon Haze | 2.0г",
city:"Тюмень",
district:"Восточный",
text:`Лимонный айс, два грамма. Пусто, видно кто-то забрал.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш ice-o-lator | Twix | 3.0г",
city:"Ижевск",
district:"Октябрьский",
text:`Twix, три грамма. Ненаход, место перекопано.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Ice-O-Lator | Paris Saint-Germain | 5.0г",
city:"Саратов",
district:"Ленинский",
text:`PSG гашиш, пять грамм. Ненашёл, промёрз.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Hash Mustang import VHQ+ | 1.0г",
city:"Барнаул",
district:"Октябрьский",
text:`Mustang, грамм. Пусто, шакалы сработали.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш ICE-O-LATOR Papaya🥭 | 3.0г",
city:"Хабаровск",
district:"Индустриальный",
text:`Папайя, три грамма. Ненашёл, обидно.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Cap Junky | ТГК-33 - 34 | 2.0г",
city:"Владивосток",
district:"Советский",
text:`Cap Junky, два грамма. Искал — нет. Не фарт.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Permanent Marker | ТГК-34 | 3.0г",
city:"Краснодар",
district:"Прикубанский",
text:`Permanent Marker, три грамма. Ненаход, зря время потерял.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Orange Creampop | ТГК-30 - 35 | 2.0г",
city:"Сочи",
district:"Лазаревский",
text:`Orange Creampop, два грамма. Пусто, перерыл всё.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Lemon Cherry Runtz | ТГК-33 | 3.0г",
city:"Мурманск",
district:"Первомайский",
text:`Lemon Cherry Runtz, три грамма. Ненашёл, замёрз.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Future #1 | 1.0г",
city:"Архангельск",
district:"Ломоносовский",
text:`Future #1, грамм. Пусто, видимо шакалы.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш Ice-O-Lator | Lemon Haze | 3.0г",
city:"Калининград",
district:"Центральный",
text:`Лимонный айс, три грамма. Ненаход, просидел на холоде.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш ice-o-lator | Twix | 5.0г",
city:"Севастополь",
district:"Балаклавский",
text:`Twix, пять грамм. Пусто, обидно.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Ice-O-Lator | Paris Saint-Germain | 2.0г",
city:"Ялта",
district:"Массандра",
text:`PSG гашиш, два грамма. Ненашёл, место перекопано.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Hash Mustang import VHQ+ | 3.0г",
city:"Симферополь",
district:"Железнодорожный",
text:`Mustang, три грамма. Пусто, шакалы.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш ICE-O-LATOR Papaya🥭 | 5.0г",
city:"Евпатория",
district:"Новый город",
text:`Папайя, пять грамм. Ненашёл, промёрз.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Расслабляющий чай Кратом | 250 гр",
city:"Алматы",
district:"Алатауский",
delivery:"EMSPost",
text:`Кратом 250гр, пью вечером. Расслабляет знатно, сплю как убитый. EMSPost привезли за 3 дня, быстро. Чай горьковатый, но с медом норм.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Weeding Cake | 30 мл",
city:"Астана",
district:"Есиль",
delivery:"СДЭК",
text:`Weeding Cake приехал, сладкий тортик. ТГК 28%, улетел с полтяги. Друг думал что слабо будет, а он вырубился. Новичкам осторожно.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Gorilla Power | 3 мл x2 шт",
city:"Астана",
district:"Алматы",
delivery:"DPD",
text:`Горилла мощь, два шота. ТГК зашкаливает, крепкий пиздец. Новичкам не советую. Сидели с другом, оба улетели знатно. Приехало за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"HYBRID ALBINO A+ | 3 г",
city:"Астана",
district:"Сарыарка",
delivery:"Boxberry",
text:`Альбиносы 3г. Путешествие было знатное, часа 4 гулял по другим мирам. Визуалы мощные, краски яркие. Качественные грибы, уважение.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Lemon Cherry Cookies, Феминизированные, Автоцветущие, ТГК-28.5 | x2 шт",
city:"Астана",
district:"Есиль",
delivery:"СДЭК",
text:`Lemon Cherry Cookies 2 семки, ТГК 28.5. Приехали за 4 дня. Буду ростить, надеюсь на вкуснятину. Спасибо магазу!`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"OG Kush | 30 мл",
city:"Шымкент",
district:"Абайский",
delivery:"Почта РФ + Казпочта",
text:`OG Kush классика, ТГК в норме. Ждал 8 дней, но пришло. Вечером затянулся и вырубился спать. То что надо после работы.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Laughing Buddha | 3 мл",
city:"Шымкент",
district:"Енбекшинский",
delivery:"EMSPost",
text:`Будда рассмешил, позитивный вейп. ТГК средний, но очень веселый. Сидел ржал с видосов часа 3. Приехало за 4 дня. Советую!`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"McKENNAII #2 | 2 г",
city:"Шымкент",
district:"Аль-Фарабийский",
delivery:"СДЭК",
text:`Маккена 2г, для первого раза идеально. Путешествие мягкое, но интересное. Цвета яркие, мысли глубокие. Часа 3 гулял по парку, кайфовал от природы.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Расслабляющий чай Кратом | 500 гр",
city:"Шымкент",
district:"Қаратау",
delivery:"Boxberry",
text:`Полкило кратома взял. Помогает от стресса, настроение поднимает. Приехало за 5 дней, упаковка целая. Чай норм, буду ещё.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Dosi Kush | 30 мл",
city:"Караганда",
district:"Казыбекбийский",
delivery:"СДЭК",
text:`Дози куш — индика рулит. Приехал, заправил, через 10 минут ноги ватные. Тело расслабило, уснул как младенец. ТГК 28%, крепко.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Jungle Monkey | 3 мл x3 шт",
city:"Караганда",
district:"Октябрьский",
delivery:"DPD",
text:`Jungle Monkey, три штуки. Веселый вкус, прикольный эффект. ТГК ровный, без паранойи. Друзьям раздам, пусть тоже смеются.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Шоколадные печеньки с ТГК | 15 шт",
city:"Караганда",
district:"Михайловка",
delivery:"ABACE",
text:`15 печенек, целый запас. Съел три и вырубился на полдня. Очень вкусные, шоколадные, но эффект лютый. Осторожно с дозой, новичкам одну.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Bruce Banner Fast Version fem, Феминизированные, Фотопериодные, ТГК-29 | x1 шт",
city:"Караганда",
district:"Майкудук",
delivery:"Почта РФ + Казпочта",
text:`Брюс Баннер одна семка. Халк любимый сорт. Приехала за 8 дней, целая в блистере. Буду растить, надеюсь на мощные шишки.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Super Lemon HAZE | 30 мл",
city:"Актобе",
district:"Старый город",
delivery:"СДЭК",
text:`Super Lemon HAZE бодрит пиздец. Сатива, ТГК 29%. Убрало знатно, часа 4 улыбался без повода. Вкус лимона топ, приехало быстро.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"NIAGARA | 10 г",
city:"Актобе",
district:"11-й микрорайон",
delivery:"EMSPost",
text:`10 грамм Ниагары взял с запасом. Грибы лютые, после 3 грамм уже улетел в путешествие. Друзьям раздам, пусть тоже пробуют. Качество огонь.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Расслабляющий чай Кратом | 150 гр",
city:"Актобе",
district:"Курмыш",
delivery:"Boxberry",
text:`Кратом 150гр на пробу. Норм кратом, бодрит. Буду 500 брать. Приехало за 4 дня, упаковка целая.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Permanent Marker | 30 мл",
city:"Тараз",
district:"Центральный",
delivery:"Почта РФ + Казпочта",
text:`Permanent Marker, вкус химозный но кайфовый. ТГК очень много, улетел с полтяги. Лежал 4 часа слушал музыку. Ждал 9 дней, но качество топ.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Kiwi Guava Kush | 3 мл x2 шт",
city:"Тараз",
district:"Каратауский",
delivery:"СДЭК",
text:`Киви-гуава, сочный вкус. Два взял, надолго хватит. ТГК приятный, расслабляет. Приехало за 5 дней. Девушке тоже зашло.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"БРАУНИ С ТГК | 4 шт",
city:"Тараз",
district:"Аса",
delivery:"DPD",
text:`Брауни 4 штуки. Съел одно и всё, приехал. Очень вкусные, шоколадные. Лежал кайфовал часа 3. DPD доставили за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Original Z | 30 мл",
city:"Павлодар",
district:"Усольский",
delivery:"СДЭК",
text:`Ориджинал зет — улет. ТГК чувствуется с первой тяги. Часа 3 летал, музыку слушал. Вкус приятный, травяной. Буду ещё.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"HYBRID ALBINO A+ | 5 г",
city:"Павлодар",
district:"Дачный",
delivery:"ABACE",
text:`Альбиносы 5г — это жёстко. Оказался в путешествии на 5 часов, визуалы бешеные. Мощный сорт, уважение магазину. ABACE быстро привезли.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Polar Gelato by Sherbinskis, Феминизированные, Фотопериодные, ТГК-30 | x2 шт",
city:"Павлодар",
district:"Авиагородок",
delivery:"EMSPost",
text:`Polar Gelato 2 семки, Шербинскис топ. ТГК 30, элитная генетика. Приехали за 4 дня, целые. Жду урожая.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Maui Wowie | 30 мл",
city:"Усть-Каменогорск",
district:"Левобережье",
delivery:"Boxberry",
text:`Maui Wowie приехал, вкус тропиков. ТГК норм, летал весь вечер. Boxberry доставили за 5 дней. В ПВЗ девушка приветливая.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"9 Pound Hammer | 3 мл",
city:"Усть-Каменогорск",
district:"Стрелка",
delivery:"Почта РФ + Казпочта",
text:`9 паунд молоток — вырубило пиздец. ТГК 90%, для профи. После двух тяг понял что всё, приехали. Ждал 9 дней, но качество топ.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Расслабляющий чай Кратом | 250 гр",
city:"Усть-Каменогорск",
district:"Комсомольский",
delivery:"СДЭК",
text:`Кратом 250гр. Пью вечером, расслабляет знатно. Приехало за 4 дня, спасибо магазу.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Lemon Cherry Gelato | 30 мл",
city:"Семей",
district:"Центральный",
delivery:"DPD",
text:`Лимон-вишня-джелато, вкус конфетка. ТГК 29%, улет знатный. Приехало за 4 дня. Буду ещё заказывать.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"McKENNAII #2 | 3 г",
city:"Семей",
district:"Жана Семей",
delivery:"ABACE",
text:`Маккена 3г. Путешествие было знатное, часа 4 гулял по другим мирам. Грибы качественные, глубокий трип.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Dosi Kush | 30 мл",
city:"Атырау",
district:"Сарыкамыс",
delivery:"EMSPost",
text:`Дози куш — индика, расслабляет тело. ТГК 28%, крепко. Приехало за 3 дня, быстро. EMSPost молодцы.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Gorilla Power | 3 мл",
city:"Атырау",
district:"Жилгородок",
delivery:"СДЭК",
text:`Горилла мощь, один шот. Крепкий пиздец, ТГК под 90%. Новичкам не подходить. Я улетел знатно, часа 3 в отключке.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Мармеладки микс с ТГК | 5 шт",
city:"Атырау",
district:"Балыкши",
delivery:"Boxberry",
text:`5 мармеладок. Съел две и всё, приехал. Часа 3 смеялся без причины. Вкусные, кисленькие. Boxberry доставили быстро.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Super Lemon HAZE | 30 мл",
city:"Актау",
district:"5 мкр",
delivery:"Почта РФ + Казпочта",
text:`Super Lemon HAZE бодрит, ТГК 29%. Убрало знатно, часа 4 улыбался. Ждал 10 дней, но оно того стоило.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Zkittlez Auto fem, Феминизированные, Автоцветущие, ТГК-24 | x5 шт",
city:"Актау",
district:"14 мкр",
delivery:"СДЭК",
text:`Zkittlez авто 5 семок. ТГК 24, для автоцветов норм. Приехали за 5 дней. Буду сажать весной, спасибо.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"OG Kush | 30 мл",
city:"Кызылорда",
district:"Центральный",
delivery:"DPD",
text:`OG Kush классика. Приехало за 4 дня. Вечером затянулся и вырубился. То что надо для расслабона.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"NIAGARA | 2 г",
city:"Кызылорда",
district:"Коркыт",
delivery:"ABACE",
text:`Ниагара 2г, для первого раза идеально. Путешествие мягкое, краски яркие. Часа 3 гулял кайфовал. ABACE привезли за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Weeding Cake | 30 мл",
city:"Костанай",
district:"Центральный",
delivery:"EMSPost",
text:`Weeding Cake, сладкий вкус. ТГК ровный, часа 4 кайфовал. Приехало за 3 дня. EMSPost быстро доставили.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Laughing Buddha | 3 мл x2 шт",
city:"Костанай",
district:"Наурыз",
delivery:"СДЭК",
text:`Два Будды, будет весело. ТГК средний, позитивный. Сидели с другом ржали весь вечер. Приехало за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Fresh Mint | 30 мл",
city:"Петропавловск",
district:"Подгора",
delivery:"Boxberry",
text:`Мятка бодрит, но не вырубает. ТГК в меру, для активного дня норм. Приехало за 5 дней.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Расслабляющий чай Кратом | 500 гр",
city:"Петропавловск",
district:"Рабочий",
delivery:"Почта РФ + Казпочта",
text:`Полкило кратома взял. Помогает от стресса. Ждал 8 дней, упаковка целая. Чай норм, буду ещё.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Permanent Marker | 30 мл",
city:"Уральск",
district:"Курени",
delivery:"СДЭК",
text:`Permanent Marker, вкус химозный. ТГК много, улетел с полтяги. Лежал 4 часа слушал музыку. Приехало за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Шоколадные печеньки с ТГК | 8 шт",
city:"Уральск",
district:"Астана",
delivery:"DPD",
text:`8 печенек. Съел две, через час приехал. Очень вкусные, шоколадные. DPD доставили за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Maui Wowie | 30 мл",
city:"Темиртау",
district:"Старый город",
delivery:"ABACE",
text:`Maui Wowie — тропики. ТГК норм, летал весь вечер. ABACE доставили быстро, за 4 дня. Спасибо!`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Dos-Vi-Dos fem, Феминизированные, Фотопериодные, ТГК-30 | x3 шт",
city:"Темиртау",
district:"Новый город",
delivery:"EMSPost",
text:`Дос-Ви-Дос 3 семки, ТГК 30. Крепкий сорт. Приехали за 3 дня, целые. Буду растить.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Dosi Kush | 30 мл",
city:"Рудный",
district:"Горняк",
delivery:"СДЭК",
text:`Дози куш, индика. Приехал, заправил, через 10 минут ноги ватные. Расслабило знатно. ТГК 28%.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"HYBRID ALBINO A+ | 3 г",
city:"Рудный",
district:"Восточный",
delivery:"Boxberry",
text:`Альбиносы 3г. Путешествие знатное, часа 4 по мирам гулял. Визуалы мощные. Качественные грибы.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Original Z | 30 мл",
city:"Жезказган",
district:"Центральный",
delivery:"Почта РФ + Казпочта",
text:`Ориджинал зет — улет. ТГК чувствуется. Ждал 9 дней, но оно того стоило. Вкус приятный.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Jungle Monkey | 3 мл",
city:"Жезказган",
district:"Кенгир",
delivery:"DPD",
text:`Jungle Monkey, веселый вейп. ТГК ровный, прикольный эффект. Приехало за 4 дня. Советую.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Lemon Cherry Gelato | 30 мл",
city:"Балхаш",
district:"1 мкр",
delivery:"ABACE",
text:`Лимон-вишня-джелато, вкус топ. ТГК 29%, улет знатный. Приехало за 5 дней. Буду ещё брать.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Расслабляющий чай Кратом | 250 гр",
city:"Балхаш",
district:"7 мкр",
delivery:"СДЭК",
text:`Кратом 250гр, пью вечером. Расслабляет. Приехало за 4 дня. Спасибо магазу.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},
  {
country:"KZ",
type:"⭐ Отзыв",
product:"Wild Watermelon | 30 мл",
city:"Алматы",
district:"Бостандыкский",
delivery:"Boxberry",
text:`Арбуз сочный, летний вкус. ТГК 27%, ровно заходит. Весь вечер кайфовал под музыку. Boxberry за 4 дня привезли.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Dosi Kush | 30 мл",
city:"Алматы",
district:"Ауэзовский",
delivery:"EMSPost",
text:`Дози куш индика, после работы самое то. Расслабляет тело, ТГК 28%. Через 10 минут ноги ватные.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Fresh Mint | 30 мл",
city:"Алматы",
district:"Медеуский",
delivery:"СДЭК",
text:`Мятка свежая, бодрит. Для дня норм, не вырубает. ТГК в меру. Приехало за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"OG Kush | 30 мл",
city:"Алматы",
district:"Турксибский",
delivery:"DPD",
text:`OG Kush классика, ТГК 27%. Расслабляет после работы. DPD привезли за 3 дня, быстро.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Original Z | 30 мл",
city:"Алматы",
district:"Наурызбайский",
delivery:"ABACE",
text:`Original Z улетный, ТГК 28%. Часа 3 летал по квартире. Вкус травяной, приятный. ABACE молодцы.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Permanent Marker | 30 мл",
city:"Алматы",
district:"Алатауский",
delivery:"Почта РФ + Казпочта",
text:`Permanent Marker вкус специфический, но кайфовый. ТГК много, улетел с полтяги. Ждал 8 дней.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Super Lemon HAZE | 30 мл",
city:"Алматы",
district:"Жетысуский",
delivery:"СДЭК",
text:`Super Lemon HAZE бодрит пиздец. Сатива, ТГК 29%. 4 часа улыбался без повода. Лимон топ.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"9 Pound Hammer | 3 мл x2 шт",
city:"Астана",
district:"Есиль",
delivery:"Boxberry",
text:`9 паунд молоток, два шота. ТГК 90%, лютый. Новичкам не подходить. Улетел знатно. Boxberry за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Big Bad Bear | 3 мл",
city:"Астана",
district:"Алматы",
delivery:"ABACE",
text:`Медведь злой, ТГК 90%. Крепкий пиздец, после двух тяг приехал. Для профи. ABACE быстро.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Euforic | 3 мл x3 шт",
city:"Астана",
district:"Сарыарка",
delivery:"EMSPost",
text:`Эйфорик, три штуки. ТГК 85%, эйфория лёгкая. Друзьям раздам. EMSPost за 3 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Gorilla Power | 3 мл",
city:"Астана",
district:"Байконур",
delivery:"DPD",
text:`Горилла мощь, крепкий. ТГК 90%. Новичкам не соваться. DPD привезли за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Jungle Monkey | 3 мл x2 шт",
city:"Астана",
district:"Есиль",
delivery:"СДЭК",
text:`Jungle Monkey весёлый, ТГК 80%. Сидели с другом ржали весь вечер. Два шота взял.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Laughing Buddha | 3 мл",
city:"Шымкент",
district:"Абайский",
delivery:"Boxberry",
text:`Будда рассмешил, позитивный. ТГК средний, весёлый. Часа 3 смеялся. Boxberry доставили.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"OG Forbidden Berries | 3 мл x2 шт",
city:"Шымкент",
district:"Енбекшинский",
delivery:"ABACE",
text:`Запретная ягодка, два взял. ТГК 85%, вкус ягодный. После двух тяг уже хорошо.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Kiwi Guava Kush | 3 мл",
city:"Шымкент",
district:"Аль-Фарабийский",
delivery:"EMSPost",
text:`Киви-гуава, сочный вкус. ТГК 80%, приятный расслабон. EMSPost за 3 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Tropical Fruits HAZE | 3 мл x2 шт",
city:"Шымкент",
district:"Қаратау",
delivery:"СДЭК",
text:`Тропикл фрутс, два шота. Вкус фруктовый, ТГК 85%. Лёгкий, позитивный.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Dabbalicious 96% | 3 мл",
city:"Караганда",
district:"Казыбекбийский",
delivery:"DPD",
text:`96% это пиздец. В космосе часа 4. Для опытных. DPD привезли за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"БРАУНИ С ТГК | 2 шт",
city:"Караганда",
district:"Октябрьский",
delivery:"ABACE",
text:`2 брауни на пробу. Съел одно и приехал. Вкусные, шоколадные. Буду ещё.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Шоколадные печеньки с ТГК | 4 шт",
city:"Караганда",
district:"Михайловка",
delivery:"EMSPost",
text:`4 печеньки. Съел две, через час приехал. Очень вкусные. EMSPost быстро.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Мармеладки микс с ТГК | 8 шт",
city:"Караганда",
district:"Майкудук",
delivery:"Boxberry",
text:`8 мармеладок. Съел две и приехал. Кисленькие, вкусные. Boxberry за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"NIAGARA | 3 г",
city:"Актобе",
district:"Старый город",
delivery:"СДЭК",
text:`Ниагара 3г — хороший трип. Часа 4 путешествовал. Качественные грибы.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"HYBRID ALBINO A+ | 2 г",
city:"Актобе",
district:"11-й микрорайон",
delivery:"DPD",
text:`Альбиносы 2г, для микроскопии. Настроение поднимает. DPD привезли за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"McKENNAII #2 | 5 г",
city:"Актобе",
district:"Курмыш",
delivery:"ABACE",
text:`Маккена 5г — глубокий трип. 5 часов путешествия. Мощный сорт.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Расслабляющий чай Кратом | 1000 гр",
city:"Тараз",
district:"Центральный",
delivery:"EMSPost",
text:`Кг кратома взял. Пью каждый день, от тревоги помогает. EMSPost за 3 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Z-Up Auto, ТГК-29 | x5 шт",
city:"Тараз",
district:"Каратауский",
delivery:"СДЭК",
text:`Z-Up авто 5 семок, ТГК 29. Приехали за 4 дня, целые. Буду сажать.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Lemon Cherry Cookies, ТГК-28.5 | x3 шт",
city:"Тараз",
district:"Аса",
delivery:"Boxberry",
text:`Lemon Cherry Cookies 3 семки, ТГК 28.5. Автоцветы, норм. Boxberry доставили.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Bubba Cookies, ТГК-28 | x2 шт",
city:"Павлодар",
district:"Усольский",
delivery:"DPD",
text:`Bubba Cookies 2 семки, ТГК 28. Автоцветы, неприхотливые. DPD за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Guava Auto, ТГК-28 | x3 шт",
city:"Павлодар",
district:"Дачный",
delivery:"ABACE",
text:`Guava Auto 3 семки, FastBuds. ТГК 28. Приехали целые. ABACE быстро.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Zkittlez Auto, ТГК-24 | x4 шт",
city:"Павлодар",
district:"Авиагородок",
delivery:"EMSPost",
text:`Zkittlez авто 4 семки, ТГК 24. Для автоцветов норм. EMSPost за 3 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Orange Creampop, ТГК-30-35 | x2 шт",
city:"Усть-Каменогорск",
district:"Левобережье",
delivery:"СДЭК",
text:`Orange Creampop 2 семки, ТГК до 35. Фотопериод, элитка. СДЭК за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Bruce Banner Fast, ТГК-29 | x3 шт",
city:"Усть-Каменогорск",
district:"Стрелка",
delivery:"DPD",
text:`Bruce Banner 3 семки, Халк. ТГК 29. Приехали целые. DPD молодцы.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Dos-Vi-Dos, ТГК-30 | x1 шт",
city:"Усть-Каменогорск",
district:"Комсомольский",
delivery:"Boxberry",
text:`Дос-Ви-Дос одна семка, ТГК 30. Крепкий сорт. Boxberry за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Polar Gelato, ТГК-30 | x2 шт",
city:"Семей",
district:"Центральный",
delivery:"ABACE",
text:`Polar Gelato 2 семки, Шербинскис. ТГК 30. Элитка. ABACE доставили.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Maui Wowie | 30 мл",
city:"Семей",
district:"Жана Семей",
delivery:"EMSPost",
text:`Maui Wowie — тропики. ТГК 28%, летал весь вечер. EMSPost за 3 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Weeding Cake | 30 мл",
city:"Атырау",
district:"Сарыкамыс",
delivery:"СДЭК",
text:`Weeding Cake сладкий, ТГК 28%. Улетел с полтяги. СДЭК привезли.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Wild Watermelon | 30 мл",
city:"Атырау",
district:"Жилгородок",
delivery:"DPD",
text:`Арбуз сочный, ТГК 27%. Весь вечер кайфовал. DPD за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Dosi Kush | 30 мл",
city:"Атырау",
district:"Балыкши",
delivery:"Boxberry",
text:`Дози куш индика, расслабляет. ТГК 28%. Boxberry доставили за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Lemon Cherry Gelato | 30 мл",
city:"Актау",
district:"5 мкр",
delivery:"ABACE",
text:`Лимон-вишня-джелато, вкус топ. ТГК 29%, улет знатный. ABACE молодцы.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Fresh Mint | 30 мл",
city:"Актау",
district:"14 мкр",
delivery:"EMSPost",
text:`Мятка бодрит, ТГК в меру. Для дня норм. EMSPost за 3 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"OG Kush | 30 мл",
city:"Кызылорда",
district:"Центральный",
delivery:"СДЭК",
text:`OG Kush классика. После работы самое то. СДЭК привезли за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Original Z | 30 мл",
city:"Кызылорда",
district:"Коркыт",
delivery:"DPD",
text:`Original Z улетный, ТГК 28%. Часа 3 летал. DPD быстро.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Permanent Marker | 30 мл",
city:"Костанай",
district:"Центральный",
delivery:"Boxberry",
text:`Permanent Marker, ТГК много. Улетел с полтяги. Boxberry за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Super Lemon HAZE | 30 мл",
city:"Костанай",
district:"Наурыз",
delivery:"ABACE",
text:`Super Lemon HAZE бодрит, ТГК 29%. 4 часа улыбался. ABACE доставили.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"БРАУНИ С ТГК | 10 шт",
city:"Петропавловск",
district:"Подгора",
delivery:"EMSPost",
text:`10 брауни. Съел одно и приехал. Вкусные, шоколадные. EMSPost за 3 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Шоколадные печеньки с ТГК | 6 шт",
city:"Петропавловск",
district:"Рабочий",
delivery:"СДЭК",
text:`6 печенек. Съел две, через час приехал. Очень вкусные. СДЭК привезли.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Мармеладки микс с ТГК | 12 шт",
city:"Уральск",
district:"Курени",
delivery:"DPD",
text:`12 мармеладок. Съел две и приехал. Кисленькие, вкусные. DPD за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"NIAGARA | 4 г",
city:"Уральск",
district:"Астана",
delivery:"Boxberry",
text:`Ниагара 4г — хороший трип. Часа 4 путешествовал. Boxberry доставили.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"HYBRID ALBINO A+ | 4 г",
city:"Темиртау",
district:"Старый город",
delivery:"ABACE",
text:`Альбиносы 4г. Путешествие знатное, визуалы мощные. ABACE молодцы.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"McKENNAII #2 | 4 г",
city:"Темиртау",
district:"Новый город",
delivery:"EMSPost",
text:`Маккена 4г — глубокий трип. 4 часа по мирам. EMSPost за 3 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Расслабляющий чай Кратом | 300 гр",
city:"Рудный",
district:"Горняк",
delivery:"СДЭК",
text:`Кратом 300гр. Пью вечером, расслабляет. СДЭК привезли за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Z-Up Auto, ТГК-29 | x4 шт",
city:"Рудный",
district:"Восточный",
delivery:"DPD",
text:`Z-Up авто 4 семки, ТГК 29. Приехали целые. DPD за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Lemon Cherry Cookies, ТГК-28.5 | x5 шт",
city:"Жезказган",
district:"Центральный",
delivery:"Boxberry",
text:`Lemon Cherry Cookies 5 семок, ТГК 28.5. Автоцветы. Boxberry доставили.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Bubba Cookies, ТГК-28 | x3 шт",
city:"Жезказган",
district:"Кенгир",
delivery:"ABACE",
text:`Bubba Cookies 3 семки, ТГК 28. Автоцветы. ABACE быстро.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Guava Auto, ТГК-28 | x4 шт",
city:"Балхаш",
district:"1 мкр",
delivery:"EMSPost",
text:`Guava Auto 4 семки, FastBuds. ТГК 28. EMSPost за 3 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Zkittlez Auto, ТГК-24 | x6 шт",
city:"Балхаш",
district:"7 мкр",
delivery:"СДЭК",
text:`Zkittlez авто 6 семок, ТГК 24. Для автоцветов норм. СДЭК привезли.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Orange Creampop, ТГК-30-35 | x3 шт",
city:"Алматы",
district:"Бостандыкский",
delivery:"DPD",
text:`Orange Creampop 3 семки, ТГК до 35. Фотопериод. DPD за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Bruce Banner Fast, ТГК-29 | x2 шт",
city:"Алматы",
district:"Ауэзовский",
delivery:"Boxberry",
text:`Bruce Banner 2 семки, Халк. ТГК 29. Boxberry доставили за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Dos-Vi-Dos, ТГК-30 | x5 шт",
city:"Алматы",
district:"Медеуский",
delivery:"ABACE",
text:`Дос-Ви-Дос 5 семок, ТГК 30. Крепкий сорт. ABACE молодцы.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Polar Gelato, ТГК-30 | x3 шт",
city:"Алматы",
district:"Турксибский",
delivery:"EMSPost",
text:`Polar Gelato 3 семки, Шербинскис. ТГК 30. Элитка. EMSPost за 3 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"9 Pound Hammer | 3 мл x4 шт",
city:"Астана",
district:"Есиль",
delivery:"СДЭК",
text:`9 паунд молоток, 4 штуки. ТГК 90%, лютый. Для профи. СДЭК привезли.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Big Bad Bear | 3 мл x3 шт",
city:"Астана",
district:"Алматы",
delivery:"DPD",
text:`Медведь злой, три шота. ТГК 90%, крепкий пиздец. DPD за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Euforic | 3 мл x2 шт",
city:"Астана",
district:"Сарыарка",
delivery:"Boxberry",
text:`Эйфорик, два шота. ТГК 85%, эйфория лёгкая. Boxberry доставили.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Gorilla Power | 3 мл x3 шт",
city:"Шымкент",
district:"Абайский",
delivery:"ABACE",
text:`Горилла мощь, три штуки. ТГК 90%, лютый. ABACE быстро.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Jungle Monkey | 3 мл x4 шт",
city:"Шымкент",
district:"Енбекшинский",
delivery:"EMSPost",
text:`Jungle Monkey, 4 штуки. Весёлый, ТГК 80%. EMSPost за 3 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Laughing Buddha | 3 мл x3 шт",
city:"Шымкент",
district:"Аль-Фарабийский",
delivery:"СДЭК",
text:`Будда, три шота. Позитивный, ТГК средний. СДЭК привезли за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"OG Forbidden Berries | 3 мл x3 шт",
city:"Караганда",
district:"Казыбекбийский",
delivery:"DPD",
text:`Запретная ягодка, три штуки. ТГК 85%, вкус ягодный. DPD за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Kiwi Guava Kush | 3 мл x4 шт",
city:"Караганда",
district:"Октябрьский",
delivery:"Boxberry",
text:`Киви-гуава, 4 штуки. Сочный вкус, ТГК 80%. Boxberry доставили.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Tropical Fruits HAZE | 3 мл x3 шт",
city:"Караганда",
district:"Михайловка",
delivery:"ABACE",
text:`Тропикл фрутс, три шота. Вкус фруктовый, ТГК 85%. ABACE молодцы.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Dabbalicious 96% | 3 мл x2 шт",
city:"Актобе",
district:"Старый город",
delivery:"EMSPost",
text:`96%, два шота. Пиздец лютый, в космосе часа 4. Для профи.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"БРАУНИ С ТГК | 12 шт",
city:"Актобе",
district:"11-й микрорайон",
delivery:"СДЭК",
text:`12 брауни. Съел одно и приехал. Очень вкусные. СДЭК привезли.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Шоколадные печеньки с ТГК | 10 шт",
city:"Актобе",
district:"Курмыш",
delivery:"DPD",
text:`10 печенек. Съел две, через час приехал. Вкусные, шоколадные.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Мармеладки микс с ТГК | 15 шт",
city:"Тараз",
district:"Центральный",
delivery:"Boxberry",
text:`15 мармеладок. Съел две и приехал. Кисленькие, вкусные.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"NIAGARA | 6 г",
city:"Тараз",
district:"Каратауский",
delivery:"ABACE",
text:`Ниагара 6г — лютые грибы. 6 часов путешествия. ABACE быстро.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"HYBRID ALBINO A+ | 6 г",
city:"Тараз",
district:"Аса",
delivery:"EMSPost",
text:`Альбиносы 6г. Путешествие знатное, визуалы мощные. EMSPost за 3 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"McKENNAII #2 | 6 г",
city:"Павлодар",
district:"Усольский",
delivery:"СДЭК",
text:`Маккена 6г — глубокий трип. 6 часов по мирам. СДЭК привезли.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"KZ",
type:"⭐ Отзыв",
product:"Расслабляющий чай Кратом | 750 гр",
city:"Павлодар",
district:"Дачный",
delivery:"DPD",
text:`Кратом 750гр. Пью вечером, расслабляет. DPD за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},
  
{
country:"BY",
type:"⭐ Отзыв",
product:"Maui Wowie | 30 мл",
city:"Минск",
district:"Центральный",
delivery:"СДЭК",
text:`Брал первую неделю, приехало за 4 дня. Зашел домой, заправил подыгу. Пиздец лёгкий тропический кайф, часа 3 летал по квартире. ТГК чувствуется норм, новичкам по аккуратнее.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Weeding Cake | 30 мл",
city:"Гомель",
district:"Новобелицкий",
delivery:"DPD",
text:`Weeding Cake приехал, 30 мл. Вкус тортика, сладкий. Я думал будет слабее, а там ТГК конкретный. Друг с одного тяги улетел. Сам лежал 2 часа в астрале. Заебись!`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"OG Kush | 30 мл",
city:"Витебск",
district:"Октябрьский",
delivery:"Почта РФ",
text:`OG Kush классика, ТГК в норме. Приехало за 8 дней. Вечером затянулся и вырубился спать. Кому надо расслабиться после работы — самое то.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Super Lemon HAZE | 30 мл",
city:"Могилёв",
district:"Ленинский",
delivery:"СДЭК",
text:`Super Lemon HAZE бодрит пиздец. Думал сатива будет мягкой, а там ТГК 29%. Убрало знатно, часа 4 улыбался без повода. Вкус лимона топ.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Permanent Marker | 30 мл",
city:"Брест",
district:"Московский",
delivery:"Boxberry",
text:`Permanent Marker, название стрёмное но вкус прикольный, химозный такой. ТГК много, новичкам осторожно. После 3 тяг понял что всё, приехали. Лежал смотрел в потолок.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Dosi Kush | 30 мл",
city:"Гродно",
district:"Октябрьский",
delivery:"DPD",
text:`Дози куш — индика рулит. Приехал, заправил, через 10 минут понял что ноги ватные. Тело расслабило, уснул как младенец. ТГК 28%, норм.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Dabbalicious 96% | 3 мл",
city:"Минск",
district:"Фрунзенский",
delivery:"СДЭК",
text:`96% ТГК это пиздец, ребята. Я думал я опытный, а после второго тяги понял что я в космосе. Часа 4 не мог понять где я. Новичкам категорически не советую, снесёт крышу.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Gorilla Power | 3 мл x2 шт",
city:"Барановичи",
district:"Южный",
delivery:"DPD",
text:`Горилла мощь, два взял. ТГК зашкаливает, реально горилла. После первого вечера понял что хватит на месяц. Крепкий, лютый, новичкам ни в коем случае.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Laughing Buddha | 3 мл",
city:"Пинск",
district:"Центральный",
delivery:"Почта РФ",
text:`Будда рассмешил знатно. ТГК средний, но очень позитивный. Сидел ржал с видосов часа 3. Приехало за 10 дней, зато качество огонь.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"9 Pound Hammer | 3 мл x3 шт",
city:"Лида",
district:"Южный",
delivery:"СДЭК",
text:`9 паунд молоток — название говорит само за себя. Как молотком по башке, но в хорошем смысле. ТГК 90%, вырубает знатно. Три штуки взял, надолго.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Грибы NIAGARA | 5 г",
city:"Орша",
district:"Железнодорожный",
delivery:"DPD",
text:`Ниагара, 5 грамм. Это пиздец лютые грибы, оказался в путешествии на 6 часов. Визуалы мощные, стены дышали, в космос летал. Всем советую, но с головой.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Грибы HYBRID ALBINO A+ | 3 г",
city:"Полоцк",
district:"Центральный",
delivery:"СДЭК",
text:`Альбиносы, 3 грамма. Думал будет слабо, а там трип лютый. 4 часа путешествовал по мирам. Очень глубокий сорт, для опытных.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Грибы McKENNAII #2 | 2 г",
city:"Жлобин",
district:"Северный",
delivery:"Boxberry",
text:`Маккена 2г. Для первого раза самое то. Путешествие мягкое, но интересное. Цвета яркие, мысли глубокие. Через часик понял что грибы работают.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Грибы NIAGARA | 10 г",
city:"Светлогорск",
district:"Октябрьский",
delivery:"Почта РФ",
text:`10 грамм Ниагары взял с запасом. Грибы лютые, после 3 грамм уже улетел. Друзьям раздам, пусть тоже путешествуют. Приехало за 9 дней, всё целое.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Грибы HYBRID ALBINO A+ | 5 г",
city:"Кобрин",
district:"Центральный",
delivery:"СДЭК",
text:`Альбиносы 5г — это жёстко. Оказался в джунглях, хотя сидел в комнате. Часа 4 не мог понять реальность. Мощный сорт, уважение магазину.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"БРАУНИ С ТГК | 8 шт",
city:"Минск",
district:"Заводской",
delivery:"СДЭК",
text:`Брауни, 8 штук. Съел одно, через час понял что приехал. Лежал часа 3, смотрел в одну точку. ТГК в съедобном всегда мощнее, новичкам половинку.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Мармеладки микс с ТГК | 10 шт",
city:"Солигорск",
district:"Центральный",
delivery:"DPD",
text:`Мармеладки кисленькие, оч вкусные. Две съел и всё, уплыл. 4 часа смеха и хорошего настроения. ТГК ровный, без паранойи.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Шоколадные печеньки с ТГК | 15 шт",
city:"Речица",
district:"Центральный",
delivery:"Почта РФ",
text:`15 печенек, целый запас. Съел три и вырубился на полдня. Очень вкусные, шоколадные, но эффект лютый. Для опытных.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Z-Up Auto, ТГК-29 | x3 шт",
city:"Бобруйск",
district:"Первомайский",
delivery:"СДЭК",
text:`Z-Up авто, 3 семки. ТГК 29, должны быть крепкие. Приехали за 4 дня, целые. Буду гровить на балконе, отпишусь потом.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Lemon Cherry Cookies, ТГК-28.5 | x2 шт",
city:"Мозырь",
district:"Центральный",
delivery:"DPD",
text:`Lemon Cherry Cookies, 2 семки. Жду не дождусь урожая, говорят очень вкусный сорт. Приехали быстро, за 3 дня. Спасибо!`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Polar Gelato, ТГК-30 | x1 шт",
city:"Борисов",
district:"Восточный",
delivery:"Boxberry",
text:`Polar Gelato, одна семка, но зато какая! Шербинскис топ, ТГК 30. Приехала в блистере, целая. Буду растить с любовью.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Кратом | 250 гр",
city:"Слуцк",
district:"Северный",
delivery:"Почта РФ",
text:`Кратом 250гр. Заварил вечером, расслабило пиздец хорошо. Спал как убитый. Чай горьковатый, но с медом норм.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Кратом | 500 гр",
city:"Калинковичи",
district:"Центральный",
delivery:"СДЭК",
text:`Полкило кратома взял. Теперь на месяц хватит. Помогает от стресса, настроение поднимает. Вкус специфический, но привыкнуть можно.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Original Z | 30 мл",
city:"Минск",
district:"Советский",
delivery:"СДЭК",
text:`Ориджинал зет — улет. ТГК чувствуется с первой тяги. Часа 3 летал, музыку слушал. Вкус приятный, травяной. Буду ещё.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Jungle Monkey | 3 мл",
city:"Минск",
district:"Первомайский",
delivery:"DPD",
text:`Jungle Monkey прикольный, веселый. ТГК средний, но очень позитивный. Сидел ржал с кота часа 2. Другу дал — тоже заценил.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Грибы McKENNAII #2 | 5 г",
city:"Минск",
district:"Партизанский",
delivery:"Boxberry",
text:`Маккена 5г — это путешествие на всю ночь. Очень глубокий трип, философский. Стены дышали, узоры везде. Сильный сорт, уважуха.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Fresh Mint | 30 мл",
city:"Минск",
district:"Октябрьский",
delivery:"Почта РФ",
text:`Мятка бодрит, но не вырубает. ТГК в меру, для активного дня норм. Приехало за 7 дней, упаковка целая.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Euforic | 3 мл x2 шт",
city:"Минск",
district:"Ленинский",
delivery:"СДЭК",
text:`Эйфорик, два шота. Название говорит само за себя. Эйфория лёгкая, приятная. ТГК ровный, без передоза. Второй другу подарю.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"БРАУНИ С ТГК | 4 шт",
city:"Минск",
district:"Заводской",
delivery:"DPD",
text:`Брауни огонь, одно хватило на полдня. Съел и через час понял что я в невесомости. Лежал кайфовал. Для новичков половинку.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Dos-Vi-Dos, ТГК-30 | x5 шт",
city:"Минск",
district:"Фрунзенский",
delivery:"Почта РФ",
text:`5 семок Дос-Ви-Дос. ТГК 30, крепкий сорт. Приехали за 9 дней, все целые. Буду сажать весной. Магазину спасибо.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Кратом | 1000 гр",
city:"Минск",
district:"Центральный",
delivery:"СДЭК",
text:`Кг кратома взял, теперь с запасом. Пью каждый день, очень помогает от тревоги. Приехало за 4 дня, упаковка заводская.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Dosi Kush | 30 мл",
city:"Минск",
district:"Московский",
delivery:"Boxberry",
text:`Дози куш, индика рубит. После работы затянулся и вырубился в кресле. ТГК 28%, крепко. Вкус приятный, землистый.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Big Bad Bear | 3 мл x3 шт",
city:"Минск",
district:"Малиновка",
delivery:"DPD",
text:`Медведь злой, три штуки. Очень крепкий, ТГК под 90%. Новичкам даже не суйтесь. Опытным понравится. Приехало за 3 дня, быстро.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Грибы NIAGARA | 2 г",
city:"Минск",
district:"Уручье",
delivery:"СДЭК",
text:`Ниагара 2г, для первого раза идеально. Путешествие мягкое, но краски яркие. Часа 3 гулял по парку, кайфовал от природы.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Permanent Marker | 30 мл",
city:"Минск",
district:"Сухарево",
delivery:"Почта РФ",
text:`Permanent Marker, вкус химозный но кайфовый. ТГК очень много, улетел с полтяги. Лежал 4 часа слушал музыку. Приехало за 8 дней.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Kiwi Guava Kush | 3 мл",
city:"Минск",
district:"Чижовка",
delivery:"DPD",
text:`Киви-гуава, сочный вкус. ТГК в меру, для расслабления норм. Приехало за 4 дня. Девушке тоже зашло, будем ещё брать.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Мармеладки микс | 5 шт",
city:"Минск",
district:"Серебрянка",
delivery:"СДЭК",
text:`5 мармеладок, микс фруктов. Съел две и всё, приехал. Часа 3 смеялся без причины. Очень вкусные и сильные.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Guava Auto, ТГК-28 | x2 шт",
city:"Минск",
district:"Каменная Горка",
delivery:"Boxberry",
text:`Guava Auto 2 семки, FastBuds. ТГК 28, автоцветы для ленивых. Приехали за 5 дней, целые. Жду урожая.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Кратом | 250 гр",
city:"Минск",
district:"Лошица",
delivery:"Почта РФ",
text:`Кратом 250гр. Помогает от усталости, бодрит норм. Приехало за 10 дней, упаковка чуть помялась но чай цел.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Maui Wowie | 30 мл",
city:"Минск",
district:"Ангарская",
delivery:"СДЭК",
text:`Maui Wowie — тропики, ТГК норм. Приехало за 4 дня. Весь вечер летал, вспоминал отпуск. Хорошая жижа.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"OG Forbidden Berries | 3 мл x2 шт",
city:"Минск",
district:"Степянка",
delivery:"DPD",
text:`Запретная ягодка, два взял. ТГК 85%, крепкий. После двух тяг уже хорошо. Вкус ягодный, приятный. Другу дал — тоже оценил.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Грибы HYBRID ALBINO A+ | 5 г",
city:"Минск",
district:"Масюковщина",
delivery:"СДЭК",
text:`Альбиносы 5г — лютые. Оказался в другом измерении часиков на 5. Очень мощный трип, визуалы бешеные. Опытным мастхэв.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Lemon Cherry Gelato | 30 мл",
city:"Минск",
district:"Зеленый Луг",
delivery:"Почта РФ",
text:`Лимон-вишня-джелато, вкус конфетка. ТГК 29%, улет знатный. Ждал 9 дней, но оно того стоило. Буду ещё.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"9 Pound Hammer | 3 мл",
city:"Минск",
district:"Юго-Запад",
delivery:"Boxberry",
text:`9 паунд молоток — вырубило пиздец. Думал я опытный, а после третьей тяги понял что всё, приехали. Лежал часа 3. ТГК 90%, для профи.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Шоколадные печеньки | 8 шт",
city:"Минск",
district:"Дражня",
delivery:"СДЭК",
text:`Печеньки топ, 8 штук. Съел две, через час понял что я в космосе. Очень вкусные, шоколадные. Сидели с другом ржали весь вечер.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Zkittlez Auto, ТГК-24 | x5 шт",
city:"Минск",
district:"Сокол",
delivery:"DPD",
text:`Zkittlez авто 5 семок. ТГК 24, для автоцветов норм. Приехали за 3 дня. Буду сажать весной, спасибо магазу.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Кратом | 500 гр",
city:"Минск",
district:"Курасовщина",
delivery:"Почта РФ",
text:`Полкило кратома. Пью неделю, помогает от спины и нервов. Приехало за 8 дней, упаковка целая. Чай норм.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Weeding Cake | 30 мл",
city:"Минск",
district:"Шабаны",
delivery:"СДЭК",
text:`Weeding Cake, сладкий вкус. ТГК ровный, часа 4 кайфовал. Приехало за 4 дня. В ПВЗ девушка приветливая.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Gorilla Power | 3 мл",
city:"Минск",
district:"Малиновка",
delivery:"DPD",
text:`Горилла мощь, один шот. Крепкий пиздец, ТГК под 90%. Новичкам даже не подходить. Я опытный и то улетел знатно. Два часа в отключке.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Грибы McKENNAII #2 | 3 г",
city:"Минск",
district:"Веснянка",
delivery:"Boxberry",
text:`Маккена 3г. Путешествие было знатное, часа 4 гулял по другим мирам. Очень глубокий сорт, для думающих. Грибы качественные.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Gorilla Power | 3 мл x3 шт",
city:"Брест",
district:"Московский",
delivery:"СДЭК",
text:`Горилла мощь, три шота. Крепкий пиздец, на месяц хватит. ТГК 90%, улетаешь знатно. Новичкам не советую.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Грибы NIAGARA | 3 г",
city:"Витебск",
district:"Первомайский",
delivery:"Boxberry",
text:`Ниагара 3г — лютые грибы. 4 часа путешествия, визуалы огонь. Всем советую. Boxberry быстро привезли.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"БРАУНИ С ТГК | 12 шт",
city:"Гомель",
district:"Центральный",
delivery:"DPD",
text:`12 брауни, запасся. Съел одно и приехал. Очень вкусные, шоколадные. DPD за 4 дня доставили.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Lemon Cherry Cookies, ТГК-28.5 | x5 шт",
city:"Могилёв",
district:"Октябрьский",
delivery:"СДЭК",
text:`Lemon Cherry Cookies 5 семок. ТГК 28.5. Автоцветы. Приехали за 4 дня, целые. Буду сажать.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Кратом | 1000 гр",
city:"Гродно",
district:"Ленинский",
delivery:"Почта РФ",
text:`Кг кратома. Пью месяц, помогает отлично. Ждал 10 дней, но качество топ.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Maui Wowie | 30 мл",
city:"Бобруйск",
district:"Первомайский",
delivery:"Boxberry",
text:`Maui Wowie — тропики, ТГК норм. Весь вечер летал. Boxberry доставили за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Dabbalicious 96% | 3 мл x2 шт",
city:"Барановичи",
district:"Южный",
delivery:"СДЭК",
text:`96% два шота. Это пиздец, в космосе часа 4. Для профи. СДЭК привезли быстро.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Грибы McKENNAII #2 | 4 г",
city:"Пинск",
district:"Центральный",
delivery:"DPD",
text:`Маккена 4г. Глубокий трип, 4 часа путешествия. DPD за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},
  
{
country:"BY",
type:"⭐ Отзыв",
product:"Maui Wowie | 30 мл",
city:"Брест",
district:"Ленинский",
delivery:"Boxberry",
text:`Maui Wowie приехал, вкус тропиков. ТГК 28%, летал весь вечер. Буду ещё брать.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Weeding Cake | 30 мл",
city:"Витебск",
district:"Железнодорожный",
delivery:"СДЭК",
text:`Weeding Cake сладкий тортик, ТГК 28%. Улетел с полтяги. Новичкам осторожно.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"OG Kush | 30 мл",
city:"Могилёв",
district:"Ленинский",
delivery:"DPD",
text:`OG Kush классика, ТГК в норме. После работы самое то. DPD за 3 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Super Lemon HAZE | 30 мл",
city:"Гомель",
district:"Новобелицкий",
delivery:"ABACE",
text:`Super Lemon HAZE бодрит, ТГК 29%. Часа 4 улыбался без повода. Лимон топ.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Permanent Marker | 30 мл",
city:"Гродно",
district:"Октябрьский",
delivery:"EMSPost",
text:`Permanent Marker, ТГК много. Улетел с полтяги. Лежал 4 часа слушал музыку.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Dosi Kush | 30 мл",
city:"Брест",
district:"Московский",
delivery:"Почта РФ",
text:`Дози куш индика, расслабляет. ТГК 28%. Через 10 минут ноги ватные. Ждал 7 дней.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Dabbalicious 96% | 3 мл",
city:"Минск",
district:"Фрунзенский",
delivery:"СДЭК",
text:`96% это пиздец. В космосе часа 4. Для профи. СДЭК привезли за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Gorilla Power | 3 мл x2 шт",
city:"Барановичи",
district:"Южный",
delivery:"DPD",
text:`Горилла мощь, два шота. ТГК 90%, крепкий пиздец. Новичкам не советую.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Laughing Buddha | 3 мл",
city:"Пинск",
district:"Центральный",
delivery:"Boxberry",
text:`Будда рассмешил, позитивный. ТГК средний. Сидел ржал часа 3.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"9 Pound Hammer | 3 мл x3 шт",
city:"Лида",
district:"Южный",
delivery:"ABACE",
text:`9 паунд молоток, три штуки. ТГК 90%, вырубает знатно. Надолго хватит.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Грибы NIAGARA | 5 г",
city:"Орша",
district:"Железнодорожный",
delivery:"EMSPost",
text:`Ниагара 5г — лютые грибы. 6 часов путешествия. Визуалы мощные.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Грибы HYBRID ALBINO A+ | 3 г",
city:"Полоцк",
district:"Центральный",
delivery:"СДЭК",
text:`Альбиносы 3г. 4 часа по мирам гулял. Глубокий сорт. СДЭК привезли.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Грибы McKENNAII #2 | 2 г",
city:"Жлобин",
district:"Северный",
delivery:"DPD",
text:`Маккена 2г, для первого раза идеально. Путешествие мягкое. DPD за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Грибы NIAGARA | 10 г",
city:"Светлогорск",
district:"Октябрьский",
delivery:"Boxberry",
text:`10г Ниагары. Грибы лютые, после 3г улетел. Друзьям раздам.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Грибы HYBRID ALBINO A+ | 5 г",
city:"Кобрин",
district:"Центральный",
delivery:"ABACE",
text:`Альбиносы 5г — жёстко. 4 часа в джунглях. Мощный сорт.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"БРАУНИ С ТГК | 8 шт",
city:"Минск",
district:"Заводской",
delivery:"EMSPost",
text:`Брауни 8 шт. Съел одно и приехал. ТГК мощный. Новичкам половинку.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Мармеладки микс с ТГК | 10 шт",
city:"Солигорск",
district:"Центральный",
delivery:"СДЭК",
text:`Мармеладки кисленькие, вкусные. Две съел и уплыл. 4 часа смеха.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Шоколадные печеньки с ТГК | 15 шт",
city:"Речица",
district:"Центральный",
delivery:"DPD",
text:`15 печенек. Съел три и вырубился на полдня. Вкусные, но лютые.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Z-Up Auto, ТГК-29 | x3 шт",
city:"Бобруйск",
district:"Первомайский",
delivery:"Boxberry",
text:`Z-Up авто 3 семки, ТГК 29. Приехали целые. Буду гровить на балконе.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Lemon Cherry Cookies, ТГК-28.5 | x2 шт",
city:"Мозырь",
district:"Центральный",
delivery:"ABACE",
text:`Lemon Cherry Cookies 2 семки. Жду урожая. Говорят вкусный сорт.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Polar Gelato, ТГК-30 | x1 шт",
city:"Борисов",
district:"Восточный",
delivery:"EMSPost",
text:`Polar Gelato одна семка. Шербинскис топ, ТГК 30. Буду растить с любовью.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Кратом | 250 гр",
city:"Слуцк",
district:"Северный",
delivery:"СДЭК",
text:`Кратом 250гр. Расслабило пиздец хорошо. Спал как убитый. Чай горьковатый.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Кратом | 500 гр",
city:"Калинковичи",
district:"Центральный",
delivery:"DPD",
text:`500гр кратома. Помогает от стресса. На месяц хватит. DPD привезли.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Original Z | 30 мл",
city:"Минск",
district:"Советский",
delivery:"Boxberry",
text:`Original Z улетный, ТГК 28%. Часа 3 летал, музыку слушал.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Jungle Monkey | 3 мл",
city:"Минск",
district:"Первомайский",
delivery:"ABACE",
text:`Jungle Monkey весёлый, ТГК 80%. Сидел ржал с кота часа 2.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Грибы McKENNAII #2 | 5 г",
city:"Минск",
district:"Партизанский",
delivery:"EMSPost",
text:`Маккена 5г — путешествие на всю ночь. Глубокий трип, философский.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Fresh Mint | 30 мл",
city:"Минск",
district:"Октябрьский",
delivery:"Почта РФ",
text:`Мятка бодрит, но не вырубает. ТГК в меру. Приехало за 7 дней.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Euforic | 3 мл x2 шт",
city:"Минск",
district:"Ленинский",
delivery:"СДЭК",
text:`Эйфорик, два шота. Эйфория лёгкая, приятная. Второй другу подарю.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"БРАУНИ С ТГК | 4 шт",
city:"Минск",
district:"Заводской",
delivery:"DPD",
text:`Брауни огонь, одно хватило на полдня. В невесомости лежал кайфовал.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Dos-Vi-Dos, ТГК-30 | x5 шт",
city:"Минск",
district:"Фрунзенский",
delivery:"Boxberry",
text:`5 семок Дос-Ви-Дос. ТГК 30, крепкий сорт. Приехали за 5 дней.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Кратом | 1000 гр",
city:"Минск",
district:"Центральный",
delivery:"ABACE",
text:`Кг кратома. Пью каждый день, от тревоги помогает. Упаковка заводская.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Dosi Kush | 30 мл",
city:"Минск",
district:"Московский",
delivery:"EMSPost",
text:`Дози куш индика рубит. После работы затянулся и вырубился в кресле.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Big Bad Bear | 3 мл x3 шт",
city:"Минск",
district:"Малиновка",
delivery:"СДЭК",
text:`Медведь злой, три штуки. ТГК 90%, крепкий. Новичкам не суйтесь.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Грибы NIAGARA | 2 г",
city:"Минск",
district:"Уручье",
delivery:"DPD",
text:`Ниагара 2г, для первого раза идеально. Краски яркие, кайф от природы.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Permanent Marker | 30 мл",
city:"Минск",
district:"Сухарево",
delivery:"Почта РФ",
text:`Permanent Marker, вкус химозный. ТГК много, улетел с полтяги. Ждал 8 дней, коробка мятая но товар цел.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Kiwi Guava Kush | 3 мл",
city:"Минск",
district:"Чижовка",
delivery:"Boxberry",
text:`Киви-гуава, сочный вкус. ТГК в меру. Девушке зашло.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Мармеладки микс | 5 шт",
city:"Минск",
district:"Серебрянка",
delivery:"ABACE",
text:`5 мармеладок. Съел две и приехал. 3 часа смеха без причины.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Guava Auto, ТГК-28 | x2 шт",
city:"Минск",
district:"Каменная Горка",
delivery:"EMSPost",
text:`Guava Auto 2 семки, FastBuds. ТГК 28. Приехали за 3 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Кратом | 250 гр",
city:"Минск",
district:"Лошица",
delivery:"СДЭК",
text:`Кратом 250гр. Помогает от усталости. Упаковка чуть порвана но чай цел.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Maui Wowie | 30 мл",
city:"Минск",
district:"Ангарская",
delivery:"DPD",
text:`Maui Wowie — тропики. Весь вечер летал, вспоминал отпуск.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"OG Forbidden Berries | 3 мл x2 шт",
city:"Минск",
district:"Степянка",
delivery:"Boxberry",
text:`Запретная ягодка, два взял. ТГК 85%, крепкий. Другу дал — оценил.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Грибы HYBRID ALBINO A+ | 5 г",
city:"Минск",
district:"Масюковщина",
delivery:"ABACE",
text:`Альбиносы 5г — лютые. 5 часов в другом измерении. Опытным мастхэв.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Lemon Cherry Gelato | 30 мл",
city:"Минск",
district:"Зеленый Луг",
delivery:"EMSPost",
text:`Лимон-вишня-джелато, вкус конфетка. ТГК 29%, улет знатный.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"9 Pound Hammer | 3 мл",
city:"Минск",
district:"Юго-Запад",
delivery:"Почта РФ",
text:`9 паунд молоток — вырубило. ТГК 90%. Ждал 9 дней, упаковка мятая.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Шоколадные печеньки | 8 шт",
city:"Минск",
district:"Дражня",
delivery:"СДЭК",
text:`Печеньки топ, 8 шт. Съел две и в космосе. С другом ржали весь вечер.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Zkittlez Auto, ТГК-24 | x5 шт",
city:"Минск",
district:"Сокол",
delivery:"DPD",
text:`Zkittlez авто 5 семок. ТГК 24. Приехали за 3 дня. Буду сажать весной.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Кратом | 500 гр",
city:"Минск",
district:"Курасовщина",
delivery:"Boxberry",
text:`500гр кратома. Пью неделю, помогает от нервов. Посылка задержалась на 2 дня.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Weeding Cake | 30 мл",
city:"Минск",
district:"Шабаны",
delivery:"ABACE",
text:`Weeding Cake сладкий. ТГК ровный, часа 4 кайфовал.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Gorilla Power | 3 мл",
city:"Минск",
district:"Малиновка",
delivery:"EMSPost",
text:`Горилла мощь, один шот. ТГК 90%. Два часа в отключке.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Грибы McKENNAII #2 | 3 г",
city:"Минск",
district:"Веснянка",
delivery:"СДЭК",
text:`Маккена 3г. 4 часа по мирам гулял. Глубокий сорт.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Maui Wowie | 30 мл",
city:"Гомель",
district:"Центральный",
delivery:"DPD",
text:`Maui Wowie тропики, ТГК 28%. Приехало за 3 дня. Буду ещё.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Weeding Cake | 30 мл",
city:"Витебск",
district:"Октябрьский",
delivery:"Boxberry",
text:`Weeding Cake сладкий. ТГК 28%. Улетел. Boxberry за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"OG Kush | 30 мл",
city:"Могилёв",
district:"Ленинский",
delivery:"ABACE",
text:`OG Kush классика. После работы расслабляет. ABACE привезли.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Super Lemon HAZE | 30 мл",
city:"Брест",
district:"Московский",
delivery:"EMSPost",
text:`Super Lemon HAZE бодрит. ТГК 29%. 4 часа улыбался.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Permanent Marker | 30 мл",
city:"Гродно",
district:"Октябрьский",
delivery:"СДЭК",
text:`Permanent Marker, ТГК много. Улетел с полтяги. СДЭК за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Dosi Kush | 30 мл",
city:"Барановичи",
district:"Южный",
delivery:"DPD",
text:`Дози куш индика. Через 10 минут ноги ватные. DPD быстро.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Dabbalicious 96% | 3 мл",
city:"Пинск",
district:"Центральный",
delivery:"Boxberry",
text:`96% пиздец. В космосе. Для профи. Boxberry привезли.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Gorilla Power | 3 мл x2 шт",
city:"Лида",
district:"Южный",
delivery:"ABACE",
text:`Горилла мощь, два шота. ТГК 90%. Крепкий. Новичкам нельзя.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Laughing Buddha | 3 мл",
city:"Орша",
district:"Железнодорожный",
delivery:"EMSPost",
text:`Будда рассмешил. ТГК средний. Часа 3 ржал.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"9 Pound Hammer | 3 мл x3 шт",
city:"Полоцк",
district:"Центральный",
delivery:"СДЭК",
text:`9 паунд молоток, три штуки. Вырубает знатно. СДЭК привезли.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Грибы NIAGARA | 5 г",
city:"Жлобин",
district:"Северный",
delivery:"DPD",
text:`Ниагара 5г — лютые. 6 часов путешествия. Визуалы мощные.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Грибы HYBRID ALBINO A+ | 3 г",
city:"Светлогорск",
district:"Октябрьский",
delivery:"Boxberry",
text:`Альбиносы 3г. 4 часа по мирам. Глубокий сорт.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Грибы McKENNAII #2 | 2 г",
city:"Кобрин",
district:"Центральный",
delivery:"ABACE",
text:`Маккена 2г. Мягкое путешествие. ABACE за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"БРАУНИ С ТГК | 8 шт",
city:"Минск",
district:"Фрунзенский",
delivery:"EMSPost",
text:`8 брауни. Съел одно и приехал. ТГК мощный. EMSPost за 3 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Мармеладки микс с ТГК | 10 шт",
city:"Минск",
district:"Советский",
delivery:"Почта РФ",
text:`10 мармеладок. Две съел и уплыл. Ждал 8 дней, коробка мятая.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Шоколадные печеньки с ТГК | 15 шт",
city:"Минск",
district:"Первомайский",
delivery:"СДЭК",
text:`15 печенек. Съел три и вырубился. Вкусные, но лютые.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Z-Up Auto, ТГК-29 | x3 шт",
city:"Минск",
district:"Партизанский",
delivery:"DPD",
text:`Z-Up авто 3 семки. ТГК 29. Приехали целые. Буду гровить.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Lemon Cherry Cookies, ТГК-28.5 | x2 шт",
city:"Минск",
district:"Октябрьский",
delivery:"Boxberry",
text:`Lemon Cherry Cookies 2 семки. Жду урожая. Boxberry быстро.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Polar Gelato, ТГК-30 | x1 шт",
city:"Минск",
district:"Ленинский",
delivery:"ABACE",
text:`Polar Gelato одна семка. Шербинскис топ. Буду растить.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Кратом | 250 гр",
city:"Минск",
district:"Заводской",
delivery:"EMSPost",
text:`250гр кратома. Расслабило. Посылка задержалась на 3 дня.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Кратом | 500 гр",
city:"Минск",
district:"Московский",
delivery:"СДЭК",
text:`500гр кратома. От стресса помогает. СДЭК за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Original Z | 30 мл",
city:"Минск",
district:"Малиновка",
delivery:"DPD",
text:`Original Z улетный. ТГК 28%. Часа 3 летал.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Jungle Monkey | 3 мл",
city:"Минск",
district:"Уручье",
delivery:"Boxberry",
text:`Jungle Monkey весёлый. ТГК 80%. Ржал с кота.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Грибы McKENNAII #2 | 5 г",
city:"Минск",
district:"Сухарево",
delivery:"ABACE",
text:`Маккена 5г — путешествие. Глубокий трип. ABACE за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Fresh Mint | 30 мл",
city:"Минск",
district:"Чижовка",
delivery:"EMSPost",
text:`Мятка бодрит. ТГК в меру. EMSPost за 3 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Euforic | 3 мл x2 шт",
city:"Минск",
district:"Серебрянка",
delivery:"Почта РФ",
text:`Эйфорик, два шота. Приехало за 9 дней, упаковка порвана но товар цел.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"БРАУНИ С ТГК | 4 шт",
city:"Минск",
district:"Каменная Горка",
delivery:"СДЭК",
text:`4 брауни. Съел одно и в невесомости. СДЭК за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Dos-Vi-Dos, ТГК-30 | x5 шт",
city:"Минск",
district:"Лошица",
delivery:"DPD",
text:`5 семок Дос-Ви-Дос. ТГК 30. Приехали за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Кратом | 1000 гр",
city:"Минск",
district:"Ангарская",
delivery:"Boxberry",
text:`Кг кратома. Посылка задержалась на 2 дня, но чай норм.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Dosi Kush | 30 мл",
city:"Минск",
district:"Степянка",
delivery:"ABACE",
text:`Дози куш индика. Вырубился в кресле. ABACE привезли.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Big Bad Bear | 3 мл x3 шт",
city:"Минск",
district:"Масюковщина",
delivery:"EMSPost",
text:`Медведь злой, три штуки. ТГК 90%. Крепкий.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Грибы NIAGARA | 2 г",
city:"Минск",
district:"Зеленый Луг",
delivery:"СДЭК",
text:`Ниагара 2г. Краски яркие. Кайф от природы.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Permanent Marker | 30 мл",
city:"Минск",
district:"Юго-Запад",
delivery:"DPD",
text:`Permanent Marker, ТГК много. Улетел. DPD за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Kiwi Guava Kush | 3 мл",
city:"Минск",
district:"Дражня",
delivery:"Boxberry",
text:`Киви-гуава сочный. Девушке зашло. Boxberry за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Мармеладки микс | 5 шт",
city:"Минск",
district:"Сокол",
delivery:"ABACE",
text:`5 мармеладок. Съел две и приехал. ABACE быстро.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Guava Auto, ТГК-28 | x2 шт",
city:"Минск",
district:"Курасовщина",
delivery:"EMSPost",
text:`Guava Auto 2 семки. FastBuds. Приехали за 3 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Кратом | 250 гр",
city:"Минск",
district:"Шабаны",
delivery:"Почта РФ",
text:`250гр кратома. Помогает. Ждал 10 дней, коробка порвана но чай цел.`,
rating:"⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Maui Wowie | 30 мл",
city:"Брест",
district:"Ленинский",
delivery:"СДЭК",
text:`Maui Wowie тропики. Летал весь вечер. СДЭК привезли.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Weeding Cake | 30 мл",
city:"Витебск",
district:"Железнодорожный",
delivery:"DPD",
text:`Weeding Cake сладкий. Улетел. DPD за 3 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"OG Kush | 30 мл",
city:"Могилёв",
district:"Ленинский",
delivery:"Boxberry",
text:`OG Kush классика. Расслабляет. Boxberry за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Super Lemon HAZE | 30 мл",
city:"Гомель",
district:"Новобелицкий",
delivery:"ABACE",
text:`Super Lemon HAZE бодрит. ТГК 29%. 4 часа улыбался.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Permanent Marker | 30 мл",
city:"Гродно",
district:"Октябрьский",
delivery:"EMSPost",
text:`Permanent Marker, ТГК много. Улетел. EMSPost за 3 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Dosi Kush | 30 мл",
city:"Барановичи",
district:"Южный",
delivery:"СДЭК",
text:`Дози куш индика. Ноги ватные. СДЭК за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Dabbalicious 96% | 3 мл",
city:"Пинск",
district:"Центральный",
delivery:"DPD",
text:`96% пиздец. В космосе. DPD привезли.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Gorilla Power | 3 мл x2 шт",
city:"Лида",
district:"Южный",
delivery:"Boxberry",
text:`Горилла мощь, два шота. ТГК 90%. Крепкий.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Laughing Buddha | 3 мл",
city:"Орша",
district:"Железнодорожный",
delivery:"ABACE",
text:`Будда рассмешил. 3 часа ржал. ABACE за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"9 Pound Hammer | 3 мл x3 шт",
city:"Полоцк",
district:"Центральный",
delivery:"EMSPost",
text:`9 паунд молоток, три штуки. Вырубает. EMSPost за 3 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Грибы NIAGARA | 5 г",
city:"Жлобин",
district:"Северный",
delivery:"СДЭК",
text:`Ниагара 5г — лютые. 6 часов путешествия.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Грибы HYBRID ALBINO A+ | 3 г",
city:"Светлогорск",
district:"Октябрьский",
delivery:"DPD",
text:`Альбиносы 3г. 4 часа по мирам. DPD за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Грибы McKENNAII #2 | 2 г",
city:"Кобрин",
district:"Центральный",
delivery:"Boxberry",
text:`Маккена 2г. Мягкое путешествие. Boxberry за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"БРАУНИ С ТГК | 8 шт",
city:"Минск",
district:"Фрунзенский",
delivery:"ABACE",
text:`8 брауни. Съел одно и приехал. ABACE привезли.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Мармеладки микс с ТГК | 10 шт",
city:"Минск",
district:"Советский",
delivery:"EMSPost",
text:`10 мармеладок. Две съел и уплыл. EMSPost за 3 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Шоколадные печеньки с ТГК | 15 шт",
city:"Минск",
district:"Первомайский",
delivery:"Почта РФ",
text:`15 печенек. Съел три и вырубился. Ждал 8 дней, коробка мятая.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Z-Up Auto, ТГК-29 | x3 шт",
city:"Минск",
district:"Партизанский",
delivery:"СДЭК",
text:`Z-Up авто 3 семки. ТГК 29. Приехали целые.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Lemon Cherry Cookies, ТГК-28.5 | x2 шт",
city:"Минск",
district:"Октябрьский",
delivery:"DPD",
text:`Lemon Cherry Cookies 2 семки. DPD за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Polar Gelato, ТГК-30 | x1 шт",
city:"Минск",
district:"Ленинский",
delivery:"Boxberry",
text:`Polar Gelato одна семка. Шербинскис топ.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Кратом | 250 гр",
city:"Минск",
district:"Заводской",
delivery:"ABACE",
text:`250гр кратома. Расслабило. ABACE за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Кратом | 500 гр",
city:"Минск",
district:"Московский",
delivery:"EMSPost",
text:`500гр кратома. От стресса помогает. EMSPost за 3 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Original Z | 30 мл",
city:"Минск",
district:"Малиновка",
delivery:"Почта РФ",
text:`Original Z улетный. Ждал 9 дней, упаковка порвана но товар цел.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Jungle Monkey | 3 мл",
city:"Минск",
district:"Уручье",
delivery:"СДЭК",
text:`Jungle Monkey весёлый. Ржал с кота. СДЭК за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Грибы McKENNAII #2 | 5 г",
city:"Минск",
district:"Сухарево",
delivery:"DPD",
text:`Маккена 5г — путешествие. DPD за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Fresh Mint | 30 мл",
city:"Минск",
district:"Чижовка",
delivery:"Boxberry",
text:`Мятка бодрит. Boxberry за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Euforic | 3 мл x2 шт",
city:"Минск",
district:"Серебрянка",
delivery:"ABACE",
text:`Эйфорик, два шота. Приехало за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"БРАУНИ С ТГК | 4 шт",
city:"Минск",
district:"Каменная Горка",
delivery:"EMSPost",
text:`4 брауни. В невесомости. EMSPost за 3 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Dos-Vi-Dos, ТГК-30 | x5 шт",
city:"Минск",
district:"Лошица",
delivery:"Почта РФ",
text:`5 семок Дос-Ви-Дос. Ждал 9 дней, коробка мятая но семена целые.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Кратом | 1000 гр",
city:"Минск",
district:"Ангарская",
delivery:"СДЭК",
text:`Кг кратома. СДЭК за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Dosi Kush | 30 мл",
city:"Минск",
district:"Степянка",
delivery:"DPD",
text:`Дози куш индика. Вырубился. DPD за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Big Bad Bear | 3 мл x3 шт",
city:"Минск",
district:"Масюковщина",
delivery:"Boxberry",
text:`Медведь злой, три штуки. ТГК 90%. Boxberry за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Грибы NIAGARA | 2 г",
city:"Минск",
district:"Зеленый Луг",
delivery:"ABACE",
text:`Ниагара 2г. Краски яркие. ABACE за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Permanent Marker | 30 мл",
city:"Минск",
district:"Юго-Запад",
delivery:"EMSPost",
text:`Permanent Marker, улетел. EMSPost за 3 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Kiwi Guava Kush | 3 мл",
city:"Минск",
district:"Дражня",
delivery:"Почта РФ",
text:`Киви-гуава сочный. Ждал 8 дней, упаковка мятая.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Мармеладки микс | 5 шт",
city:"Минск",
district:"Сокол",
delivery:"СДЭК",
text:`5 мармеладок. Съел две и приехал. СДЭК за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Guava Auto, ТГК-28 | x2 шт",
city:"Минск",
district:"Курасовщина",
delivery:"DPD",
text:`Guava Auto 2 семки. DPD за 4 дня.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"BY",
type:"⭐ Отзыв",
product:"Кратом | 250 гр",
city:"Минск",
district:"Шабаны",
delivery:"Boxberry",
text:`250гр кратома. Посылка задержалась на 2 дня.`,
rating:"⭐⭐⭐⭐",
author:"Аноним"
}
];
