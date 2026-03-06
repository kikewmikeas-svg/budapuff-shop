const reviewsData = [
{
country:"RU",
type:"⭐ Отзыв",
product:"Cap Junky | ТГК-33 - 34 | 1.0г",
city:"Москва",
district:"ЮАО",
text:`Cap Junky просто ракета, ТГК под 34%, улетел часа на 3. Вес ровный, всё чётко. Куру спасибо.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Permanent Marker | ТГК-34 | 2.0г",
city:"Санкт-Петербург",
district:"Приморский",
text:`Permanent Marker — название говорит само за себя, вкус химозный но кайфовый. ТГК 34%, знатно убрало. Два грамма взял, теперь с запасом.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Гашиш Ice-O-Lator | Lemon Haze | 0.5г",
city:"Екатеринбург",
district:"Чкаловский",
text:`Лимонный айс, полграмма на пробу. Качественный гашиш, пузырьки красивые. Торкнуло знатно.`,
rating:"⭐⭐⭐⭐⭐",
author:"Аноним"
},

{
country:"RU",
type:"⭐ Отзыв",
product:"Hash Mustang import VHQ+ | 2.0г",
city:"Новосибирск",
district:"Ленинский",
text:`Mustang VHQ+ — мягкий, пластичный, запах насыщенный. Два грамма взял, растащил на вечер. Качество огонь, всем советую.`,
rating:"⭐⭐⭐⭐⭐",
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
