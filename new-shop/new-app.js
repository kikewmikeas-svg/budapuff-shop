function enterNewShop(){

document.getElementById("main").innerHTML = `

<div class="new-shop">

<button onclick="leaveNewShop()">← Вернуться в старый магазин</button>

<h2>Новый магазин</h2>

<div id="new-shop-content"></div>

</div>

`;

renderNewCategories();

}

function leaveNewShop(){

if(confirm("Вы уверены? Все данные нового магазина будут очищены.")){

renderCategories();

}

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
onclick="openProduct('${category.replace(/'/g,"\\'")}','${sub.replace(/'/g,"\\'")}',${i})">

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
function openProduct(category, sub, index){

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

</div>
`;

document.getElementById("new-shop-content").innerHTML = html;

}
window.enterNewShop = enterNewShop;
window.leaveNewShop = leaveNewShop;
window.renderNewCategories = renderNewCategories;
window.openNewCategory = openNewCategory;
window.openNewSub = openNewSub;
window.openProduct = openProduct;
