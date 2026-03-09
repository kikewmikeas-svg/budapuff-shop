/* =========================
   ВХОД В НОВЫЙ МАГАЗИН
========================= */

function enterNewShop(){

const city = localStorage.getItem("newShopCity");

if(!city){
showCitySelect();
return;
}

document.getElementById("main").innerHTML = `

<div class="new-shop">

<div class="new-shop-header">

<button onclick="leaveNewShop()">← Старый магазин</button>

<div class="city-badge" onclick="changeCity()">
📍 ${city}
</div>

</div>

<h2>Новый магазин</h2>

<div id="new-shop-content"></div>

</div>

`;

renderNewCategories();

}



/* =========================
   ВЫХОД В СТАРЫЙ МАГАЗИН
========================= */

function leaveNewShop(){

if(typeof renderCategories === "function"){
renderCategories();
return;
}

location.reload();

}



/* =========================
   КАТЕГОРИИ
========================= */

function renderNewCategories(){

let html = `<div class="new-grid">`;

Object.keys(newProducts).forEach(category => {

html += `
<div class="new-card" onclick="openNewCategory('${category}')">
${category}
</div>
`;

});

html += `</div>`;

document.getElementById("new-shop-content").innerHTML = html;

}



/* =========================
   ПОДКАТЕГОРИИ
========================= */

function openNewCategory(category){

const subs = newProducts[category];

let html = `
<button onclick="enterNewShop()">← Назад</button>
<h2>${category}</h2>

<div class="new-grid">
`;

Object.keys(subs).forEach(sub => {

html += `
<div class="new-card" onclick="openNewSub('${category}','${sub}')">
${sub}
</div>
`;

});

html += `</div>`;

document.getElementById("new-shop-content").innerHTML = html;

}



/* =========================
   СПИСОК ТОВАРОВ
========================= */

function openNewSub(category, sub){

const products = newProducts[category][sub];

let html = `
<button onclick="openNewCategory('${category}')">← Назад</button>
<h2>${sub}</h2>

<div class="product-grid">
`;

products.forEach((p, i) => {

html += `
<div class="product-item"
onclick="openNewProduct('${category}','${sub}',${i})">

<div class="product-title">
${p.name}
</div>

<div class="product-bottom">

<div class="product-price">
${p.price} ₽
</div>

</div>

</div>
`;

});

html += `</div>`;

document.getElementById("new-shop-content").innerHTML = html;

}



/* =========================
   КАРТОЧКА ТОВАРА
========================= */

function openNewProduct(category, sub, index){

const product = newProducts[category][sub][index];

selectedPack = null;
selectedDistrict = null;

let html = `
<button onclick="openNewSub('${category}','${sub}')">← Назад</button>

<div class="product-view">

<div class="product-image">
<img src="/img/placeholder.png">
</div>

<h2 class="product-view-title">
${product.name}
</h2>

<div id="productPrice"
class="product-view-price"
data-base="${product.price}">
${product.price} ₽
</div>

<button class="product-more">
Подробнее о товаре
</button>

${renderPacks()}

${renderDistricts()}

<button class="product-add" onclick="addToCart('${product.name}')">
Добавить в корзину
</button>

</div>
`;

document.getElementById("new-shop-content").innerHTML = html;

}



/* =========================
   СМЕНА ГОРОДА
========================= */

function changeCity(){

localStorage.removeItem("newShopCity");

showCitySelect();

}



/* =========================
   РАЙОНЫ
========================= */

function getCityDistricts(){

const city = localStorage.getItem("newShopCity");

if(!city) return [];

return districtsDB[city] || [];

}



/* =========================
   ФАСОВКИ
========================= */

const packOptions = [

{ size:"0.5г", price:2956 },
{ size:"1.0г", price:4114 },
{ size:"2.0г", price:5558 },
{ size:"3.0г", price:7500 },
{ size:"5.0г", price:12000 }

];



let selectedDistrict = null;
let selectedPack = null;



/* =========================
   ВЫБОР РАЙОНА
========================= */

function selectDistrict(name){

selectedDistrict = name;

document.querySelectorAll(".district-item").forEach(el=>{
el.classList.remove("active");
});

const el = document.getElementById("district-"+name);

if(el){
el.classList.add("active");
}

}



/* =========================
   ВЫБОР ФАСОВКИ
========================= */

function selectPack(size, price){

const packId = "pack-"+size.replace(".", "");
const el = document.getElementById(packId);

// toggle
if(selectedPack && selectedPack.size === size){

selectedPack = null;

document.querySelectorAll(".pack-item").forEach(e=>{
e.classList.remove("active");
});

const priceEl = document.getElementById("productPrice");

if(priceEl){
const base = priceEl.dataset.base;
priceEl.innerText = base + " ₽";
}

return;
}

// выбрать фасовку
selectedPack = {
size,
price
};

document.querySelectorAll(".pack-item").forEach(e=>{
e.classList.remove("active");
});

if(el){
el.classList.add("active");
}

updateProductPrice(price);

}



/* =========================
   ОБНОВЛЕНИЕ ЦЕНЫ
========================= */

function updateProductPrice(price){

const priceEl = document.getElementById("productPrice");

if(priceEl){
priceEl.innerText = price + " ₽";
}

}



/* =========================
   РЕНДЕР ФАСОВОК
========================= */

function renderPacks(){

let html = `
<div class="pack-block">

<h3>⚖ Выберите фасовку</h3>

<div class="pack-grid">
`;

packOptions.forEach(p=>{

const id = p.size.replace(".", "").replace("г","");

html += `
<div 
id="pack-${id}"
class="pack-item"
data-size="${p.size}"
data-price="${p.price}">

${p.size} — ${p.price}₽

</div>
`;

});

html += `
</div>
</div>
`;

return html;

}



/* =========================
   РЕНДЕР РАЙОНОВ
========================= */

function renderDistricts(){

const districts = getCityDistricts();

let html = `
<div class="district-block">

<h3>📍 Выберите район</h3>

<div class="district-grid">
`;

districts.forEach(d=>{

const icon = d.available ? "🧲" : "❌";

html += `
<div 
id="district-${d.name}"
class="district-item ${!d.available ? "disabled":""}"
onclick="${d.available ? `selectDistrict('${d.name}')` : ""}">

${icon} ${d.name}

</div>
`;

});

html += `</div></div>`;

return html;

}



/* =========================
   КОРЗИНА
========================= */

function addToCart(productName){

if(!selectedPack){
alert("Выберите фасовку");
return;
}

if(!selectedDistrict){
alert("Выберите район");
return;
}

const city = localStorage.getItem("newShopCity");

const item = {
product: productName,
city: city,
district: selectedDistrict,
pack: selectedPack.size,
price: selectedPack.price
};

console.log("Корзина:", item);

alert("Товар добавлен в корзину");

}

function handlePackClick(el){

const size = el.dataset.size;
const price = parseInt(el.dataset.price);

selectPack(size, price);

}

/* =========================
   ЭКСПОРТ
========================= */

window.enterNewShop = enterNewShop;
window.leaveNewShop = leaveNewShop;
window.renderNewCategories = renderNewCategories;
window.openNewCategory = openNewCategory;
window.openNewSub = openNewSub;
window.openNewProduct = openNewProduct;
