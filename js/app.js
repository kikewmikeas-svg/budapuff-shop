console.log("app.js loaded");

if (window.Telegram.WebApp.initData) {
  fetch("/api/log-visit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ initData: window.Telegram.WebApp.initData })
  });
}

function closeShop() {
  window.Telegram.WebApp.close();
}

function renderReviews(){

appState.view="reviews";

saveState();
updateBackButton();

let html = `
<button id="backBtn" onclick="goBack()">← Назад</button>

<h2>⭐ Отзывы покупателей</h2>

<div class="country-select">

<div class="country-card" onclick="openCountryReviews('RU')">
🇷🇺 Отзывы по России
</div>

<div class="country-card" onclick="openCountryReviews('BY')">
🇧🇾 Отзывы по Беларуси
</div>

<div class="country-card" onclick="openCountryReviews('KZ')">
🇰🇿 Отзывы по Казахстану
</div>

</div>
`;

document.getElementById("main").innerHTML = html;

}

function openCountryReviews(country){

currentCountry = country;
reviewsLimit = 20;

let html = `
<button id="backBtn" onclick="renderReviews()">← Назад</button>

<h2>⭐ Отзывы (${reviewsData.length})</h2>

<div class="reviews-filter">

<button onclick="setRatingFilter('ALL')">Все</button>
<button onclick="setRatingFilter('⭐⭐⭐⭐⭐')">⭐⭐⭐⭐⭐</button>
<button onclick="setRatingFilter('⭐⭐⭐⭐')">⭐⭐⭐⭐</button>
<button onclick="setRatingFilter('⭐⭐⭐')">⭐⭐⭐</button>

</div>

<div id="reviewsList"></div>
`;

document.getElementById("main").innerHTML = html;

loadReviews(country);

}

let reviewsLimit = 20;
let currentCountry = "ALL";
let currentRatingFilter = "ALL";

function loadReviews(country){

currentCountry = country;

let list = [...reviewsData];

for(let i = list.length - 1; i > 0; i--){
const j = Math.floor(Math.random() * (i + 1));
[list[i], list[j]] = [list[j], list[i]];
}

if(country !== "ALL"){
list = list.filter(r => r.country === country);
}
  if(currentRatingFilter !== "ALL"){
list = list.filter(r => r.rating === currentRatingFilter);
}

const container = document.getElementById("reviewsList");

container.innerHTML = "";

list.slice(0,reviewsLimit).forEach(r=>{

container.innerHTML += `
<div class="review-card">

<div><b>${r.type}</b></div>

<div>📦 Товар: ${r.product}</div>
<div>🏙 Город: ${r.city}</div>
<div>📍 Район: ${r.district}</div>
${r.delivery ? `<div>🚚 Доставка: ${r.delivery}</div>` : ""}

<p style="margin-top:8px;">
💬 ${r.text}
</p>

<div>${r.rating}</div>

<div style="opacity:0.7;font-size:13px;">
👤 ${r.author}
</div>

</div>
`;

});

container.innerHTML += `
<button class="load-more" onclick="moreReviews()">Загрузить ещё</button>
`;

}

function moreReviews(){

reviewsLimit += 20;

loadReviews(currentCountry);

}
function setRatingFilter(rating){

currentRatingFilter = rating;
reviewsLimit = 20;

loadReviews(currentCountry);

}
function showLiveReview(){

const randomReview = reviewsData[Math.floor(Math.random() * reviewsData.length)];

const popup = document.createElement("div");
popup.className = "live-review";

popup.innerHTML = `
⭐ Новый отзыв
<br>
${randomReview.city}: ${randomReview.rating}
`;

document.body.appendChild(popup);

setTimeout(()=>{
popup.remove();
},4000);

}
setInterval(()=>{

if(Math.random() < 0.6){
showLiveReview();
}

},25000);

function showViewers(){

const viewers = Math.floor(Math.random()*18)+5;

const block = document.getElementById("viewers");

if(block){
block.innerText = `👀 Сейчас смотрят: ${viewers}`;
}

}

setInterval(showViewers,5000);

function showPurchase(){

const cities = ["Минск","Москва","Алматы","Гомель","Брест","Астана","Караганда","Гродно"];

const products = [

"Жидкость с ТГК – Maui Wowie",
"Жидкость с ТГК – OG Kush",
"Вейп с ТГК – Jungle Monkey",
"Вейп с ТГК – Dabbalicious 96%",
"Гашиш ICE-O-LATOR Papaya",
"Грибы NIAGARA",
"Мармеладки с ТГК",
"БРАУНИ С ТГК",
"Семена Lemon Cherry Cookies",
"Чай Кратом 250г"

];

const city = cities[Math.floor(Math.random()*cities.length)];
const product = products[Math.floor(Math.random()*products.length)];
const qty = Math.floor(Math.random()*3)+1;

const popup = document.createElement("div");

popup.className = "purchase-popup";

popup.innerHTML = `
🛒 Новая покупка

${product} • ${qty} шт

${city} • ${Math.floor(Math.random()*7)+1} мин назад
`;

document.body.appendChild(popup);

setTimeout(()=>{
popup.remove();
},4000);

}

function startPurchaseFeed(){

  const delay = Math.floor(Math.random()*60000)+60000; // 60–120 сек

  setTimeout(()=>{
      showPurchase();
      startPurchaseFeed();
  },delay);

}

startPurchaseFeed();

