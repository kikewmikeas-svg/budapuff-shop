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

<div class="reviews-list">
`;

reviews.slice(0,50).forEach(r=>{

html+=`
<div class="review-card">

<div><b>📦 Товар:</b> ${r.product} ${r.qty}</div>
<div><b>🏙 Город:</b> ${r.city}</div>
<div><b>📍 Район:</b> ${r.district}</div>
<div><b>🚚 Доставка:</b> ${r.delivery}</div>

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

html+=`</div>`;

document.getElementById("main").innerHTML=html;

window.scrollTo(0,0);

}
