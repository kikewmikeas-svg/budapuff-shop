// ==============================
//   ОПЛАТА ТОВАРА — new-payment.js
//   Только для оплаты из каталога!
// ==============================

function openProductPayment(name, pack, district, districtType, price){

  const cardTotal = Math.round(price * 1.1);
const btc = (price / 5593041).toFixed(8);
const usdt = (price / 79.2).toFixed(2);

const typeEmoji = {
  '⛏️': 'Прикоп ⛏️',
  '🧲': 'Магнит 🧲',
  '🚪': 'Подъезд 🚪',
  '🔒': 'Тайник 🔒'
};
const districtTypeLabel = typeEmoji[districtType] || (districtType ? districtType : 'Весь город 🏙️');

const container = document.getElementById("shopPageContent");

container.innerHTML = `
  <div class="page">

    <div class="ns-topup-header">
      <div class="ns-topup-tag"><span class="ns-online-dot"></span> ОФОРМЛЕНИЕ ЗАКАЗА</div>
      <div class="ns-topup-title">Детали и оплата</div>
      <div class="ns-topup-desc">Проверьте заказ перед оплатой</div>
    </div>

    <div class="ns-pay-order-card">
      <div class="ns-pay-order-label">ВАШ ЗАКАЗ</div>
      <div class="ns-pay-order-product">
        <div class="ns-pay-order-emoji">📦</div>
        <div class="ns-pay-order-info">
          <div class="ns-pay-order-name">${name}</div>
          <div class="ns-pay-order-desc">${pack} · ${district} · ${districtTypeLabel}</div>
        </div>
      </div>
      <div class="ns-pay-order-grid">
        <div class="ns-pay-order-stat">
          <div class="ns-pay-order-stat-label">ФАСОВКА</div>
          <div class="ns-pay-order-stat-val green">${pack}</div>
        </div>
        <div class="ns-pay-order-stat">
          <div class="ns-pay-order-stat-label">РАЙОН</div>
          <div class="ns-pay-order-stat-val">${district}</div>
        </div>
        <div class="ns-pay-order-stat">
          <div class="ns-pay-order-stat-label">ТИП</div>
          <div class="ns-pay-order-stat-val">${districtTypeLabel}</div>
        </div>
        <div class="ns-pay-order-stat">
          <div class="ns-pay-order-stat-label">СУММА</div>
          <div class="ns-pay-order-stat-val">${price} ₽</div>
        </div>
      </div>
    </div>

    <div class="ns-pay-methods-card">
      <div class="ns-pay-order-label">СПОСОБ ОПЛАТЫ</div>
      <div class="ns-pay-methods-list">

        <div class="ns-pay-method active" id="payMethod_card" onclick="selectPayMethod('card')">
          <div class="ns-pay-method-icon" style="background:rgba(42,255,114,.1);">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2aff72" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
          </div>
          <div class="ns-pay-method-info">
            <div class="ns-pay-method-name">Карта РФ / СБП</div>
            <div class="ns-pay-method-sub">Итого: <span style="color:#ff9500;font-weight:700;">${cardTotal} ₽</span> (+10% комиссия)</div>
          </div>
          <div class="ns-pay-method-check" id="check_card">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
        </div>

        <div class="ns-pay-method" id="payMethod_btc" onclick="selectPayMethod('btc')">
          <div class="ns-pay-method-icon" style="background:rgba(42,255,114,.1);">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2aff72" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
          </div>
          <div class="ns-pay-method-info">
            <div class="ns-pay-method-name">Bitcoin (BTC)</div>
            <div class="ns-pay-method-sub">≈ ${btc} BTC · без комиссии</div>
          </div>
          <div class="ns-pay-method-check empty" id="check_btc"></div>
        </div>

        <div class="ns-pay-method" id="payMethod_usdt" onclick="selectPayMethod('usdt')">
          <div class="ns-pay-method-icon" style="background:rgba(42,255,114,.1);">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2aff72" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>
          </div>
          <div class="ns-pay-method-info">
            <div class="ns-pay-method-name">USDT (TRC-20)</div>
            <div class="ns-pay-method-sub">≈ ${usdt} USDT · без комиссии</div>
          </div>
          <div class="ns-pay-method-check empty" id="check_usdt"></div>
        </div>

      </div>
    </div>

    <div class="ns-pay-steps-card">
      <div class="ns-pay-order-label">КАК ЭТО РАБОТАЕТ</div>
      <div class="ns-pay-steps">

        <div class="ns-pay-step">
          <div class="ns-pay-step-num">1</div>
          <div class="ns-pay-step-body">
            <div class="ns-pay-step-title">Оплатите заказ</div>
            <div class="ns-pay-step-desc">Выберите удобный способ и произведите оплату. Время на оплату — <span style="color:#ff9500;font-weight:700;">20 минут</span></div>
          </div>
        </div>

        <div class="ns-pay-step-line"></div>

        <div class="ns-pay-step">
          <div class="ns-pay-step-num">2</div>
          <div class="ns-pay-step-body">
            <div class="ns-pay-step-title">Оператор выйдет на связь</div>
            <div class="ns-pay-step-desc">В течение <span style="color:#fff;font-weight:700;">15 минут</span> после подтверждения оплаты</div>
          </div>
        </div>

        <div class="ns-pay-step-line"></div>

        <div class="ns-pay-step">
          <div class="ns-pay-step-num">3</div>
          <div class="ns-pay-step-body">
            <div class="ns-pay-step-title">Получите координаты</div>
            <div class="ns-pay-step-desc">В бота придёт геолокация + фото выбранного товара</div>
          </div>
        </div>

        <div class="ns-pay-step-line"></div>

        <div class="ns-pay-step">
          <div class="ns-pay-step-num red">4</div>
          <div class="ns-pay-step-body">
            <div class="ns-pay-step-title">Проблема с заказом?</div>
            <div class="ns-pay-step-desc">Если столкнулись с проблемой — напишите <span style="color:#2aff72;font-weight:700;">администратору</span></div>
          </div>
        </div>

      </div>
    </div>

    <div class="ns-pay-checkout-btn" id="payCheckoutBtn" onclick="proceedProductPayment(${price})">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2.5"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
      Оплатить ${cardTotal} ₽
    </div>

    <div class="ns-pay-bottom-btns">
      <div class="ns-pay-bottom-btn" onclick="openNewProduct(window._backCategoryId, window._backItemId, window._backVariantId)">← Назад</div>
      <div class="ns-pay-bottom-btn" onclick="openProfilePage('cart')">В корзину</div>
    </div>

  </div>
  `;

  window._payMethod = 'card';
  window._payPrice = price;
  window._payCardTotal = cardTotal;
  window._payBtc = btc;
  window._payUsdt = usdt;
  window._payName = name;
  window._payPack = pack;
  window._payDistrict = district;
  window._payDistrictType = districtType;
}

