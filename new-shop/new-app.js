/*
========================
НОВЫЙ МАГАЗИН
========================
*/


let confirmCallback = null;

let tgUser = {
id: "unknown",
username: "unknown",
name: "Пользователь"
};

if (window.Telegram && Telegram.WebApp && Telegram.WebApp.initDataUnsafe && Telegram.WebApp.initDataUnsafe.user) {

const user = Telegram.WebApp.initDataUnsafe.user;

tgUser.id = user.id;
tgUser.username = user.username ? "@" + user.username : "нет username";
tgUser.name = user.first_name || "Пользователь";

}

function enterNewShop(){

  const savedCity = localStorage.getItem("newShopCity");
if(!savedCity){
  showCitySelect();
  return;
}

 document.getElementById("cartBar").style.display = "none";
 const topBar = document.getElementById("topBar");
if (topBar) topBar.style.display = "none";
 document.getElementById("viewers").style.display = "none";
 document.body.style.padding = "0";
 document.body.style.background = "#0d0d0d";

 const hideCart = () => {
  const cb = document.getElementById("cartBar");
  if(cb) cb.style.display = "none";
};
hideCart();
setTimeout(hideCart, 100);
setTimeout(hideCart, 500);

window._hideCartInterval = setInterval(() => {
  const cb = document.getElementById("cartBar");
  if(cb) cb.style.display = "none";
}, 200);

const cartBarEl = document.getElementById("cartBar");
if(cartBarEl){
  cartBarEl.style.cssText = "display:none!important;visibility:hidden!important;z-index:-1!important;";
}

const city = localStorage.getItem("newShopCity") || "Город";
  const balance = 0;

  document.getElementById("main").innerHTML = `
  <div class="new-shop">

    <!-- ШАПКА -->
    <div class="ns-header">
  <div class="ns-logo">BUD<span>DA</span></div>
  <div class="ns-city">
    <span class="ns-city-dot"></span>
    ${city}
  </div>
  <div class="ns-balance">${balance} ₽</div>
</div>

    <!-- БЕГУЩАЯ СТРОКА -->
    <div class="ns-ticker">
  <div class="ns-ticker-inner">
    <span class="ns-ticker-item"><em>✦</em> Работаем 24/7 без выходных</span>
    <span class="ns-ticker-item"><em>✦</em> Более 1000 довольных клиентов</span>
    <span class="ns-ticker-item"><em>✦</em> Замена при проблемах с кладом</span>
    <span class="ns-ticker-item"><em>✦</em> Свежее пополнение каждый день</span>
    <span class="ns-ticker-item"><em>✦</em> Работаем 24/7 без выходных</span>
    <span class="ns-ticker-item"><em>✦</em> Более 1000 довольных клиентов</span>
    <span class="ns-ticker-item"><em>✦</em> Замена при проблемах с кладом</span>
    <span class="ns-ticker-item"><em>✦</em> Свежее пополнение каждый день</span>
  </div>
</div>

    <!-- КОНТЕНТ СТРАНИЦЫ -->
    <div id="shopPageContent" class="ns-content">
    </div>

    <!-- НИЖНЯЯ НАВИГАЦИЯ -->
    <div class="ns-navbar">
  <div class="ns-nav-item active" onclick="openTab('catalog')" id="nav-catalog">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
    <div class="ns-nav-label">Каталог</div>
  </div>
  <div class="ns-nav-item" onclick="openTab('preorder')" id="nav-preorder">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
    <div class="ns-nav-label">Предзаказ</div>
  </div>
  <div class="ns-nav-item" onclick="openTab('reviews')" id="nav-reviews">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
    <div class="ns-nav-label">Отзывы</div>
  </div>
  <div class="ns-nav-item ns-nav-old" onclick="exitOldShop()">
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M11 17l-5-5 5-5M18 17l-5-5 5-5"/></svg>
  <div class="ns-nav-label">Старый</div>
</div>
  <div class="ns-nav-item" onclick="openTab('profile')" id="nav-profile">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    <div class="ns-nav-label">Профиль</div>
  </div>
</div>

    <!-- CONFIRM MODAL -->
    <div id="confirmModal" class="confirm-modal">
      <div class="confirm-box">
        <div class="confirm-box-line"></div>
        <div class="confirm-box-body">
          <div class="confirm-tag">● ПОДТВЕРЖДЕНИЕ</div>
          <div class="confirm-text" id="confirmText">Вы уверены?</div>
        </div>
        <div class="confirm-box-footer">
          <div class="confirm-buttons">
            <div class="confirm-btn confirm-yes" onclick="confirmAction(true)">Да, подтвердить</div>
            <div class="confirm-btn confirm-no" onclick="confirmAction(false)">ОТМЕНА</div>
          </div>
        </div>
      </div>
    </div>

  </div>
  `;

  openTab('catalog');
}


/* =========================
   ВЫХОД
========================= */

function leaveNewShop(){

const cartBarEl2 = document.getElementById("cartBar");
if (cartBarEl2) cartBarEl2.style.display = "";
const topBarEl = document.getElementById("topBar");
if (topBarEl) topBarEl.style.display = "";
const viewersEl = document.getElementById("viewers");
if (viewersEl) viewersEl.style.display = "";
document.body.style.padding = "15px";
document.body.style.background = "#1c1c1c";

if(window._hideCartInterval){
  clearInterval(window._hideCartInterval);
}

console.log("Возврат в старый магазин");

if(typeof openOldShop === "function"){
openOldShop();
return;
}

location.reload();

}

function confirmExitShop(){

openConfirm("Вы точно хотите покинуть новый магазин?", () => {

leaveNewShop();

});

}

function changeCity(){

openConfirm("Вы точно хотите сменить город?", () => {

localStorage.removeItem("newShopCity");
showCitySelect();

});

}

function toggleCityMenu(event){

event.stopPropagation();

const menu = document.getElementById("cityMenu");

if(menu.style.display === "block"){
menu.style.display = "none";
}else{
menu.style.display = "block";
}
}

function closeCityMenu(){
const menu = document.getElementById("cityMenu");
if(menu){
menu.style.display = "none";
}
}


document.addEventListener("click", function(e){

const menu = document.getElementById("cityMenu");

if(!menu) return;

if(e.target.closest("#cityMenu")) return;

menu.style.display = "none";

});

function openShopMenu(btn){

const menu = document.getElementById("shopMenu");

if(menu.style.display === "block"){
menu.style.display = "none";
btn.classList.remove("active");
return;
}

menu.style.display = "block";
btn.classList.add("active");

}

function closeShopMenu(){

document.getElementById("shopMenu").style.display = "none";

}

document.addEventListener("click", function(e){

const modal = document.getElementById("confirmModal");
if(!modal) return;

const box = document.querySelector(".confirm-box");
if(!box) return;

/* если клик внутри окна — ничего не делаем */
if(e.target.closest(".confirm-box")) return;

/* если клик по затемнённому фону */
if(e.target.id === "confirmModal"){
modal.style.display = "none";
}

});

function openPage(page){

const modal = document.getElementById("menuModal");
if(!modal) return;

let html = "";

if(page === "orders"){
html = `
<div class="menu-window">
<div class="menu-window-header">
<div class="menu-back" onclick="closeMenuPage()">←</div>
<h2>Мои заказы</h2>
</div>
<p>Здесь будут отображаться ваши заказы.</p>
</div>
`;
}

else if(page === "preorder"){
html = `
<div class="menu-window">
<div class="menu-window-header">
<div class="menu-back" onclick="closeMenuPage()">←</div>
<h2>Предзаказ</h2>
</div>
<p>Оставьте заявку на товар которого нет в наличии.</p>
</div>
`;
}

else if(page === "reviews"){
html = `
<div class="menu-window">
<div class="menu-window-header">
<div class="menu-back" onclick="closeMenuPage()">←</div>
<h2>Отзывы</h2>
</div>
<p>Отзывы покупателей появятся здесь.</p>
</div>
`;
}

else if(page === "faq"){
html = `
<div class="menu-window">
<div class="menu-window-header">
<div class="menu-back" onclick="closeMenuPage()">←</div>
<h2>FAQ</h2>
</div>
<p>Ответы на частые вопросы.</p>
</div>
`;
}

modal.innerHTML = html;

}


