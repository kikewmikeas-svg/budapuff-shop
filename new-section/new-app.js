// ⚡ Новый раздел — категории
function renderNewSection() {

let html = `
<button id="backBtn" onclick="renderCategories()">← Назад</button>

<h2>⚡ Новый раздел</h2>

<div class="products-grid">
`;

Object.keys(newProducts).forEach(category => {

html += `
<div class="product-card" onclick="openNewCategory('${category}')">

<div class="category-content">
<div class="category-title">${category}</div>
</div>

</div>
`;

});

html += `</div>`;

document.getElementById("main").innerHTML = html;

}



////////////////////////////////////////////////////


// 📂 Открыть категорию (подкатегории)

function openNewCategory(category){

const subs = newProducts[category];

let html = `
<button id="backBtn" onclick="renderNewSection()">← Назад</button>

<h2>${category}</h2>

<div class="products-grid">
`;

Object.keys(subs).forEach(sub => {

html += `
<div class="product-card" onclick="openNewSub('${category}','${sub}')">

<div class="category-content">
<div class="category-title">${sub}</div>
</div>

</div>
`;

});

html += `</div>`;

document.getElementById("main").innerHTML = html;

}



////////////////////////////////////////////////////


// 🛒 Открыть подкатегорию (товары)

function openNewSub(category, sub){

const products = newProducts[category][sub];

let html = `
<button id="backBtn" onclick="openNewCategory('${category}')">← Назад</button>

<h2>${sub}</h2>

<div class="products-grid">
`;

products.forEach(product => {

html += `
<div class="product-card">

<div class="product-name">${product.name}</div>
<div class="product-price">${product.price} ₽</div>

<button onclick="addToCart('${product.name}', ${product.price})">
В корзину
</button>

</div>
`;

});

html += `</div>`;

document.getElementById("main").innerHTML = html;

}