function selectPayMethod(method){
  window._payMethod = method;

  ['card','btc','usdt'].forEach(m => {
    const el = document.getElementById('payMethod_' + m);
    const check = document.getElementById('check_' + m);
    if(m === method){
      el.classList.add('active');
      check.classList.remove('empty');
      check.innerHTML = `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>`;
    } else {
      el.classList.remove('active');
      check.classList.add('empty');
      check.innerHTML = '';
    }
  });

  const btn = document.getElementById('payCheckoutBtn');
  if(method === 'card'){
    btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2.5"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg> Оплатить ${window._payCardTotal} ₽`;
  } else if(method === 'btc'){
    btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2.5"><circle cx="12" cy="12" r="10"/></svg> Оплатить ${window._payBtc} BTC`;
  } else {
    btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2.5"><circle cx="12" cy="12" r="10"/></svg> Оплатить ${window._payUsdt} USDT`;
  }
}

function proceedProductPayment(amount){
  const method = window._payMethod;
  if(method === 'card'){
    openProductCardPayment(amount);
  } else if(method === 'btc'){
    openProductBTCInvoice(amount);
  } else {
    openProductUSDTInvoice(amount);
  }
}

function openProductCardPayment(amount){
  const cardTotal = Math.round(amount * 1.1);
  const orderId = String(Math.floor(100000 + Math.random() * 900000));
  const userId = window.tgUser ? window.tgUser.id : "unknown";
  const city = localStorage.getItem("newShopCity") || "?";
  const container = document.getElementById("shopPageContent");

  const typeEmoji = {
    '⛏️': 'Прикоп ⛏️',
    '🧲': 'Магнит 🧲',
    '🚪': 'Подъезд 🚪',
    '🔒': 'Тайник 🔒'
  };
  const districtTypeLabel = typeEmoji[window._payDistrictType] || window._payDistrictType || '—';

  fetch("http://localhost:3001/api/log-card-payment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      orderId, amount: cardTotal, type: 'product',
      userId, city,
      productName: window._payName || "?",
      pack: window._payPack || "?",
      district: window._payDistrict || "?",
      districtType: window._payDistrictType || "?"
    })
  }).catch(e => console.log("log error", e));

  container.innerHTML = `
  <div class="page">

    <div class="ns-card-pay-hero">
      <div class="ns-card-pay-hero-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2aff72" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
      </div>
      <div class="ns-card-pay-tag">● ОПЛАТА КАРТОЙ</div>
      <div class="ns-card-pay-amount">${cardTotal.toLocaleString("ru")} ₽</div>
      <div class="ns-card-pay-hero-sub">Карта РФ / СБП · #${orderId}</div>
    </div>

    <div class="ns-card-pay-info">
      <div class="ns-card-pay-row">
        <span class="ns-card-pay-row-label">Товар</span>
        <span class="ns-card-pay-row-val">${window._payName || "?"}</span>
      </div>
      <div class="ns-card-pay-row">
        <span class="ns-card-pay-row-label">Фасовка</span>
        <span class="ns-card-pay-row-val">${window._payPack || "?"}</span>
      </div>
      <div class="ns-card-pay-row">
        <span class="ns-card-pay-row-label">Район</span>
        <span class="ns-card-pay-row-val">${window._payDistrict || "?"}</span>
      </div>
      <div class="ns-card-pay-row">
        <span class="ns-card-pay-row-label">Тип</span>
        <span class="ns-card-pay-row-val">${districtTypeLabel}</span>
      </div>
      <div class="ns-card-pay-row">
        <span class="ns-card-pay-row-label">Итого</span>
        <span class="ns-card-pay-row-val" style="color:#2aff72;font-size:16px;font-weight:900;">${cardTotal.toLocaleString("ru")} ₽</span>
      </div>
    </div>

    <form method="post" action="https://marketplays.pro/api/request/" target="_blank" style="margin-bottom:8px;" onsubmit="return onCardPaySubmit(this)">
  <input type="hidden" name="amount" value="${cardTotal}">
  <input type="hidden" name="merchant_order_id" value="${orderId}">
  <input type="hidden" name="use_card_payment" value="RUB">
  <input type="hidden" name="api_key" value="e3099f548981338a5bc53167aa5a9309c73c8084f15816376e8aa6c622507013">
  <input type="hidden" name="success_url" value="https://t.me/budapuff_bot">
  <input type="hidden" name="fail_url" value="https://t.me/budapuff_bot">
  <button type="submit" class="ns-card-pay-btn" id="cardPayBtn">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2.5"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
    <span>Перейти к оплате</span>
  </button>
</form>

<div class="ns-card-pay-btn-secondary ns-card-paid-btn-disabled" id="cardPaidBtn" onclick="onCardPaidClick()">
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
  <span>Я оплатил — жду подтверждения</span>
</div>

    <div class="ns-card-back" onclick="openProductPaymentBack()">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
      <span>НАЗАД</span>
    </div>

  </div>`;
}

