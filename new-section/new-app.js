function renderNewSection() {

let html = `
<button id="backBtn" onclick="renderCategories()">← Назад</button>

<h2>⚡ Новый раздел</h2>

<div class="products-grid">
`;

Object.keys(newProducts).forEach(cat => {

html += `
<div class="product-card"
onclick="openNewCategory('${cat}')">

<div class="category-content">
<div class="category-title">${cat}</div>
</div>

</div>
`;

});

html += `</div>`;

document.getElementById("main").innerHTML = html;

}