function openMenu(){

const menu = document.getElementById("shopMenu");
const page = document.getElementById("shopPage");

if(menu){
menu.style.display = "block";
}

if(page){
page.style.display = "none";
}

}

function closeMenuPage(){

const modal = document.getElementById("menuModal");

if(modal){
modal.innerHTML = "";
}

}

function openTab(tab){

   // подсвечиваем активный пункт меню
  document.querySelectorAll(".ns-nav-item").forEach(el => el.classList.remove("active"));
  const activeNav = document.getElementById("nav-" + tab);
  if(activeNav) activeNav.classList.add("active");

const container = document.getElementById("shopPageContent");

if(tab === "catalog"){

  const city = localStorage.getItem("newShopCity") || "";
  const cityType = getCityType(city);
  const isSmall = cityType === "small";
  const isMedium = cityType === "medium";

  const allCategories = [
  {
    id: "natural", name: "Марихуана",
    bg: "#0c0c00", border: "#e8ff4a20", glow: "rgba(232,255,74,0.12)",
    badge: "ЕСТЬ", badgeColor: "#e8ff4a", badgeBg: "#e8ff4a15", badgeBorder: "#e8ff4a30",
    arrowColor: "#e8ff4a", minPrice: "от 150 ₽",
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e8ff4a" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  colorClass: "cy"
  },
  {
    id: "bio", name: "Cтимуляторы",
    bg: "#001a0a", border: "#2aff7220", glow: "rgba(42,255,114,0.10)",
    badge: "ХИТ", badgeColor: "#2aff72", badgeBg: "#2aff7215", badgeBorder: "#2aff7230",
    arrowColor: "#2aff72", minPrice: "от 350 ₽",
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2aff72" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
  colorClass: "cg"
  },
  {
    id: "euphoria", name: "Эйфоретики",
    bg: "#0d0015", border: "#9b4aff20", glow: "rgba(155,74,255,0.10)",
    badge: "ТОП", badgeColor: "#9b4aff", badgeBg: "#9b4aff15", badgeBorder: "#9b4aff30",
    arrowColor: "#9b4aff", minPrice: "от 290 ₽",
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9b4aff" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
  colorClass: "cp"
  },
  {
    id: "pharmacy", name: "Марки / Экстази",
    bg: "#12000a", border: "#ff4a9b20", glow: "rgba(255,74,155,0.10)",
    badge: "ЛУЧШЕЕ", badgeColor: "#ff4a9b", badgeBg: "#ff4a9b15", badgeBorder: "#ff4a9b30",
    arrowColor: "#ff4a9b", minPrice: "от 120 ₽",
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff4a9b" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  colorClass: "ck"
  },
];

  let categories;
  if(isSmall){
    categories = allCategories.filter(c => ["natural","bio","euphoria"].includes(c.id));
  } else if(isMedium){
    categories = allCategories.filter(c => ["natural","bio","euphoria","pharmacy"].includes(c.id));
  } else {
    categories = allCategories;
  }

  container.innerHTML = `
<div class="page">

  <div class="ns-hero">
    <div class="ns-hero-glow"></div>
    <div class="ns-hero-badge"><span class="ns-online-dot"></span><span class="ns-hero-badge-txt">Магазин работает</span></div>
    <div class="ns-hero-title">Добро<br>пожало<span>вать</span></div>
    <div class="ns-hero-sub">Выберите категорию товаров</div>
    <div class="ns-stats-row">
      <div class="ns-stat"><div class="ns-stat-val">1k<span>+</span></div><div class="ns-stat-lbl">клиентов</div></div>
      <div class="ns-stat"><div class="ns-stat-val">24<span>/7</span></div><div class="ns-stat-lbl">онлайн</div></div>
      <div class="ns-stat"><div class="ns-stat-val">4.9<span>★</span></div><div class="ns-stat-lbl">рейтинг</div></div>
    </div>
  </div>

  <div class="ns-fire-banner">
    <div class="ns-fire-left">
      <div class="ns-fire-tag">🔥 ГОРЯЩЕЕ ПРЕДЛОЖЕНИЕ</div>
      <div class="ns-fire-title">−15% на первый<br>заказ сегодня</div>
      <div class="ns-fire-sub">Только для новых клиентов</div>
    </div>
    <div class="ns-fire-timer">
      <div class="ns-fire-time" id="ns-fire-time">00:00:00</div>
      <div class="ns-fire-timelbl">ОСТАЛОСЬ</div>
    </div>
  </div>

  <div class="ns-section-header">
    <span class="ns-section-label-text">Каталог</span>
    <span class="ns-section-label-count">${categories.length} категории</span>
  </div>

  <div class="ns-cat-grid">
  ${categories.map(cat => `
  <div class="ns-cat-card${cat.wide ? " ns-cat-wide" : ""}${cat.colorClass ? " " + cat.colorClass : ""}"
       onclick="openNewCategory('${cat.id}')">
    <div class="ns-cat-blob"></div>
    <div class="ns-cat-name">${cat.name}</div>
    <div class="ns-cat-footer">
      <span class="ns-cat-badge">${cat.badge}</span>
      <div class="ns-cat-arrow">
        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="${cat.arrowColor}" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </div>
    </div>
  </div>
  `).join("")}
  </div>
  </div>

  <!-- ЖИВЫЕ СЧЁТЧИКИ -->
  <div class="ns-live-counters">
    <div class="ns-lcnt">
      <div class="ns-lcnt-top"><span class="ns-lcnt-dot green"></span>ОНЛАЙН</div>
      <div class="ns-lcnt-val" id="ns-cnt-online">61</div>
      <div class="ns-lcnt-lbl">В СЕТИ</div>
    </div>
    <div class="ns-lcnt-divider"></div>
    <div class="ns-lcnt">
      <div class="ns-lcnt-top"><span class="ns-lcnt-dot orange"></span>СЕГОДНЯ</div>
      <div class="ns-lcnt-val" id="ns-cnt-orders">143</div>
      <div class="ns-lcnt-lbl">ЗАКАЗОВ</div>
    </div>
    <div class="ns-lcnt-divider"></div>
    <div class="ns-lcnt">
      <div class="ns-lcnt-top" style="visibility:hidden">·</div>
      <div class="ns-lcnt-val">4.9<span class="ns-lcnt-star">★</span></div>
      <div class="ns-lcnt-lbl">РЕЙТИНГ</div>
    </div>
  </div>

  <!-- БЕГУЩАЯ СТРОКА -->
  <div class="ns-ticker">
    <div class="ns-ticker-track">
      <span class="ns-ti"><span class="ns-ti-dot"></span>Лучший маркет РФ</span>
      <span class="ns-ti-sep">·</span>
      <span class="ns-ti">Замена при проблемах <b>✓</b></span>
      <span class="ns-ti-sep">·</span>
      <span class="ns-ti"><b>24/7</b> без выходных</span>
      <span class="ns-ti-sep">·</span>
      <span class="ns-ti"><b>1000+</b> довольных клиентов</span>
      <span class="ns-ti-sep">·</span>
      <span class="ns-ti">Минимальный заказ <b>0.5г</b></span>
      <span class="ns-ti-sep">·</span>
      <span class="ns-ti"><span class="ns-ti-dot"></span>Еженедельное пополнение</span>
      <span class="ns-ti-sep">·</span>
      <span class="ns-ti">Замена при проблемах <b>✓</b></span>
      <span class="ns-ti-sep">·</span>
      <span class="ns-ti"><b>24/7</b> без выходных</span>
      <span class="ns-ti-sep">·</span>
      <span class="ns-ti"><b>1000+</b> довольных клиентов</span>
      <span class="ns-ti-sep">·</span>
      <span class="ns-ti">Минимальный заказ <b>0.5г</b></span>
    </div>
  </div>

  <!-- ОТЗЫВЫ -->
  <div class="ns-section-header">
    <span class="ns-section-label-text">Отзывы</span>
    <span class="ns-section-label-count">Новые отзывы</span>
  </div>
  <div class="ns-reviews-block" id="ns-reviews-block"></div>

  <!-- ГАРАНТИИ -->
  <div class="ns-section-header">
    <span class="ns-section-label-text">Гарантии</span>
  </div>
  <div class="ns-guarantees">
    <div class="ns-gar">
      <div class="ns-gar-icon green">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2aff72" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <div class="ns-gar-title">Замена при проблемах</div>
      <div class="ns-gar-sub">Клад не найден — заменим без вопросов</div>
    </div>
    <div class="ns-gar">
      <div class="ns-gar-icon orange">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff6b00" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      </div>
      <div class="ns-gar-title">Быстрая выдача</div>
      <div class="ns-gar-sub">Координаты после подтверждения оплаты</div>
    </div>
    <div class="ns-gar">
      <div class="ns-gar-icon blue">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4a9bff" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
      </div>
      <div class="ns-gar-title">Полная анонимность</div>
      <div class="ns-gar-sub">Никаких личных данных, ваше подключение к сайту защищено</div>
    </div>
    <div class="ns-gar">
      <div class="ns-gar-icon yellow">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e8ff4a" stroke-width="2.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
      </div>
      <div class="ns-gar-title">Свежее качество</div>
      <div class="ns-gar-sub">Еженедельное пополнение, только свежак</div>
    </div>
  </div>

  <div class="ns-job-banner" onclick="Telegram.WebApp.openTelegramLink('https://t.me/budapuff_support')">
    <div class="ns-job-topline"></div>
    <div class="ns-job-glow"></div>
    <div class="ns-job-inner">
      <div class="ns-job-head" style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:14px">
        <div>
          <div class="ns-job-eyebrow"><span class="ns-job-blink"></span>Открыт набор</div>
          <div class="ns-job-title">Работа<br><span>у нас</span></div>
        </div>
        <div class="ns-job-icon-box" style="flex-shrink:0;margin-left:12px">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e8ff4a" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>
        </div>
      </div>
      <div class="ns-job-perks">
        <div class="ns-job-perk"><div class="ns-job-perk-dot"><svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 3.5-4" stroke="#e8ff4a" stroke-width="1.5" stroke-linecap="round"/></svg></div>Гибкий график — работай когда удобно</div>
        <div class="ns-job-perk"><div class="ns-job-perk-dot"><svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 3.5-4" stroke="#e8ff4a" stroke-width="1.5" stroke-linecap="round"/></svg></div>Полная анонимность — никаких личных данных</div>
        <div class="ns-job-perk"><div class="ns-job-perk-dot"><svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 3.5-4" stroke="#e8ff4a" stroke-width="1.5" stroke-linecap="round"/></svg></div>Ежедневные выплаты на крипту</div>
        <div class="ns-job-perk"><div class="ns-job-perk-dot"><svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 3.5-4" stroke="#e8ff4a" stroke-width="1.5" stroke-linecap="round"/></svg></div>Обучение с нуля, поддержка 24/7</div>
      </div>
      <div class="ns-job-bottom">
        <div>
          <div class="ns-salary-label">зарплата от</div>
          <div class="ns-salary-val">180 000 <span>₽</span></div>
          <div class="ns-salary-period">в месяц</div>
        </div>
        <button class="ns-job-btn" onclick="event.stopPropagation();Telegram.WebApp.openTelegramLink('https://t.me/budapuff_support')">Подробнее →</button>
      </div>
    </div>
  </div>

  <div class="ns-guarantee">
    <div class="ns-guarantee-glow"></div>
    <div class="ns-g-label"><span class="ns-online-dot"></span>Гарантия качества</div>
    <div class="ns-g-title">Только свежее<br><span>пополнение</span></div>
    <div class="ns-g-sub">Без старых остатков и компромиссов по качеству</div>
    <div class="ns-g-checks">
      <div class="ns-g-check"><div class="ns-g-check-box"><svg width="9" height="9" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 3.5-4" stroke="#e8ff4a" stroke-width="1.5" stroke-linecap="round"/></svg></div>Клады в касание — находишь сразу</div>
      <div class="ns-g-check"><div class="ns-g-check-box"><svg width="9" height="9" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 3.5-4" stroke="#e8ff4a" stroke-width="1.5" stroke-linecap="round"/></svg></div>Точные координаты и фото</div>
      <div class="ns-g-check"><div class="ns-g-check-box"><svg width="9" height="9" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 3.5-4" stroke="#e8ff4a" stroke-width="1.5" stroke-linecap="round"/></svg></div>Доступные цены — без накруток</div>
      <div class="ns-g-check"><div class="ns-g-check-box"><svg width="9" height="9" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 3.5-4" stroke="#e8ff4a" stroke-width="1.5" stroke-linecap="round"/></svg></div>Замена при проблемах с кладом</div>
    </div>
  </div>

  <div class="ns-payment-block">
    <div class="ns-p-label"><span class="ns-online-dot"></span>Способы оплаты</div>
    <div class="ns-p-title">Принимаем<br><span>любую оплату</span></div>
    <div class="ns-p-sub">Анонимно · быстро · без проблем</div>
    <div class="ns-npills">
      <div class="ns-npill ns-np-btc"><div class="ns-pico ns-pico-btc"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#f7931a" stroke-width="2.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div><span class="ns-pname">BTC</span><span class="ns-pzero">0%</span></div>
      <div class="ns-npill ns-np-usdt"><div class="ns-pico ns-pico-usdt"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#26a17b" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M8 10h8M12 6v12"/></svg></div><span class="ns-pname">USDT</span><span class="ns-pzero">0%</span></div>
      <div class="ns-npill ns-np-card"><div class="ns-pico ns-pico-card"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#4a9bff" stroke-width="2.5"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg></div><span class="ns-pname">Карта РФ</span></div>
      <div class="ns-npill ns-np-qr"><div class="ns-pico ns-pico-qr"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#9b4aff" stroke-width="2.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg></div><span class="ns-pname">QR СБП</span></div>
    </div>
    <div class="ns-p-note"><div class="ns-p-note-dot"></div>Крипто — мгновенно и анонимно, без комиссий</div>
  </div>

</div>
`;

  // Инициализация таймера горящего баннера (7 дней)
  if(tab === "catalog"){
    const BANNER_KEY = "ns_fire_banner_end";
    const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000;
    let endTime = parseInt(localStorage.getItem(BANNER_KEY) || "0");

    // Если нет сохранённого времени или цикл истёк — стартуем новый 7-дневный
    if(!endTime || endTime < Date.now()){
      endTime = Date.now() + SEVEN_DAYS;
      localStorage.setItem(BANNER_KEY, String(endTime));
    }

    if(window._fireBannerInterval) clearInterval(window._fireBannerInterval);
    window._fireBannerInterval = setInterval(function(){
      const el = document.getElementById("ns-fire-time");
      if(!el){ clearInterval(window._fireBannerInterval); return; }
      let diff = endTime - Date.now();
      if(diff <= 0){
        // Цикл завершён — сразу стартуем следующий 7-дневный
        endTime = Date.now() + SEVEN_DAYS;
        localStorage.setItem(BANNER_KEY, String(endTime));
        diff = SEVEN_DAYS;
      }
      const days  = Math.floor(diff / 86400000);
      const hours = Math.floor((diff % 86400000) / 3600000);
      const mins  = Math.floor((diff % 3600000) / 60000);
      const secs  = Math.floor((diff % 60000) / 1000);
      // Показываем дни если > 0, иначе просто чч:мм:сс
      if(days > 0){
        el.textContent = days + "д " + String(hours).padStart(2,"0") + ":" + String(mins).padStart(2,"0") + ":" + String(secs).padStart(2,"0");
      } else {
        el.textContent = String(hours).padStart(2,"0") + ":" + String(mins).padStart(2,"0") + ":" + String(secs).padStart(2,"0");
      }
    }, 1000);

    // === ЖИВЫЕ СЧЁТЧИКИ ===
    // Онлайн: плавает от 31 до 80
    if(window._onlineInterval) clearInterval(window._onlineInterval);
    window._onlineInterval = setInterval(function(){
      const el = document.getElementById("ns-cnt-online");
      if(!el){ clearInterval(window._onlineInterval); return; }
      const cur = parseInt(el.textContent);
      const delta = Math.random() > 0.5 ? 1 : -1;
      el.textContent = Math.max(31, Math.min(80, cur + delta));
    }, 7000);

    // Заказы: +1 каждые 50 минут (3 000 000 мс)
    const ORDERS_KEY = "ns_orders_data";
    let ordersData = JSON.parse(localStorage.getItem(ORDERS_KEY) || "null");
    const now = Date.now();
    const todayStart = new Date();
    todayStart.setHours(0,0,0,0);
    if(!ordersData || ordersData.date !== todayStart.getTime()){
      ordersData = { date: todayStart.getTime(), count: 130, lastTick: now };
      localStorage.setItem(ORDERS_KEY, JSON.stringify(ordersData));
    }
    // Догоняем пропущенные тики пока не было открыто
    const ticksPassed = Math.floor((now - ordersData.lastTick) / 3000000);
    if(ticksPassed > 0){
      ordersData.count += ticksPassed;
      ordersData.lastTick += ticksPassed * 3000000;
      localStorage.setItem(ORDERS_KEY, JSON.stringify(ordersData));
    }
    const ordEl = document.getElementById("ns-cnt-orders");
    if(ordEl) ordEl.textContent = ordersData.count;

    if(window._ordersInterval) clearInterval(window._ordersInterval);
    window._ordersInterval = setInterval(function(){
      const el = document.getElementById("ns-cnt-orders");
      if(!el){ clearInterval(window._ordersInterval); return; }
      ordersData.count += 1;
      ordersData.lastTick = Date.now();
      localStorage.setItem(ORDERS_KEY, JSON.stringify(ordersData));
      el.textContent = ordersData.count;
    }, 3000000); // 50 минут

    // === ОТЗЫВЫ — ротация каждые 50-60 минут ===
    const allReviews = [
      { name: "Алексей", letter: "А", text: "Клад нашёл с первого раза, качество топ 🔥 Беру уже третий раз подряд", time: "2 мин назад" },
      { name: "Серёга", letter: "С", text: "Оператор ответил за минуту, всё чётко без воды. Рекомендую магаз 👍", time: "18 мин назад" },
      { name: "Макс", letter: "М", text: "Всё как обещали — свежак, координаты точные. Однозначно лучший", time: "34 мин назад" },
      { name: "Дима", letter: "Д", text: "Брал несколько раз, всегда порядок. Замена работает без базара ✅", time: "51 мин назад" },
      { name: "Кирилл", letter: "К", text: "Качество отличное, оплата прошла быстро. Буду постоянным клиентом", time: "1 ч назад" },
      { name: "Роман", letter: "Р", text: "Первый раз брал — всё понравилось. Клад чёткий, фото есть 🙏", time: "1.5 ч назад" },
      { name: "Антон", letter: "А", text: "Магазин реально рабочий. Поддержка отвечает быстро, без игнора", time: "2 ч назад" },
      { name: "Игорь", letter: "И", text: "Беру уже полгода — стабильно. Качество не падает, цены норм", time: "3 ч назад" },
    ];

    function renderReviews(){
      const block = document.getElementById("ns-reviews-block");
      if(!block) return;
      const REVIEWS_KEY = "ns_reviews_index";
      let idx = parseInt(localStorage.getItem(REVIEWS_KEY) || "0") % (allReviews.length - 1);
      const r1 = allReviews[idx];
      const r2 = allReviews[idx + 1];
      block.innerHTML = [r1, r2].map(r => `
        <div class="ns-review">
          <div class="ns-rev-av">${r.letter}</div>
          <div class="ns-rev-body">
            <div class="ns-rev-head">
              <div class="ns-rev-name">${r.name}</div>
              <div class="ns-rev-stars">
                <div class="ns-rev-star"></div><div class="ns-rev-star"></div><div class="ns-rev-star"></div><div class="ns-rev-star"></div><div class="ns-rev-star"></div>
              </div>
              <div class="ns-rev-time">${r.time}</div>
            </div>
            <div class="ns-rev-text">${r.text}</div>
          </div>
        </div>
      `).join("");
    }
    renderReviews();

    // Обновление отзывов каждые 50-60 минут
    const REVIEWS_KEY = "ns_reviews_index";
    const REVIEWS_NEXT_KEY = "ns_reviews_next";
    let nextReviewTime = parseInt(localStorage.getItem(REVIEWS_NEXT_KEY) || "0");
    if(!nextReviewTime || nextReviewTime < Date.now()){
      const delay = (50 + Math.floor(Math.random() * 11)) * 60 * 1000;
      nextReviewTime = Date.now() + delay;
      localStorage.setItem(REVIEWS_NEXT_KEY, String(nextReviewTime));
    }
    if(window._reviewsTimeout) clearTimeout(window._reviewsTimeout);
    function scheduleNextReview(){
      const delay = Math.max(0, nextReviewTime - Date.now());
      window._reviewsTimeout = setTimeout(function(){
        let idx = parseInt(localStorage.getItem(REVIEWS_KEY) || "0");
        idx = (idx + 2) % (allReviews.length - 1);
        localStorage.setItem(REVIEWS_KEY, String(idx));
        const nextDelay = (50 + Math.floor(Math.random() * 11)) * 60 * 1000;
        nextReviewTime = Date.now() + nextDelay;
        localStorage.setItem(REVIEWS_NEXT_KEY, String(nextReviewTime));
        renderReviews();
        scheduleNextReview();
      }, delay);
    }
    scheduleNextReview();
  }
}

if(tab === "preorder"){

const city = localStorage.getItem("newShopCity") || "не указан";

container.innerHTML = `
<div class="page">

  <div class="ns-preorder-hero">
    <div class="ns-preorder-tag"><span class="ns-online-dot"></span> ПРЕДЗАКАЗ</div>
    <div class="ns-preorder-title">Нет нужного<br><span>товара или города?</span></div>
    <div class="ns-preorder-desc">Привезём специально для тебя</div>
  </div>

  <div class="ns-preorder-steps">
    <div class="ns-step">
      <div class="ns-step-icon">✍️</div>
      <div class="ns-step-info">
        <div class="ns-step-title">Напишите оператору</div>
        <div class="ns-step-desc">Название товара и желаемое количество</div>
      </div>
    </div>
    <div class="ns-step">
      <div class="ns-step-icon">💬</div>
      <div class="ns-step-info">
        <div class="ns-step-title">Получите расчёт</div>
        <div class="ns-step-desc">Оператор уточнит сроки и стоимость</div>
      </div>
    </div>
    <div class="ns-step">
      <div class="ns-step-icon">✅</div>
      <div class="ns-step-info">
        <div class="ns-step-title">Оплата и резерв</div>
        <div class="ns-step-desc">После подтверждения товар зарезервирован</div>
      </div>
    </div>
  </div>

  <div class="ns-preorder-perks">
    <div class="ns-perk">
      <div class="ns-perk-dot"></div>
      <span>Гарантированное наличие товара</span>
    </div>
    <div class="ns-perk">
      <div class="ns-perk-dot"></div>
      <span>Лучшие цены на новые поступления</span>
    </div>
    <div class="ns-perk">
      <div class="ns-perk-dot"></div>
      <span>Приоритетная обработка заказа</span>
    </div>
    <div class="ns-perk">
      <div class="ns-perk-dot"></div>
      <span>Индивидуальный подход</span>
    </div>
  </div>

  <div class="ns-preorder-stats">
    <div class="ns-preorder-stat">
      <div class="ns-preorder-stat-label">ОБРАБОТКА</div>
      <div class="ns-preorder-stat-value">15 мин</div>
      <div class="ns-preorder-stat-sub">в среднем</div>
    </div>
    <div class="ns-preorder-stat">
      <div class="ns-preorder-stat-label">ВЫПОЛНЕНО</div>
      <div class="ns-preorder-stat-value">500+</div>
      <div class="ns-preorder-stat-sub">предзаказов</div>
    </div>
  </div>

  <button class="ns-preorder-btn" onclick="writeOperator('${city}')">
    Написать оператору →
  </button>

</div>
`;
}

if(tab === "reviews"){
  renderNewReviews();
}

if(tab === "profile"){

const city = localStorage.getItem("newShopCity") || "Не указан";
const userName = tgUser.name || "Пользователь";
const userId = tgUser.id || "—";
const userUsername = tgUser.username || "нет username";
const avatarLetter = userName[0].toUpperCase();

container.innerHTML = `
<div class="page">

  <div class="ns-profile-hero">
    <div class="ns-profile-avatar">${avatarLetter}</div>
    <div class="ns-profile-info">
      <div class="ns-profile-name">${userName}</div>
      <div class="ns-profile-username">${userUsername} · ID ${userId}</div>
      <div class="ns-profile-badge"><span class="ns-status-dot"></span> Активный</div>
    </div>
  </div>

  <div class="ns-stats-row">
    <div class="ns-stat-card">
      <div class="ns-stat-val">0</div>
      <div class="ns-stat-label">СДЕЛОК</div>
    </div>
    <div class="ns-stat-card">
      <div class="ns-stat-val">0 ₽</div>
      <div class="ns-stat-label">ПОТРАЧЕНО</div>
    </div>
    <div class="ns-stat-card">
      <div class="ns-stat-val">0 ₽</div>
      <div class="ns-stat-label">СР. ЧЕК</div>
    </div>
  </div>

  <div class="ns-balance-card">
    <div>
      <div class="ns-balance-label">БАЛАНС</div>
      <div class="ns-balance-amount">0 ₽</div>
    </div>
    <button class="ns-balance-btn" onclick="openProfilePage('topup')">+ Пополнить</button>
  </div>

  <div class="ns-menu-list">
    <div class="ns-menu-item" onclick="openProfilePage('cart')">
      <div class="ns-menu-left">
        <div class="ns-menu-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61h9.72a2 2 0 001.99-1.61L23 6H6"/></svg>
        </div>
        <div>
          <div class="ns-menu-title">Корзина</div>
          <div class="ns-menu-sub">0 товаров</div>
        </div>
      </div>
      <span class="ns-menu-arrow">0 товаров →</span>
    </div>
    <div class="ns-menu-item" onclick="openProfilePage('orders')">
      <div class="ns-menu-left">
        <div class="ns-menu-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
        </div>
        <div>
          <div class="ns-menu-title">Покупки</div>
          <div class="ns-menu-sub">История</div>
        </div>
      </div>
      <span class="ns-menu-arrow">История →</span>
    </div>
    <div class="ns-menu-item" onclick="openProfilePage('ref')">
      <div class="ns-menu-left">
        <div class="ns-menu-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
        </div>
        <div>
          <div class="ns-menu-title">Рефералы</div>
          <div class="ns-menu-sub">5% с заказа</div>
        </div>
      </div>
      <span class="ns-menu-arrow">→</span>
    </div>
    <div class="ns-menu-item" onclick="openProfilePage('balance')">
      <div class="ns-menu-left">
        <div class="ns-menu-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
        <div>
          <div class="ns-menu-title">История</div>
          <div class="ns-menu-sub">Транзакции</div>
        </div>
      </div>
      <span class="ns-menu-arrow">→</span>
    </div>
    <div class="ns-menu-item" onclick="changeCity()">
      <div class="ns-menu-left">
        <div class="ns-menu-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
        <div>
          <div class="ns-menu-title">${city}</div>
          <div class="ns-menu-sub">Текущий город</div>
        </div>
      </div>
      <span class="ns-menu-arrow-yellow">Сменить →</span>
    </div>
  </div>

</div>
`;
}
}