function onCardPaySubmit(form){
  if(!checkCardPaymentLimit()) return false;
  // Активируем кнопку "Я оплатил"
  setTimeout(() => {
    const btn = document.getElementById('cardPaidBtn');
    if(btn){
      btn.classList.remove('ns-card-paid-btn-disabled');
      btn.classList.add('ns-card-paid-btn-active');
    }
    showProductPaymentWaiting();
  }, 1500);
  return true;
}

function onCardPaidClick(){
  const btn = document.getElementById('cardPaidBtn');
  if(btn && btn.classList.contains('ns-card-paid-btn-disabled')){
    showNewToast('⚠ Сначала перейдите к оплате');
    return;
  }
  showProductPaymentWaiting();
}

function openProductBTCInvoice(amount){
  const btc = (amount / 5593041).toFixed(8);
  const container = document.getElementById("shopPageContent");

  container.innerHTML = `
  <div class="page">
  <div class="ns-crypto-page-header">
      <div>
        <div class="ns-crypto-page-tag">● ОПЛАТА BITCOIN</div>
        <div class="ns-crypto-page-title">Переведите<br>Bitcoin</div>
      </div>
    </div>
    <div class="ns-prod-timer-box">
  <div class="ns-prod-timer-label">
    <div class="ns-prod-timer-sub">ОСТАЛОСЬ</div>
    <div class="ns-prod-timer-val" id="btcTimer">20:00</div>
  </div>
  <div class="ns-prod-timer-track">
    <div class="ns-prod-timer-fill" id="btcTimerFill"></div>
  </div>
</div>
    <div class="ns-crypto-amount-block">
      <div class="ns-crypto-amount-label">К ОПЛАТЕ</div>
      <div class="ns-crypto-amount-num">${btc}</div>
      <div class="ns-crypto-amount-unit">BTC</div>
      <div class="ns-crypto-amount-divider"></div>
      <div class="ns-crypto-amount-sub">≈ ${amount} ₽ · курс 1 BTC = 5 593 041 ₽</div>
    </div>
    <div class="ns-crypto-addr-block">
      <div class="ns-crypto-addr-label">АДРЕС КОШЕЛЬКА</div>
      <div class="ns-crypto-addr-row">
        <div class="ns-crypto-qr-box">
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=bitcoin:bc1qdryek3s05rf5cv77gqrg5t7dcu4lylp2zas5n0?amount=${btc}&bgcolor=111111&color=ffffff" style="width:60px;height:60px;border-radius:8px;">
        </div>
        <code class="ns-crypto-addr-text">bc1qdryek3s05rf5cv77gqrg5t7dcu4lylp2zas5n0</code>
      </div>
      <div class="ns-crypto-copy-btn" id="btcCopyBtn" onclick="copyNewAddress('bc1qdryek3s05rf5cv77gqrg5t7dcu4lylp2zas5n0', 'btcCopyBtn')">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2.5"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
        <span>Копировать адрес</span>
      </div>
    </div>
    <div class="ns-crypto-upload-block">
      <div class="ns-crypto-upload-label">ЗАГРУЗИТЬ ЧЕК</div>
      <label class="ns-crypto-upload-zone">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="1.5" style="margin-bottom:8px;"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
        <div class="ns-crypto-upload-title">Нажмите чтобы загрузить</div>
        <div class="ns-crypto-upload-sub">Скриншот или фото чека</div>
        <input type="file" id="receiptFile" accept="image/*" style="display:none" onchange="handleReceiptUpload(event)">
      </label>
      <div id="receiptPreview"></div>
    </div>
    <div class="ns-crypto-warning">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ff4d4d" stroke-width="2" style="flex-shrink:0;"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/></svg>
      <span>Только сеть <b style="color:#ff4d4dcc;">Bitcoin</b> — другие не поддерживаются</span>
    </div>
    <div class="ns-crypto-submit-btn" onclick="submitProductPayment()">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      <span>Я оплатил — отправить чек</span>
    </div>
    <div class="ns-crypto-back" onclick="openProductPaymentBack()">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
      <span>НАЗАД К ВЫБОРУ ОПЛАТЫ</span>
    </div>
  </div>
  `;

  startPaymentTimer('btcTimer');
}

