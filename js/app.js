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

<h2>⭐ Отзывы</h2>

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
