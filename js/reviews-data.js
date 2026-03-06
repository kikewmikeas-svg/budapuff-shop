const reviewsData = [
{
country:"RU",
type:"🍄 Грибы",
product:"Golden Teacher 5г",
city:"Омск",
district:"Советский",
delivery:"Почта (ПВЗ)",
text:"Квест интересный, но все успешно.",
rating:"⭐⭐⭐⭐⭐",
author:"Постоянный клиент"
},

{
country:"RU",
type:"🌿 Чай",
product:"Раслабляющий чай Кратом 250г",
city:"Москва",
district:"ЮАО",
delivery:"Постамат",
text:"Все четко забрал, чай понравился.",
rating:"⭐⭐⭐⭐⭐",
author:"Анонимный покупатель"
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
country:"RB",
type:"🧃 Жидкость",
product:"Maui Wowie | 30 мл",
city:"Минск",
district:"Центральный",
delivery:"СДЭК ПВЗ",
text:"Жидкость отличная, вкус зашел.",
rating:"⭐⭐⭐⭐⭐",
author:"Анонимный покупатель"
}
];
