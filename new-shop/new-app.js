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
<div class="new-card">
${category}
</div>
`;

});

html += `</div>`;

document.getElementById("new-shop-content").innerHTML = html;

}
