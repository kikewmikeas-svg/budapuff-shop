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

let html=`
<button id="backBtn" onclick="goBack()">← Назад</button>

<h2>⭐ Отзывы покупателей</h2>

<div class="reviews-filter">
<button onclick="filterReviews('ALL')">Все</button>
<button onclick="filterReviews('RU')">🇷🇺 Россия</button>
<button onclick="filterReviews('RB')">🇧🇾 Беларусь</button>
<button onclick="filterReviews('KZ')">🇰🇿 Казахстан</button>
</div>

<div id="reviewsList"></div>
`;

document.getElementById("main").innerHTML=html;

loadReviews("ALL");

}
let reviewsLimit = 20;
let currentCountry = "ALL";

function loadReviews(country){

currentCountry = country;

let list = reviewsData;

if(country !== "ALL"){
list = reviewsData.filter(r => r.country === country);
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
<div>🚚 Доставка: ${r.delivery}</div>

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