function openProductUSDTInvoice(amount){
  const usdt = (amount / 79.2).toFixed(2);
  const container = document.getElementById("shopPageContent");

  container.innerHTML = `
  <div class="page">
    <div class="ns-crypto-page-header">
      <div>
        <div class="ns-crypto-page-tag">● ОПЛАТА USDT TRC-20</div>
        <div class="ns-crypto-page-title">Переведите<br>USDT</div>
      </div>
    </div>
    <div class="ns-prod-timer-box">
  <div class="ns-prod-timer-label">
    <div class="ns-prod-timer-sub">ОСТАЛОСЬ</div>
    <div class="ns-prod-timer-val" id="usdtTimer">20:00</div>
  </div>
  <div class="ns-prod-timer-track">
    <div class="ns-prod-timer-fill" id="usdtTimerFill"></div>
  </div>
</div>
    <div class="ns-crypto-amount-block">
      <div class="ns-crypto-amount-label">К ОПЛАТЕ</div>
      <div class="ns-crypto-amount-num">${usdt}</div>
      <div class="ns-crypto-amount-unit">USDT</div>
      <div class="ns-crypto-amount-divider"></div>
      <div class="ns-crypto-amount-sub">≈ ${amount} ₽ · курс 1 USDT = 79.2 ₽</div>
    </div>
    <div class="ns-crypto-addr-block">
      <div class="ns-crypto-addr-label">АДРЕС КОШЕЛЬКА</div>
      <div class="ns-crypto-addr-row">
        <div class="ns-crypto-qr-box">
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=tron:TT2QSmsMoruzZqwuXSXVqbKv83BSoeVev1?amount=${usdt}&bgcolor=111111&color=ffffff" style="width:60px;height:60px;border-radius:8px;">
        </div>
        <code class="ns-crypto-addr-text">TT2QSmsMoruzZqwuXSXVqbKv83BSoeVev1</code>
      </div>
      <div class="ns-crypto-copy-btn" id="usdtCopyBtn" onclick="copyNewAddress('TT2QSmsMoruzZqwuXSXVqbKv83BSoeVev1', 'usdtCopyBtn')">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2.5"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
        <span>Копировать адрес</span>
      </div>
    </div>
    <div class="ns-crypto-upload-block">
      <div class="ns-crypto-upload-label">ЗАГРУЗИТЬ ЧЕК</div>
      <label class="ns-crypto-upload-zone">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="1.5" style="margin-bottom:8px;"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
        <div class="ns-crypto-upload-title">Нажмите чтобы загрузить</div>
        <div class="ns-crypto-upload-sub">Скриншот или фото чека</div>
        <input type="file" id="receiptFile" accept="image/*" style="display:none" onchange="handleReceiptUpload(event)">
      </label>
      <div id="receiptPreview"></div>
    </div>
    <div class="ns-crypto-warning">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ff4d4d" stroke-width="2" style="flex-shrink:0;"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/></svg>
      <span>Только сеть <b style="color:#ff4d4dcc;">TRC-20</b> — другие не поддерживаются</span>
    </div>
    <div class="ns-crypto-submit-btn" onclick="submitProductPayment()">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      <span>Я оплатил — отправить чек</span>
    </div>
    <div class="ns-crypto-back" onclick="openProductPaymentBack()">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
      <span>НАЗАД К ВЫБОРУ ОПЛАТЫ</span>
    </div>
  </div>
  `;

  startPaymentTimer('usdtTimer');
}

