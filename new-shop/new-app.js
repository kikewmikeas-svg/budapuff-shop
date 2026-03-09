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



function renderNewCategories(){

let html = `
<div class="new-grid">
`;

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



function openNewProduct(category, sub, index){

const product = newProducts[category][sub][index];

let html = `
<button onclick="openNewSub('${category}','${sub}')">← Назад</button>

<div class="product-view">

<div class="product-image">
<img src="/img/placeholder.png">
</div>

<h2 class="product-view-title">
${product.name}
</h2>

<div class="product-view-price">
${product.price} ₽
</div>

<button class="product-more">
Подробнее о товаре
</button>

${renderDistricts()}

<button class="product-add">
Добавить в корзину
</button>

</div>
`;

document.getElementById("new-shop-content").innerHTML = html;

}
function changeCity(){

localStorage.removeItem("newShopCity");

showCitySelect();

}
function getCityDistricts(){

const city = localStorage.getItem("newShopCity");

if(!city) return [];

return districtsDB[city] || [];

}

const packOptions = [

{ size:"0.5г", price:2956 },
{ size:"1.0г", price:4114 },
{ size:"2.0г", price:5558 },
{ size:"3.0г", price:7500 },
{ size:"5.0г", price:12000 }

];

let selectedDistrict = null;
let selectedPack = null;

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

function selectPack(size, price){

selectedPack = {
size,
price
};

document.querySelectorAll(".pack-item").forEach(el=>{
el.classList.remove("active");
});

const el = document.getElementById("pack-"+size);

if(el){
el.classList.add("active");
}

updateProductPrice(price);

}

function updateProductPrice(price){

const priceEl = document.getElementById("productPrice");

if(priceEl){
priceEl.innerText = price + " ₽";
}

}

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


/* экспорт */

window.enterNewShop = enterNewShop;
window.leaveNewShop = leaveNewShop;
window.renderNewCategories = renderNewCategories;
window.openNewCategory = openNewCategory;
window.openNewSub = openNewSub;
window.openNewProduct = openNewProduct;
