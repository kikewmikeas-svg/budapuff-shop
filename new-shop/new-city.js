const CITY_KEY = "newShopCity";

function getSavedCity(){
return localStorage.getItem(CITY_KEY);
}

function saveCity(city){
localStorage.setItem(CITY_KEY, city);
}

function showCitySelect(){

document.getElementById("main").innerHTML = `

<div class="city-screen">

<h1>Выберите город</h1>

<input 
id="cityInput"
type="text"
placeholder="Введите город"
autocomplete="off"
/>

<div id="citySuggestions"></div>

<button onclick="confirmCity()">Войти</button>

</div>

`;

initCitySearch();

}

function confirmCity(){

const input = document.getElementById("cityInput");
const city = input.value.trim();

if(!city){
alert("Введите город");
return;
}

saveCity(city);

enterNewShop();

}

window.showCitySelect = showCitySelect;

function initCitySearch(){

const input = document.getElementById("cityInput");
const box = document.getElementById("citySuggestions");

input.addEventListener("input", function(){

const value = input.value.toLowerCase();

box.innerHTML = "";

if(!value) return;

const filtered = cities
.filter(c => c.toLowerCase().includes(value))
.slice(0,8);

filtered.forEach(city => {

const div = document.createElement("div");

div.className = "city-item";
div.textContent = city;

div.onclick = () => {
input.value = city;
box.innerHTML = "";
};

box.appendChild(div);

});

});

}
