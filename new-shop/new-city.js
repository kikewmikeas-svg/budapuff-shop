let selectedCity = null;

/* ====================== */
/* ВЫБОР ГОРОДА */
/* ====================== */

function showCitySelect(){
    document.getElementById("main").innerHTML = `
  <div class="city-screen">
    <div class="city-card">

      <div class="city-logo">
        <div class="city-logo-text">BU<span>DD</span>A</div>
        <div class="city-logo-line"></div>
      </div>


      <div class="city-stats">
        <div class="city-stat">
          <div class="city-stat-num green">1000+</div>
          <div class="city-stat-lbl">КЛИЕНТОВ</div>
        </div>
        <div class="city-stat">
          <div class="city-stat-num yellow">24/7</div>
          <div class="city-stat-lbl">РАБОТАЕМ</div>
        </div>
        <div class="city-stat">
          <div class="city-stat-num">500+</div>
          <div class="city-stat-lbl">ГОРОДОВ</div>
        </div>
      </div>

      <div class="city-divider"></div>

      <div class="city-heading">ВЫБЕРИТЕ ГОРОД</div>

      <div class="city-search">
        <div class="city-search-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#444" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
        </div>
        <input
          id="cityInput"
          type="text"
          placeholder="Начните вводить город..."
          autocomplete="off"
        />
      </div>

      <div id="citySuggestions"></div>

      <button id="enterCityBtn" onclick="confirmCity()" disabled>
        Продолжить →
      </button>

    </div>
  </div>
`;
    initCitySearch();
}


/* =========================
   ПОИСК ГОРОДА
========================= */

function initCitySearch(){

let searchTimeout;

const input = document.getElementById("cityInput");
const box = document.getElementById("citySuggestions");

input.addEventListener("input", function(){

selectedCity = null;

const btn = document.getElementById("enterCityBtn");
btn.disabled = true;

clearTimeout(searchTimeout);

searchTimeout = setTimeout(() => {

const value = input.value.trim().toLowerCase();
box.innerHTML = "";

if(value.length < 2){
return;
}

const filtered = cities
.filter(city => city.toLowerCase().includes(value))
.slice(0,6);

if(filtered.length === 0){

box.innerHTML = `
<div class="city-empty">
Город не найден
</div>
`;

return;
}

filtered.forEach(city => {

const div = document.createElement("div");
div.className = "city-item";
div.innerText = city;

div.onclick = () => {
    input.value = city;
    selectedCity = city;
    box.innerHTML = "";

    const btn = document.getElementById("enterCityBtn");
    btn.disabled = false;
};

box.appendChild(div);

});

}, 250);

});

}


/* =========================
   ПОДТВЕРЖДЕНИЕ ГОРОДА
========================= */

function confirmCity(){

if(!selectedCity){
alert("Выберите город из списка");
return;
}

localStorage.setItem("newShopCity", selectedCity);

showSecureLoadingScreen(() => {
  enterNewShop();
});

}

/* =========================
   ЭКРАН ЗАГРУЗКИ — ЩИТ + МАТРИЦА
========================= */

function showSecureLoadingScreen(onComplete){

const main = document.getElementById("main");

main.innerHTML = `
<div class="sl-screen" id="slScreen">

  <div class="sl-matrix" id="slMatrix"></div>

  <div class="sl-content">
    <div class="sl-shield-wrap">
      <div class="sl-shield-ring sl-ring1"></div>
      <div class="sl-shield-ring sl-ring2"></div>
      <div class="sl-shield-icon">🛡</div>
    </div>

    <div class="sl-title" id="slTitle">Защита соединения</div>
    <div class="sl-sub" id="slSub">Инициализация шифрования...</div>

    <div class="sl-bar-wrap">
      <div class="sl-bar" id="slBar"></div>
    </div>

    <div class="sl-code" id="slCode">AES-256-GCM</div>

    <div class="sl-checks" id="slChecks"></div>
  </div>

</div>
`;

// Генерируем матрицу
const matrix = document.getElementById("slMatrix");
const chars = "01アイウエオ$#@01アカキ&%10";
for(let i = 0; i < 30; i++){
  const span = document.createElement("span");
  span.className = "sl-matrix-char";
  span.style.left = Math.random() * 100 + "%";
  span.style.animationDuration = (1 + Math.random() * 3) + "s";
  span.style.animationDelay = (Math.random() * 2) + "s";
  span.style.fontSize = (8 + Math.random() * 6) + "px";
  span.textContent = chars[Math.floor(Math.random() * chars.length)];
  matrix.appendChild(span);
}

// Последовательность шагов
const steps = [
  { title: "Защита соединения", sub: "Установка зашифрованного канала...", code: "TLS 1.3", check: null, progress: 20 },
  { title: "Шифрование данных", sub: "Генерация ключей безопасности...", code: "AES-256-GCM", check: "✓ Соединение защищено", progress: 45 },
  { title: "Проверка анонимности", sub: "Скрытие цифрового следа...", code: "SHA-512", check: "✓ Данные зашифрованы", progress: 70 },
  { title: "Доступ разрешён", sub: "Добро пожаловать в магазин!", code: "SECURE", check: "✓ Анонимность подтверждена", progress: 100 },
];

let step = 0;
const checksEl = document.getElementById("slChecks");
const checks = [];

function runStep(){
  const s = steps[step];
  const titleEl = document.getElementById("slTitle");
  const subEl = document.getElementById("slSub");
  const barEl = document.getElementById("slBar");
  const codeEl = document.getElementById("slCode");

  if(titleEl) titleEl.textContent = s.title;
  if(subEl) subEl.textContent = s.sub;
  if(codeEl) codeEl.textContent = s.code;
  if(barEl) barEl.style.width = s.progress + "%";

  if(s.check){
    checks.push(s.check);
    if(checksEl) checksEl.innerHTML = checks.map(c =>
      `<div class="sl-check-item">${c}</div>`
    ).join("");
  }

  step++;
  if(step < steps.length){
    setTimeout(runStep, 700);
  } else {
    // Финальная анимация — вспышка и уход
    setTimeout(() => {
      const screen = document.getElementById("slScreen");
      if(screen) screen.classList.add("sl-exit");
      setTimeout(onComplete, 500);
    }, 600);
  }
}

setTimeout(runStep, 300);
}