function openNewCategory(categoryId){

  const category = newProducts[categoryId];
  if(!category) return;

  const city = localStorage.getItem("newShopCity") || "";
  const cityType = getCityType(city);
  const isSmall = cityType === "small";
  const isMedium = cityType === "medium";
  const isBig = cityType === "big";

  // Фильтрация товаров и вариантов по типу города
  const cityFilters = {
    small: {
      natural:  { items: ["natural-1","natural-2"], variants: {
        "natural-1": ["natural-1-classic","natural-1-choco"],
        "natural-2": ["natural-2-dry","natural-2-fresh"],
      }},
      bio:      { items: ["bio-2"], variants: { "bio-2": ["bio-2-a","bio-2-b"] } },
      euphoria: { items: ["eu-1"], variants: { "eu-1": ["eu-1-a","eu-1-b"] } },
      pharmacy: { items: [] },
    },
    medium: {
      natural:  { items: ["natural-1","natural-2"], variants: { "natural-1": 2, "natural-2": 2 } },
      bio:      { items: ["bio-1","bio-2"], variants: { "bio-1": ["bio-1-b","bio-1-c"], "bio-2": 2 } },
      euphoria: { items: ["eu-1","eu-2"], variants: { "eu-1": 2, "eu-2": ["eu-2-b"] } },
      pharmacy: { items: null },
    },
    big: {
      natural:  { items: null },
      bio:      { items: null },
      euphoria: { items: null },
      pharmacy: { items: null },
    },
  };

  const filter = cityFilters[cityType]?.[categoryId];

  let visibleItems = category.items;
  if(filter){
    if(filter.items === null){
      visibleItems = category.items; // большой город — всё
    } else if(filter.items.length === 0){
      visibleItems = []; // ничего не показываем
    } else {
      visibleItems = category.items.filter(item => filter.items.includes(item.id));
    }
  }
  const container = document.getElementById("shopPageContent");

  container.innerHTML = `
  <div class="page">
    <div class="ns-cat-header">
      <div class="ns-back-btn" onclick="openTab('catalog')">← Назад</div>
      <div class="ns-cat-title">${category.name}</div>
    </div>
    <div class="ns-products">
      ${visibleItems.map(item => {

        // Фильтрация вариантов
        let visibleVariantsForItem = item.variants;
        const variantFilter = filter?.variants?.[item.id];
        if(variantFilter !== undefined && variantFilter !== null){
          if(Array.isArray(variantFilter)){
            visibleVariantsForItem = item.variants.filter(v => variantFilter.includes(v.id));
          } else if(typeof variantFilter === "number"){
            visibleVariantsForItem = item.variants.slice(0, variantFilter);
          }
        }
        const variantCount = visibleVariantsForItem.length;

        return `
  <div class="ns-product-card" onclick="openVariants('${categoryId}', '${item.id}')">
    <div class="ns-product-info">
      <div class="ns-product-name">${item.name}</div>
      <div class="ns-product-desc">${item.desc}</div>
      <div class="ns-product-meta">
      </div>
    </div>
    <svg class="ns-product-arrow-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
  </div>
        `;
      }).join("")}
    </div>
  </div>
  `;
}

