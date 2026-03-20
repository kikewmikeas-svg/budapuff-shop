// ==============================
//   КОРЗИНА — new-cart.js
// ==============================

function buyProduct(name, categoryId, itemId, variantId){
  if(!window._selectedPack || !window._selectedDistrict){
    return;
  }

  const districtType = window._cityStock
    ? (window._cityStock[window._selectedDistrict]?.type || '')
    : '';

  window._backCategoryId = categoryId;
  window._backItemId = itemId;
  window._backVariantId = variantId;

  const isSmallCity = window._selectedDistrict === "Весь город";

  openProductPayment(
    name,
    window._selectedPack,
    window._selectedDistrict,
    isSmallCity ? "" : districtType,
    window._selectedPrice
  );
}

function removeFromCart(id){
  let cart = JSON.parse(localStorage.getItem("newShopCart") || "[]");
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem("newShopCart", JSON.stringify(cart));
  const container = document.getElementById("shopPageContent");
  renderNewCart(container);
}

function clearCart(){
  localStorage.removeItem("newShopCart");
  const container = document.getElementById("shopPageContent");
  renderNewCart(container);
}

function checkoutCart(){
  const cart = JSON.parse(localStorage.getItem("newShopCart") || "[]");
  if(!cart.length) return;

  const orders = JSON.parse(localStorage.getItem("newShopOrders") || "[]");

  const order = {
    id: Date.now(),
    date: new Date().toLocaleDateString("ru-RU"),
    items: cart,
    total: cart.reduce((sum, i) => sum + Number(i.price), 0),
    status: "active"
  };

  orders.push(order);
  localStorage.setItem("newShopOrders", JSON.stringify(orders));
  localStorage.removeItem("newShopCart");

  showNewToast("✅ Заказ оформлен!");

  setTimeout(() => {
    const container = document.getElementById("shopPageContent");
    renderNewCart(container);
  }, 1000);
}

function renderNewCart(container){
  if(!container){
    container = document.getElementById("shopPageContent");
    if(!container) return;
  }

  const cart = JSON.parse(localStorage.getItem("newShopCart") || "[]");

  let cartHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += Number(item.price);
    cartHTML += `
    <div class="ns-cart-row">
      <div class="ns-cart-info">
        <div class="ns-cart-name">${item.name}</div>
        <div class="ns-cart-meta">
          <span class="ns-cart-tag">${item.pack}</span>
          <span class="ns-cart-tag">${item.district}</span>
        </div>
      </div>
      <div class="ns-cart-right">
        <div class="ns-cart-price">${item.price} ₽</div>
        <div class="ns-cart-del" onclick="removeFromCart(${item.id})">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6M14 11v6"/></svg>
        </div>
      </div>
    </div>`;
  });

  container.innerHTML = `
  <div class="page">

    <div class="ns-topup-header">
      <div class="ns-topup-tag"><span class="ns-online-dot"></span> Корзина</div>
      <div class="ns-topup-title">Ваш заказ</div>
      <div class="ns-topup-desc">${cart.length ? cart.length + ' ' + (cart.length === 1 ? 'товар' : 'товара') : 'Пока ничего нет'}</div>
    </div>

    ${cart.length ? `
    <div class="ns-cart-list">
      ${cartHTML}
    </div>

    <div class="ns-cart-total">
      <span>Итого</span>
      <span class="ns-cart-total-val">${total} ₽</span>
    </div>

    <div class="ns-cart-checkout" onclick="checkoutCart()">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      Оформить заказ
    </div>

    <div class="ns-cart-clear" onclick="clearCart()">Очистить корзину</div>

    ` : `
    <div class="ns-cart-empty">
      <div class="ns-cart-empty-icon">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61h9.72a2 2 0 001.99-1.61L23 6H6"/></svg>
      </div>
      <div class="ns-cart-empty-text">Корзина пуста</div>
      <div class="ns-cart-empty-sub">Добавьте товары из каталога</div>
      <div class="ns-cart-empty-btn" onclick="openTab('catalog')">В каталог →</div>
    </div>
    `}

    <div class="ns-topup-back-btn" onclick="openTab('profile')">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
      Назад в профиль
    </div>

  </div>
  `;
}