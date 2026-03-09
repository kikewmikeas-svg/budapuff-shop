function enterNewShop(){

document.getElementById("main").innerHTML = `

<div class="new-shop">

<button onclick="leaveNewShop()">← Вернуться в старый магазин</button>

<h2>Новый магазин</h2>

<div id="new-shop-content"></div>

</div>

`;

}
function leaveNewShop(){

if(confirm("Вы уверены? Все данные нового магазина будут очищены.")){

renderCategories();

}

}