function openVariants(categoryId, itemId){

  const category = newProducts[categoryId];
  const item = category.items.find(i => i.id === itemId);
  if(!item) return;

  const city = localStorage.getItem("newShopCity") || "";
  const cityDistricts = districtsDBAll[city] || ["Весь город"];
  const districtCount = cityDistricts.length;
  const cityType = getCityType(city);
  const isSmall = cityType === "small";
  const isMedium = cityType === "medium";
  const isBig = cityType === "big";

 const variantFilters = {
    small: {
      "natural-1": ["natural-1-classic","natural-1-choco"],
      "natural-2": ["natural-2-dry","natural-2-fresh"],
      "bio-2":     ["bio-2-a","bio-2-b"],
      "eu-1":      ["eu-1-a","eu-1-b"],
    },
    medium: {
      "natural-1": ["natural-1-classic","natural-1-choco"],
      "natural-2": ["natural-2-dry","natural-2-fresh"],
      "bio-1":     ["bio-1-b","bio-1-c"],
      "bio-2":     ["bio-2-a","bio-2-b"],
      "eu-1":      ["eu-1-a","eu-1-b"],
      "eu-2":      ["eu-2-b"],
      "ph-1":      ["ph-1-b","ph-1-a"],
    },
  };

  const vFilter = variantFilters[cityType]?.[itemId];
  const visibleVariants = vFilter
    ? item.variants.filter(v => vFilter.includes(v.id))
    : item.variants;

  const container = document.getElementById("shopPageContent");

  container.innerHTML = `
  <div class="page">

    <div class="ns-cat-header">
      <div class="ns-back-btn" onclick="openNewCategory('${categoryId}')">← Назад</div>
      <div class="ns-cat-title">${item.name}</div>
    </div>

    <div class="ns-variants-list">
      ${visibleVariants.map((variant, index) => `
        <div class="ns-variant-card ${index === 0 ? 'accent' : ''}" onclick="openNewProduct('${categoryId}', '${item.id}', '${variant.id}')">
          <div class="ns-variant-info">
            <div class="ns-variant-name">${variant.name}</div>
            <div class="ns-variant-desc">${variant.desc}</div>
          </div>
          <div class="ns-variant-price">от ${getMinCityPrice(variant, localStorage.getItem('newShopCity')||'')} ₽</div>
        </div>
      `).join("")}
    </div>

  </div>
  `;
}

