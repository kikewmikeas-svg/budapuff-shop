/* =========================
   STATE
========================= */

if(!window.cart){
window.cart = JSON.parse(localStorage.getItem("cart") || "[]");
}
let selectedDistrict = null;
let selectedPack = null;

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

<button onclick="openCart()">🛒 Корзина</button>

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

products.forEach((p,i)=>{

html += `
<div class="product-item" onclick="openNewProduct('${category}','${sub}',${i})">

<div class="product-title">
${p.name}
</div>

<div class="product-bottom">
<div class="product-price">${p.price} ₽</div>
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

<h2 class="product-view-title">${product.name}</h2>

<div id="productPrice"
class="product-view-price"
data-base="${product.price}">
${product.price} ₽
</div>

${renderPacks()}

${renderDistricts()}

<button class="product-add" onclick="addToCart('${product.name}',${product.price})">
Добавить в корзину
</button>

</div>
`;

document.getElementById("new-shop-content").innerHTML = html;

initPackHandlers();

}


/* =========================
   ФАСОВКИ
========================= */

const packOptions = [

{size:"0.5г",price:2956},
{size:"1.0г",price:4114},
{size:"2.0г",price:5558},
{size:"3.0г",price:7500},
{size:"5.0г",price:12000}

];


function renderPacks(){

let html = `
<div class="pack-block">

<h3>⚖ Выберите фасовку</h3>

<div class="pack-grid">
`;

packOptions.forEach(p=>{

const id = p.size.replace(".","").replace("г","");

html += `
<div 
id="pack-${id}"
class="pack-item"
data-size="${p.size}"
data-price="${p.price}">
${p.size} — ${p.price} ₽
</div>
`;

});

html += `</div></div>`;

return html;

}


/* =========================
   КЛИК ФАСОВКИ
========================= */

function initPackHandlers(){

document.querySelectorAll(".pack-item").forEach(el=>{

el.onclick = ()=>{

const size = el.dataset.size;
const price = parseInt(el.dataset.price);

selectPack(size,price);

};

});

}


function selectPack(size,price){

const id = "pack-"+size.replace(".","").replace("г","");
const el = document.getElementById(id);

// toggle
if(selectedPack && selectedPack.size===size){

selectedPack=null;

document.querySelectorAll(".pack-item")
.forEach(e=>e.classList.remove("active"));

const base=document.getElementById("productPrice").dataset.base;
updateProductPrice(base);

return;

}

selectedPack={size,price};

document.querySelectorAll(".pack-item")
.forEach(e=>e.classList.remove("active"));

if(el) el.classList.add("active");

updateProductPrice(price);

}


function updateProductPrice(price){

const priceEl=document.getElementById("productPrice");

if(priceEl) priceEl.innerText=price+" ₽";

}


/* =========================
   РАЙОНЫ
========================= */

function getCityDistricts(){

const city = localStorage.getItem("newShopCity");

if(!city) return [];

return districtsDB[city] || [];

}


function renderDistricts(){

const districts=getCityDistricts();

let html=`
<div class="district-block">

<h3>📍 Выберите район</h3>

<div class="district-grid">
`;

districts.forEach(d=>{

const icon=d.available?"🧲":"❌";

html+=`
<div
id="district-${d.name}"
class="district-item ${!d.available?"disabled":""}"
onclick="${d.available?`selectDistrict('${d.name}')`:""}">
${icon} ${d.name}
</div>
`;

});

html+=`</div></div>`;

return html;

}


function selectDistrict(name){

selectedDistrict=name;

document.querySelectorAll(".district-item")
.forEach(e=>e.classList.remove("active"));

const el=document.getElementById("district-"+name);

if(el) el.classList.add("active");

}


/* =========================
   КОРЗИНА
========================= */

function addToCart(name,basePrice){

if(!selectedDistrict){
alert("Выберите район");
return;
}

let price=selectedPack?selectedPack.price:basePrice;

const item={
name,
price,
district:selectedDistrict,
pack:selectedPack?selectedPack.size:null
};

cart.push(item);

localStorage.setItem("cart",JSON.stringify(cart));

alert("Товар добавлен в корзину");

}


function openCart(){

cart = JSON.parse(localStorage.getItem("cart") || "[]");

let html=`<button onclick="enterNewShop()">← Назад</button><h2>Корзина</h2>`;

if(cart.length===0){

html+="<p>Корзина пуста</p>";

}else{

let total=0;

cart.forEach((item,i)=>{

total+=item.price;

html+=`
<div class="cart-item">
<div>${item.name}</div>
<div>${item.pack?item.pack+" — ":""}${item.price} ₽</div>
<div>${item.district}</div>
<button onclick="removeFromCart(${i})">Удалить</button>
</div>
`;

});

html+=`
<h3>Итого: ${total} ₽</h3>
<button class="product-add">Оплатить</button>
`;

}

document.getElementById("new-shop-content").innerHTML=html;

}


function removeFromCart(i){

cart.splice(i,1);

localStorage.setItem("cart",JSON.stringify(cart));

openCart();

}


/* =========================
   ГОРОД
========================= */

function changeCity(){

localStorage.removeItem("newShopCity");

showCitySelect();

}


/* =========================
   EXPORT
========================= */

window.enterNewShop=enterNewShop;
window.leaveNewShop=leaveNewShop;
window.renderNewCategories=renderNewCategories;
window.openNewCategory=openNewCategory;
window.openNewSub=openNewSub;
window.openNewProduct=openNewProduct;