async function submitProductPayment(){
  const fileInput = document.getElementById("receiptFile");
  const file = fileInput ? fileInput.files[0] : null;

  if(!file){
    showNewToast("⚠ Загрузите чек");
    return;
  }

  // Сразу показываем экран ожидания — не ждём сервер
  showProductPaymentWaiting();

  const city = localStorage.getItem("newShopCity") || "неизвестно";
  const userId = window.tgUser ? window.tgUser.id : "unknown";

  const formData = new FormData();
  formData.append("receipt", file);
  formData.append("productName", window._payName || "?");
  formData.append("pack", window._payPack || "?");
  formData.append("district", window._payDistrict || "?");
  formData.append("districtType", window._payDistrictType || "?");
  formData.append("city", city);
  formData.append("userId", userId);
  formData.append("crypto", window._payMethod === 'btc' ? 'BTC' : 'USDT');
  formData.append("amount", window._payPrice || "?");

  // Отправляем в фоне — без await
  fetch("http://localhost:3001/api/upload-product-payment", { method:"POST", body:formData })
    .catch(e => console.log("upload error", e));
}

function openProductPaymentBack(){
  if(window._payPrice){
    openProductPayment(
      window._payName || '',
      window._payPack || '',
      window._payDistrict || '',
      window._payDistrictType || '',
      window._payPrice
    );
  }
}

function showProductPaymentWaiting(){
  const orderId = 'ORD-' + Math.floor(Math.random() * 90000 + 10000);
  const container = document.getElementById("shopPageContent");

  container.innerHTML = `
  <div class="page">
    <div style="text-align:center;padding:30px 0 20px;">
      <div class="ns-wait-icon">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#2aff72" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      </div>
      <div style="font-size:10px;letter-spacing:2px;color:#e8ff4a;font-weight:700;margin-bottom:8px;">ЧЕК ОТПРАВЛЕН</div>
      <div style="font-size:26px;font-weight:800;color:#fff;letter-spacing:-0.5px;margin-bottom:8px;">Платёж на проверке</div>
      <div style="font-size:13px;color:#444;line-height:1.6;">Администратор проверяет оплату.<br>Обычно это занимает до 15 минут.</div>
    </div>
    <div class="ns-wait-steps-card">
      <div class="ns-pay-order-label">ЧТО БУДЕТ ДАЛЬШЕ</div>
      <div style="display:flex;flex-direction:column;gap:12px;">
        <div class="ns-wait-step">
          <div class="ns-wait-step-dot done">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2aff72" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div>
            <div class="ns-wait-step-title">Чек принят</div>
            <div class="ns-wait-step-sub">Ваш чек отправлен на проверку</div>
          </div>
        </div>
        <div class="ns-wait-step-line"></div>
        <div class="ns-wait-step">
          <div class="ns-wait-step-dot pending">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ff9500" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </div>
          <div>
            <div class="ns-wait-step-title">Проверка оплаты</div>
            <div class="ns-wait-step-sub">Администратор проверяет перевод</div>
          </div>
        </div>
        <div class="ns-wait-step-line"></div>
        <div class="ns-wait-step">
          <div class="ns-wait-step-dot inactive">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#444" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <div>
            <div class="ns-wait-step-title inactive">Получите координаты</div>
            <div class="ns-wait-step-sub">Геолокация + фото придут в бота</div>
          </div>
        </div>
      </div>
    </div>
    <div class="ns-wait-order-row">
      <div>
        <div class="ns-pay-order-label">НОМЕР ЗАКАЗА</div>
        <div class="ns-wait-order-id">#${orderId}</div>
      </div>
      <div class="ns-wait-status-badge">На проверке</div>
    </div>
    <div class="ns-wait-support" onclick="window.open('https://t.me/budapuff_support')">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2aff72" stroke-width="2" style="flex-shrink:0;"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
      <div style="font-size:12px;color:#2aff72;line-height:1.5;">Если возникли вопросы — <span style="font-weight:800;text-decoration:underline;">напишите администратору</span></div>
    </div>
    <div class="ns-topup-back-btn" onclick="openTab('catalog')">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
      На главную
    </div>
  </div>
  `;
}