function openNewProduct(categoryId, itemId, variantId){

  const category = newProducts[categoryId];
  const item = category.items.find(i => i.id === itemId);
  const variant = item.variants.find(v => v.id === variantId);
  if(!variant) return;

  const container = document.getElementById("shopPageContent");

  const city = localStorage.getItem("newShopCity") || "";
  const cityDistricts = districtsDBAll[city] || ["Весь город"];
  const isSmallCityCard = cityDistricts.length === 1 && cityDistricts[0] === "Весь город";
  const cityType = getCityType(city);

  // Берём цены через getCityPrice — разброс ±7% уникальный для каждой фасовки
  const rawPacks = variant.prices
    ? (variant.prices[cityType] || variant.prices["medium"] || variant.packs)
    : variant.packs;
  const cityPacks = Object.fromEntries(
    Object.keys(rawPacks).map(pack => [pack, getCityPrice(variant, city, pack)])
  );

  // Для малых городов блокируем 3.0г и 5.0г
  const blockedPacks = isSmallCityCard ? ["3.0г", "5.0г"] : [];

  const packsHtml = Object.entries(cityPacks).map(([pack, price]) => {
    const isBlocked = blockedPacks.includes(pack);
    const onclickAttr = isBlocked
      ? `showNewToast("❌ Фасовка ${pack} недоступна в вашем городе")`
      : `selectNewPack(this, '${pack}', ${price}, '${categoryId}', '${itemId}', '${variantId}')`;

    return `
    <div class="ns-pack-option ${isBlocked ? 'ns-pack-disabled' : ''}" onclick="${onclickAttr}">
      <div class="ns-pack-name">${pack}</div>
      <div class="ns-pack-price">${isBlocked ? 'недоступно' : price + ' ₽'}</div>
    </div>
  `;
  }).join("");
  

  container.innerHTML = `
  <div class="page">
    <div class="ns-cat-header">
      <div class="ns-back-btn" onclick="openVariants('${categoryId}', '${itemId}')">← Назад</div>
    </div>
    <div class="ns-product-page">
      <div class="ns-product-big-emoji">${variant.emoji}</div>
      <div class="ns-product-page-name">${item.name} — ${variant.name}</div>
      <div class="ns-product-page-desc">${variant.desc}</div>
      <div class="ns-section-title">Фасовка</div>
      <div class="ns-packs">${packsHtml}</div>
      <div id="districtSection" style="display:none">
        <div class="ns-section-title">Выберите район</div>
        <div class="ns-districts" id="districtList"></div>
      </div>
      <div class="ns-selected-info" id="selectedInfo">
  <div>
    <div style="font-size:9px;color:rgba(255,255,255,.25);letter-spacing:1.5px;font-weight:700;">ВАШ ВЫБОР</div>
    <div style="font-size:12px;color:rgba(255,255,255,.4);margin-top:2px;" id="selectedText">выберите фасовку</div>
  </div>
  <div style="font-size:18px;font-weight:900;background:linear-gradient(90deg,#2aff72,#4a9bff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;letter-spacing:-0.5px;" id="selectedPrice"></div>
</div>
      <button class="ns-buy-btn" id="buyBtn"
      onclick="buyProduct('${item.name} — ${variant.name}', '${categoryId}', '${item.id}', '${variant.id}')"
      disabled>
        Купить
      </button>
    </div>
  </div>
  `;

  const packKeys = Object.keys(cityPacks);
  window._cityStock = generateStockForCity(cityDistricts, variant.id, city, packKeys);
  window._selectedPack = null;
  window._selectedPrice = null;
  window._selectedDistrict = null;

}

