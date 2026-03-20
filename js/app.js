console.log("app.js loaded");

function openOldShop(){
  console.log("Открываем старый магазин");
  if(typeof renderCategories === "function") renderCategories();
}

if (window.Telegram?.WebApp?.initData) {
  fetch("/api/log-visit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ initData: window.Telegram.WebApp.initData })
  });
}

function closeShop() {
  window.Telegram.WebApp.close();
}

// ===== ОТЗЫВЫ =====

let reviewsLimit = 10;
let currentCountry = "ALL";
let currentRatingFilter = "ALL";

function renderReviews(){

  appState.view = "reviews";
  saveState();
  updateBackButton();

  const total = reviewsData.length;
  const ruCount = reviewsData.filter(r => r.country === "RU").length;
  const byCount = reviewsData.filter(r => r.country === "BY").length;
  const kzCount = reviewsData.filter(r => r.country === "KZ").length;

  document.getElementById("main").innerHTML = `
    <div class="nav-scroll">
      <div class="nav-btn" onclick="renderCategories()">Каталог</div>
      <div class="nav-btn" onclick="enterNewShop()">Новый магазин</div>
      <div class="nav-btn" onclick="renderProfile()">Профиль</div>
      <div class="nav-btn active">Отзывы</div>
      <div class="nav-btn" onclick="renderHowToOrder()">Как оформить</div>
      <div class="nav-btn" onclick="renderDelivery()">Доставка</div>
      <div class="nav-btn" onclick="renderPayment()">Оплата</div>
    </div>

    <div class="reviews-header">
      <div class="reviews-title">Отзывы</div>
      <div class="reviews-total">${total} ОТЗЫВОВ</div>
    </div>

    <div class="country-grid">
      <div class="country-btn" onclick="openCountryReviews('RU')">
        <span class="country-flag">🇷🇺</span>
        <div class="country-name">Россия</div>
        <div class="country-count">${ruCount} отз.</div>
      </div>
      <div class="country-btn" onclick="openCountryReviews('BY')">
        <span class="country-flag">🇧🇾</span>
        <div class="country-name">Беларусь</div>
        <div class="country-count">${byCount} отз.</div>
      </div>
      <div class="country-btn" onclick="openCountryReviews('KZ')">
        <span class="country-flag">🇰🇿</span>
        <div class="country-name">Казахстан</div>
        <div class="country-count">${kzCount} отз.</div>
      </div>
    </div>

    <div class="rev-divider"></div>

    <div class="rating-filter">
      <div class="rf-btn active" onclick="setRatingFilterAll()">Все</div>
      <div class="rf-btn" onclick="setRatingFilter('⭐⭐⭐⭐⭐')">⭐⭐⭐⭐⭐</div>
      <div class="rf-btn" onclick="setRatingFilter('⭐⭐⭐⭐')">⭐⭐⭐⭐</div>
      <div class="rf-btn" onclick="setRatingFilter('⭐⭐⭐')">⭐⭐⭐</div>
    </div>

    <div id="reviewsList"></div>
  `;

  window.scrollTo(0, 0);
  currentCountry = "ALL";
  currentRatingFilter = "ALL";
  reviewsLimit = 10;
  loadReviews("ALL");
}

function openCountryReviews(country){
  currentCountry = country;
  currentRatingFilter = "ALL";
  reviewsLimit = 10;

  const countryNames = { RU: "🇷🇺 Россия", BY: "🇧🇾 Беларусь", KZ: "🇰🇿 Казахстан" };

  document.getElementById("main").innerHTML = `
    <div class="nav-scroll">
      <div class="nav-btn" onclick="renderCategories()">Каталог</div>
      <div class="nav-btn" onclick="enterNewShop()">Новый магазин</div>
      <div class="nav-btn" onclick="renderProfile()">Профиль</div>
      <div class="nav-btn active">Отзывы</div>
      <div class="nav-btn" onclick="renderHowToOrder()">Как оформить</div>
      <div class="nav-btn" onclick="renderDelivery()">Доставка</div>
      <div class="nav-btn" onclick="renderPayment()">Оплата</div>
    </div>

    <div class="rev-screen-header">
      <div class="rev-back-btn" onclick="renderReviews()">‹</div>
      <div class="reviews-title">${countryNames[country]}</div>
    </div>

    <div class="rating-filter">
      <div class="rf-btn active" onclick="setRatingFilterAll()">Все</div>
      <div class="rf-btn" onclick="setRatingFilter('⭐⭐⭐⭐⭐')">⭐⭐⭐⭐⭐</div>
      <div class="rf-btn" onclick="setRatingFilter('⭐⭐⭐⭐')">⭐⭐⭐⭐</div>
      <div class="rf-btn" onclick="setRatingFilter('⭐⭐⭐')">⭐⭐⭐</div>
    </div>

    <div id="reviewsList"></div>
  `;

  window.scrollTo(0, 0);
  loadReviews(country);
  animatePageIn();
}

function loadReviews(country){
  currentCountry = country;

  let list = [...reviewsData];

  for(let i = list.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }

  if(country !== "ALL") list = list.filter(r => r.country === country);
  if(currentRatingFilter !== "ALL") list = list.filter(r => r.rating === currentRatingFilter);

  const container = document.getElementById("reviewsList");
  if(!container) return;

  container.innerHTML = "";

  list.slice(0, reviewsLimit).forEach(r => {
    container.innerHTML += `
      <div class="rev-card">
        <div class="rev-top">
          <div class="rev-product">${r.product}</div>
          <div class="rev-stars">${r.rating}</div>
        </div>
        <div class="rev-text">${r.text}</div>
        <div class="rev-footer">
          <div class="rev-meta">
            <span class="rev-city">${r.city}</span>
            ${r.district ? `<span>${r.district}</span>` : ""}
          </div>
          <div class="rev-meta">👤 ${r.author}</div>
        </div>
      </div>
    `;
  });

  container.innerHTML += `
    <button class="load-more-btn" onclick="moreReviews()">ЗАГРУЗИТЬ ЕЩЁ</button>
  `;
}

function moreReviews(){
  reviewsLimit += 10;
  loadReviews(currentCountry);
}

function setRatingFilter(rating){
  currentRatingFilter = rating;
  reviewsLimit = 10;
  document.querySelectorAll(".rf-btn").forEach(b => b.classList.remove("active"));
  event.target.classList.add("active");
  loadReviews(currentCountry);
}

function setRatingFilterAll(){
  currentRatingFilter = "ALL";
  reviewsLimit = 20;
  document.querySelectorAll(".rf-btn").forEach(b => b.classList.remove("active"));
  event.target.classList.add("active");
  loadReviews(currentCountry);
}





