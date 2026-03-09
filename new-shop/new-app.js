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

alert("renderNewCategories запустилась");
alert(JSON.stringify(newProducts));

let html = `
<div style="display:grid;grid-template-columns:1fr;gap:14px;margin-top:20px;">
`;
Object.keys(newProducts).forEach(category => {

html += `
<div class="product-card">

<div class="category-content">
<div class="category-title">${category}</div>
</div>

</div>
`;

});

html += `</div>`;

document.getElementById("new-shop-content").innerHTML = html;

}