function copyNewAddress(address, btnId){
  navigator.clipboard.writeText(address);
  const btn = document.getElementById(btnId);
  const orig = btn.innerHTML;
  btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Адрес скопирован!`;
  showNewToast('📋 Адрес скопирован');
  setTimeout(() => { btn.innerHTML = orig; }, 2000);
}

function startPaymentTimer(elemId) {
  const total = 20 * 60;
  let seconds = total;
  const fillId = elemId + 'Fill';
  const interval = setInterval(() => {
    if (!document.getElementById(elemId)) { clearInterval(interval); return; }
    seconds--;
    if (seconds <= 0) {
      clearInterval(interval);
      document.getElementById(elemId).textContent = '00:00';
      const fill = document.getElementById(fillId);
      if (fill) fill.style.width = '0%';
      return;
    }
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    document.getElementById(elemId).textContent = `${m}:${s}`;
    const fill = document.getElementById(fillId);
    if (fill) {
      fill.style.width = (seconds / total * 100) + '%';
      if (seconds < 5 * 60) fill.style.background = '#ff4d4d';
      else if (seconds < 10 * 60) fill.style.background = 'linear-gradient(90deg, #e8ff4a, #ff9500)';
    }
  }, 1000);
}

function handleReceiptUpload(event){
  const file = event.target.files[0];
  if(!file) return;
  if(!file.type.startsWith("image/")){
    alert("Можно загрузить только изображение");
    return;
  }
  const reader = new FileReader();
  reader.onload = function(e){
    document.getElementById("receiptPreview").innerHTML = `
    <div class="ns-receipt-preview">
      <img src="${e.target.result}" class="receipt-image">
      <div class="ns-receipt-preview-info">
        <div class="ns-receipt-preview-name">${file.name}</div>
        <div class="ns-receipt-preview-size">${(file.size / 1024).toFixed(0)} KB</div>
      </div>
      <div class="ns-receipt-preview-ok">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e8ff4a" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
    </div>`;
  };
  reader.readAsDataURL(file);
}

function checkCardPaymentLimit(){
  const key = 'cardPayAttempts';
  const blockKey = 'cardPayBlockedUntil';
  const now = Date.now();

  // Проверяем блокировку
  const blockedUntil = parseInt(localStorage.getItem(blockKey) || '0');
  if(now < blockedUntil){
    const minutesLeft = Math.ceil((blockedUntil - now) / 60000);
    showNewToast(`⛔ Заблокировано. Повторите через ${minutesLeft} мин.`);
    return false;
  }

  // Считаем попытки
  const attempts = parseInt(localStorage.getItem(key) || '0');
  if(attempts >= 3){
    // Блокируем на 15 минут
    localStorage.setItem(blockKey, String(now + 15 * 60 * 1000));
    localStorage.setItem(key, '0');
    showNewToast('⛔ Слишком много попыток. Блокировка на 15 минут.');
    return false;
  }

  localStorage.setItem(key, String(attempts + 1));
  return true;
}

function resetCardPaymentLimit(){
  localStorage.removeItem('cardPayAttempts');
  localStorage.removeItem('cardPayBlockedUntil');
}