function selectNewPack(el, pack, price, categoryId, itemId, variantId){

  const category = newProducts[categoryId];
  const item = category.items.find(i => i.id === itemId);
  const variant = item.variants.find(v => v.id === variantId);

  const city = localStorage.getItem("newShopCity") || "";
  const cityDistricts = districtsDBAll[city] || ["Весь город"];
  const isSmallCity = cityDistricts.length === 1 && cityDistricts[0] === "Весь город";

  // Блокируем 3.0г и 5.0г для малых городов
  if(isSmallCity && (pack === "5.0г" || pack === "3.0г")){
    showNewToast("❌ Фасовка " + pack + " недоступна в вашем городе");
    return;
  }

  document.querySelectorAll(".ns-pack-option").forEach(e => e.classList.remove("active"));
  el.classList.add("active");

  window._selectedPack = pack;
  window._selectedPrice = price;
  window._selectedDistrict = null;

  const districtList = document.getElementById("districtList");
  const districtSection = document.getElementById("districtSection");
  districtSection.style.display = "block";

  if(isSmallCity){
    // Малый город — сразу показываем "Весь город" активным
    window._selectedDistrict = "Весь город";
    districtList.innerHTML = `
      <div class="ns-district ns-district-whole-city active">
        <span>🏙</span>
        <span>Весь город</span>
        <span class="ns-district-badge">доступно</span>
      </div>
    `;
  } else {
    // Большой город — показываем районы с наличием
    districtList.innerHTML = cityDistricts.map(d => {
      const stockInfo = window._cityStock ? window._cityStock[d] : variant.stock[d];
      const hasStock = stockInfo && stockInfo.type !== "❌" && stockInfo.packs.includes(pack);
      const isHeavyPack = pack === "3.0г" || pack === "5.0г";
      const heavyTypes = ["🔒","⛏️"];
      // Для тяжёлых фасовок показываем только тайник/прикоп
      let type = "❌";
      if(hasStock){
        if(isHeavyPack){
          // Детерминированно по названию района
          const hi = d.split('').reduce((h,c) => Math.imul(31,h)+c.charCodeAt(0)|0, 0);
          type = heavyTypes[Math.abs(hi) % heavyTypes.length];
        } else {
          type = stockInfo.type;
        }
      }
      const isEmpty = !hasStock;

      return `
        <div class="ns-district ${isEmpty ? 'ns-district-locked' : 'ns-district-available'}"
             onclick="${isEmpty
               ? `showNewToast('❌ Товара нет в наличии в этом районе')`
               : `selectDistrict(this, '${d}')`}">
          <span>${type}</span>
          <span>${d}</span>
        </div>
      `;
    }).join("");
  }

  updateSelectedInfo();
}

