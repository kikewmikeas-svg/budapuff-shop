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

products.forEach(p => {

html += `
<div class="product-item">

<div class="product-title">
${p.name}
</div>

<div class="product-bottom">

<div class="product-price">
${p.price} ₽
</div>

<button class="product-buy">
В корзину
</button>

</div>

</div>
`;

});

html += `</div>`;

document.getElementById("new-shop-content").innerHTML = html;

}
