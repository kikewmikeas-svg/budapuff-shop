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

enterNewShop();

}