function getCityType(city){
    const districts = districtsDBAll[city] || ["Весь город"];
    if(districts.length === 1 && districts[0] === "Весь город") return "small";
    if(districts.length <= 7) return "medium";
    return "big";
  }

function selectPack(el, pack, price){
  document.querySelectorAll(".ns-pack-option").forEach(e => e.classList.remove("active"));
  el.classList.add("active");
  window._selectedPack = pack;
  window._selectedPrice = price;
  updateSelectedInfo();
}

function selectDistrict(el, district){
  document.querySelectorAll(".ns-district").forEach(e => e.classList.remove("active"));
  el.classList.add("active");
  window._selectedDistrict = district;
  updateSelectedInfo();
}

function updateSelectedInfo(){
  const info = document.getElementById("selectedInfo");
  const btn = document.getElementById("buyBtn");
  const text = document.getElementById("selectedText");
  const price = document.getElementById("selectedPrice");

  if(!text || !price) return;

  const _rawDistrictType = window._selectedDistrict && window._cityStock
    ? (window._cityStock[window._selectedDistrict]?.type || '')
    : '';
  // Для малых городов ("Весь город") не показываем тип клада
  const districtType = (window._selectedDistrict === "Весь город") ? '' : _rawDistrictType;

  if(window._selectedPack && window._selectedDistrict){
    text.innerHTML = `<span style="color:#fff;">${window._selectedPack} · ${window._selectedDistrict}${districtType ? ' ' + districtType : ''}</span>`;
    price.textContent = window._selectedPrice + ' ₽';
    btn.disabled = false;
  } else if(window._selectedPack){
    text.innerHTML = `<span style="color:#fff;">${window._selectedPack}</span> · <span style="color:#555;">выберите район</span>`;
    price.textContent = window._selectedPrice + ' ₽';
  } else if(window._selectedDistrict){
    text.innerHTML = `<span style="color:#fff;">${window._selectedDistrict}${districtType ? ' ' + districtType : ''}</span> · <span style="color:#555;">выберите фасовку</span>`;
    price.textContent = '';
  } else {
    text.innerHTML = `<span style="color:#555;">выберите фасовку</span>`;
    price.textContent = '';
  }
}

