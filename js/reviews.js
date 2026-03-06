function random(arr){
return arr[Math.floor(Math.random()*arr.length)];
}

function randomQty(){
const qty=[1,1,2,2,2,3,3,4,5];
return "x"+random(qty);
}

const countries = {

RU:{
name:"Россия",
cities:{
"Москва":["ЦАО","САО","ЮАО","ЮЗАО","ЗАО","ВАО"],
"Санкт-Петербург":["Невский","Приморский","Калининский"],
"Казань":["Вахитовский","Советский"],
"Краснодар":["Центральный","Юбилейный"],
"Омск":["Кировский","Советский"],
"Челябинск":["Курчатовский","Советский"],
"Самара":["Ленинский","Кировский"],
"Тюмень":["Восточный","Ленинский"],
"Пермь":["Свердловский","Индустриальный"]
}
},

RB:{
name:"Беларусь",
cities:{
"Минск":["Центральный","Фрунзенский"],
"Гомель":["Центральный","Железнодорожный"],
"Брест":["Московский","Ленинский"]
}
},

KZ:{
name:"Казахстан",
cities:{
"Алматы":["Алмалинский","Бостандыкский"],
"Астана":["Алматинский","Есильский"],
"Шымкент":["Абайский","Енбекшинский"]
}
}

};

const products=[
"Товар 1",
"Товар 2",
"Товар 3"
];

const texts=[
"Все четко получил, без проблем.",
"Нашел быстро, все на месте.",
"Забрал спокойно, упаковка аккуратная.",
"Немного пришлось поискать, но все получилось.",
"Все ровно, спасибо."
];

function generateReview(){

const countryKey=random(Object.keys(countries));
const country=countries[countryKey];

const city=random(Object.keys(country.cities));
const district=random(country.cities[city]);

return{

country:countryKey,
product:random(products),
qty:randomQty(),
city:city,
district:district,
delivery:random(["Почта (ПВЗ)","Постамат","СДЭК ПВЗ"]),
text:random(texts),
rating:Math.random()>0.2?"⭐⭐⭐⭐⭐":"⭐⭐⭐⭐",
author:"Анонимный покупатель"

};

}

function generateReviews(count=800){

const list=[];

for(let i=0;i<count;i++){
list.push(generateReview());
}

return list;

}

const reviews=generateReviews(800);