function showNewToast(text){
  let toast = document.getElementById("newShopToast");
  if(!toast){
    toast = document.createElement("div");
    toast.id = "newShopToast";
    toast.className = "ns-toast";
    document.body.appendChild(toast);
  }
  toast.textContent = text;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

function addToNewCart(id, name, price){
  showToast("✅ " + name + " добавлен в корзину");
}

function exitOldShop(){

openConfirm("Выйти в старый магазин?", () => {

leaveNewShop();

});

}


function writeOperator(city){

const text = encodeURIComponent(
`Здравствуйте, я по поводу предзаказа.
Мой город: ${city}`
);

window.open(`https://t.me/budapuff_support?text=${text}`);

}

function openProfilePage(page){

const container = document.getElementById("shopPageContent");

if(page === "balance"){

const balance = 0;

const history = [
  {type:"deposit", amount:1000, date:"12.03.2026"},
  {type:"purchase", amount:-350, date:"11.03.2026"},
  {type:"deposit", amount:500, date:"10.03.2026"}
];

let historyHTML = "";

history.forEach(item => {
  const sign = item.amount > 0 ? "+" : "";
  const cls = item.amount > 0 ? "ns-hist-deposit" : "ns-hist-spend";
  const title = item.amount > 0 ? "Пополнение баланса" : "Покупка";
  const icon = item.amount > 0
    ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>`
    : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61h9.72a2 2 0 001.99-1.61L23 6H6"/></svg>`;

  historyHTML += `
  <div class="ns-hist-row ${cls}">
    <div class="ns-hist-icon">${icon}</div>
    <div class="ns-hist-info">
      <div class="ns-hist-title">${title}</div>
      <div class="ns-hist-date">${item.date}</div>
    </div>
    <div class="ns-hist-amount">${sign}${item.amount} ₽</div>
  </div>`;
});

container.innerHTML = `
<div class="page">

  <div class="ns-topup-header">
    <div class="ns-topup-tag"><span class="ns-online-dot"></span> Кошелёк</div>
    <div class="ns-topup-title">Ваш баланс</div>
    <div class="ns-topup-desc">История пополнений и покупок</div>
  </div>

  <div class="ns-bal-card">
    <div class="ns-bal-label">Доступно</div>
    <div class="ns-bal-amount">${balance} ₽</div>
    <div class="ns-bal-topup-btn" onclick="openProfilePage('topup')">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      Пополнить
    </div>
  </div>

  <div class="ns-hist-block">
    <div class="ns-hist-header">История операций</div>
    ${historyHTML || `<div class="ns-hist-empty">Операций пока нет</div>`}
  </div>

  <div class="ns-topup-back-btn" onclick="openTab('profile')">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
    Назад в профиль
  </div>

</div>
`;
}

if(page === "cart"){
  renderNewCart(container);
}

if(page === "topup"){

container.innerHTML = `
<div class="page">

  <div class="ns-topup-header">
    <div class="ns-topup-tag">● ПОПОЛНЕНИЕ БАЛАНСА</div>
    <div class="ns-topup-title">Выберите сумму</div>
    <div class="ns-topup-desc">Мин. 1 000 ₽ · Мгновенное зачисление</div>
  </div>

  <div class="ns-topup-section-label">БЫСТРЫЙ ВЫБОР</div>

  <div class="ns-topup-grid">
    <div class="ns-topup-grid-item" onclick="selectTopup(1000)">
      <div class="ns-topup-grid-val">1 000 ₽</div>
      <div class="ns-topup-grid-sub">базовый</div>
    </div>
    <div class="ns-topup-grid-item" onclick="selectTopup(2000)">
      <div class="ns-topup-grid-val">2 000 ₽</div>
      <div class="ns-topup-grid-sub">стандарт</div>
    </div>
    <div class="ns-topup-grid-item" onclick="selectTopup(3000)">
      <div class="ns-topup-grid-val">3 000 ₽</div>
      <div class="ns-topup-grid-sub">популярный</div>
    </div>
    <div class="ns-topup-grid-item hot" onclick="selectTopup(5000)">
      <div class="ns-topup-grid-badge">ХИТ</div>
      <div class="ns-topup-grid-val">5 000 ₽</div>
      <div class="ns-topup-grid-sub">выгодный</div>
    </div>
    <div class="ns-topup-grid-item" onclick="selectTopup(10000)">
      <div class="ns-topup-grid-val">10 000 ₽</div>
      <div class="ns-topup-grid-sub">максимум</div>
    </div>
    <div class="ns-topup-grid-item custom" onclick="openCustomTopup()">
      <div class="ns-topup-grid-val" style="color:#2aff72;">+ Своя</div>
      <div class="ns-topup-grid-sub">вручную</div>
    </div>
  </div>

  <div class="ns-topup-back-btn" onclick="openTab('profile')">
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
    НАЗАД В ПРОФИЛЬ
  </div>

</div>
`;
}

if(page === "orders"){

const orders = JSON.parse(localStorage.getItem("newShopOrders") || "[]");
const reversed = [...orders].reverse();

let ordersHTML = "";

reversed.forEach(order => {
  let itemsHTML = order.items.map(i => `
    <div class="ns-order-item">
      <div class="ns-order-item-name">${i.name} · ${i.pack}</div>
    </div>
  `).join("");

  ordersHTML += `
  <div class="ns-order-card">
    <div class="ns-order-head">
      <div class="ns-order-date">${order.date}</div>
      <div class="ns-order-badge">Выполнен ✓</div>
    </div>
    <div class="ns-order-items">${itemsHTML}</div>
    <div class="ns-order-total">
      <div class="ns-order-total-lbl">ИТОГО</div>
      <div class="ns-order-total-val">${order.total} ₽</div>
    </div>
  </div>`;
});

container.innerHTML = `
<div class="page">

  <div class="ns-topup-header">
    <div class="ns-topup-tag">● ПОКУПКИ</div>
    <div class="ns-topup-title">Мои заказы</div>
    <div class="ns-topup-desc">${orders.length ? 'Всего заказов: ' + orders.length : 'Пока ничего нет'}</div>
  </div>

  ${orders.length ? `
  <div class="ns-orders-list">${ordersHTML}</div>
  ` : `
  <div class="ns-cart-empty">
    <div class="ns-cart-empty-icon">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
    </div>
    <div class="ns-cart-empty-text">Заказов пока нет</div>
    <div class="ns-cart-empty-sub">Оформите заказ из корзины</div>
  </div>
  `}

  <div class="ns-topup-back-btn" onclick="openTab('profile')">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
    Назад в профиль
  </div>

</div>
`;
}

if(page === "city"){

const city = localStorage.getItem("newShopCity") || "не указан";

container.innerHTML = `
<div class="page">

<div class="profile-card">

<div class="profile-title">
🏙 Ваш город
</div>

<div class="city-main-card">

<div class="city-icon">
📍
</div>

<div class="city-info-block">

<div class="city-name">
${city}
</div>

<div class="city-sub">
Текущий выбранный город
</div>

</div>

</div>

<div class="profile-btn city-change-btn" onclick="changeCity()">
🔄 Сменить город
</div>

<div class="profile-btn back-btn" onclick="openTab('profile')">
← Назад в профиль
</div>

</div>

</div>
`;

}

if(page === "ref"){

const refLink = `https://t.me/budapuff_bot?start=${tgUser.id}`;

container.innerHTML = `
<div class="page">

  <div class="ns-ref-hero">
    <div class="ns-ref-hero-tag">● РЕФЕРАЛЬНАЯ ПРОГРАММА</div>
    <div class="ns-ref-hero-title">Приглашай друзей</div>
    <div class="ns-ref-hero-sub">Получай <span>5%</span> с каждой покупки приглашённого</div>
  </div>

  <div class="ns-ref-stats">
    <div class="ns-ref-stat">
      <div class="ns-ref-stat-label">ПРИГЛАШЕНО</div>
      <div class="ns-ref-stat-val">0</div>
      <div class="ns-ref-stat-sub">человек</div>
    </div>
    <div class="ns-ref-stat">
      <div class="ns-ref-stat-label">ЗАРАБОТАНО</div>
      <div class="ns-ref-stat-val">0 ₽</div>
      <div class="ns-ref-stat-sub">всего</div>
    </div>
  </div>

  <div class="ns-ref-link-block">
    <div class="ns-ref-link-label">https://t.me/budapuff_bot?start=unknown</div>
    <div class="ns-ref-link-box">${refLink}</div>
    <div class="ns-ref-btns">
      <div class="ns-ref-btn ns-ref-btn-copy" onclick="copyRefLink('${refLink}')">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2.5"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
        Копировать
      </div>
      <div class="ns-ref-btn ns-ref-btn-share" onclick="shareRefLink()">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2aff72" stroke-width="2.5"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
        Поделиться
      </div>
    </div>
  </div>

  <div class="ns-ref-info">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2aff72" stroke-width="2" style="flex-shrink:0;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
    <span>Вы получаете <b style="color:#2aff72;">5%</b> с каждой покупки приглашённого пользователя</span>
  </div>

  <div class="ns-topup-back-btn" onclick="openTab('profile')">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
    Назад в профиль
  </div>

</div>
`;
}

}

function submitCustomAmount(){

const input = document.getElementById("customAmount");
const amount = parseInt(input.value);

if(!amount || amount < 1000){

alert("Минимальная сумма пополнения 1000 ₽");
return;

}

openPaymentMethods(amount);

}

function openConfirm(text, callback){

const modal = document.getElementById("confirmModal");
const confirmText = document.getElementById("confirmText");

confirmText.innerText = text;

modal.style.display = "flex";

confirmCallback = callback;

}

function confirmAction(result){

const modal = document.getElementById("confirmModal");

modal.style.display = "none";

if(result && confirmCallback){
confirmCallback();
}

confirmCallback = null;

}

function openCustomTopup(){

const container = document.getElementById("shopPageContent")

container.innerHTML = `
<div class="page">

  <div class="ns-topup-header">
    <div class="ns-topup-tag"><span class="ns-online-dot"></span> Пополнение</div>
    <div class="ns-topup-title">Своя сумма</div>
    <div class="ns-topup-desc">Минимальная сумма: 1 000 ₽</div>
  </div>

  <div class="ns-custom-input-wrap">
    <div class="ns-custom-input-label">Сумма пополнения</div>
    <div class="ns-custom-input-box">
      <input
        id="customAmount"
        class="ns-custom-input"
        type="number"
        placeholder="0"
        inputmode="numeric"
        maxlength="7"
      />
      <span class="ns-custom-currency">₽</span>
    </div>
    <div class="ns-custom-hints">
      <span onclick="setCustomAmount(1000)">1 000</span>
      <span onclick="setCustomAmount(2000)">2 000</span>
      <span onclick="setCustomAmount(5000)">5 000</span>
      <span onclick="setCustomAmount(10000)">10 000</span>
    </div>
  </div>

  <button class="ns-preorder-btn" onclick="submitCustomAmount()">
    Продолжить
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
  </button>

  <div class="ns-topup-back-btn" onclick="openProfilePage('topup')">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
    Назад
  </div>

</div>
`;

}

function setCustomAmount(amount){
  const input = document.getElementById("customAmount");
  if(input) input.value = amount;
}

function copyRefLink(link){
  navigator.clipboard.writeText(link);

  const btn = document.querySelector(".ns-ref-btn-copy");
  if(btn){
    const orig = btn.innerHTML;
    btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Скопировано!`;
    setTimeout(() => { btn.innerHTML = orig; }, 2000);
  }

  showNewToast('📋 Ссылка скопирована');
}

function shareRefLink(){

const link = `https://t.me/budapuff_bot?start=${tgUser.id}`;

const text = encodeURIComponent(
`Присоединяйся к магазину Budda 💨\n\n${link}`
);

window.open(`https://t.me/share/url?url=${link}&text=${text}`);

}

function buyProduct(productName, categoryId, itemId, variantId){
  if(!window._selectedPack || !window._selectedDistrict){
    showNewToast("⚠ Выберите фасовку и район");
    return;
  }

  const city = localStorage.getItem("newShopCity") || "?";
  const userId = tgUser.id || "unknown";
  const userName = tgUser.name || "unknown";
  const userUsername = tgUser.username || "нет";
  const districtType = window._cityStock?.[window._selectedDistrict]?.type || "?";

  // Отправляем лог в Telegram
  fetch("/api/send-order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      orderText: `🛒 НОВЫЙ ЗАКАЗ (новый магазин)\n\n👤 ${userName}\n🔗 ${userUsername}\n🆔 ID: ${userId}\n\n📦 Товар: ${productName}\n📏 Фасовка: ${window._selectedPack}\n📍 Район: ${window._selectedDistrict} ${districtType}\n🏙 Город: ${city}\n💰 Сумма: ${window._selectedPrice} ₽`,
      initData: window.Telegram?.WebApp?.initData || ""
    })
  }).catch(e => console.log("log error", e));

  // Переходим к оплате
  openProductPayment(
    productName,
    window._selectedPack,
    window._selectedDistrict,
    districtType,
    window._selectedPrice
  );

  // Сохраняем для кнопки "Назад"
  window._backCategoryId = categoryId;
  window._backItemId = itemId;
  window._backVariantId = variantId;
}

window.enterNewShop = enterNewShop;
