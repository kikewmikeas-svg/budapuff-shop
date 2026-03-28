// ==============================
//   ПОПОЛНЕНИЕ БАЛАНСА — new-topup-payment.js
//   Только для пополнения из профиля!
// ==============================

function openPaymentMethods(amount){
  const container = document.getElementById("shopPageContent");
  const cardTotal = Math.round(amount * 1.1);
 container.innerHTML = `
  <div class="page">

    <div class="ns-pay-hero">
      <div class="ns-pay-hero-tag">● ОПЛАТА</div>
      <div class="ns-pay-hero-amount">${amount.toLocaleString("ru")} ₽</div>
      <div class="ns-pay-hero-sub">Выберите удобный способ</div>
    </div>

    <div class="ns-pay-section-label">СПОСОБ ОПЛАТЫ</div>

    <div class="ns-pay-cards">
      <div class="ns-pay-card card-accent" onclick="createTopupPayment('card', ${amount})">
        <div class="ns-pay-card-top">
          <div class="ns-pay-card-left">
            <div class="ns-pay-card-icon" style="background:#e8ff4a12;border:1px solid #e8ff4a25;">💳</div>
            <span class="ns-pay-card-name">Карта РФ / СБП</span>
          </div>
          <span class="ns-pay-card-badge red">+10%</span>
        </div>
        <div class="ns-pay-card-bottom">
          <span class="ns-pay-card-sub">${cardTotal.toLocaleString("ru")} ₽ · +10% комиссия</span>
          <span class="ns-pay-card-time">~5 мин</span>
        </div>
      </div>

      <div class="ns-pay-card" onclick="createTopupPayment('btc', ${amount})">
        <div class="ns-pay-card-top">
          <div class="ns-pay-card-left">
            <div class="ns-pay-card-icon" style="background:#f7931a12;border:1px solid #f7931a25;color:#f7931a;font-size:13px;font-weight:800;">₿</div>
            <span class="ns-pay-card-name">Bitcoin (BTC)</span>
          </div>
          <span class="ns-pay-card-badge green">0%</span>
        </div>
        <div class="ns-pay-card-bottom">
          <span class="ns-pay-card-sub">Анонимно · без комиссии</span>
          <span class="ns-pay-card-time">~15 мин</span>
        </div>
      </div>

      <div class="ns-pay-card" onclick="createTopupPayment('usdt', ${amount})">
        <div class="ns-pay-card-top">
          <div class="ns-pay-card-left">
            <div class="ns-pay-card-icon" style="background:#26a17b12;border:1px solid #26a17b25;color:#26a17b;font-size:13px;font-weight:800;">₮</div>
            <span class="ns-pay-card-name">USDT TRC-20</span>
          </div>
          <span class="ns-pay-card-badge green">0%</span>
        </div>
        <div class="ns-pay-card-bottom">
          <span class="ns-pay-card-sub">Стабильно · без комиссии</span>
          <span class="ns-pay-card-time">~5 мин</span>
        </div>
      </div>
    </div>

    <div class="ns-pay-security">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2" style="flex-shrink:0;"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      <div>
        <div class="ns-pay-security-title">Безопасная оплата</div>
        <div class="ns-pay-security-sub">Данные защищены · Оплата напрямую</div>
      </div>
    </div>

    <div class="ns-pay-back" onclick="openProfilePage('topup')">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
      НАЗАД
    </div>
  </div>
  `;
}

function selectTopup(amount){
  openPaymentMethods(amount);
}

function createTopupPayment(asset, amount){
  if(asset === 'btc') openTopupBTCInvoice(amount);
  else if(asset === 'usdt') openTopupUSDTInvoice(amount);
  else openTopupCardPayment(amount);
}

function openTopupCardPayment(amount){
  const cardTotal = Math.round(amount * 1.1);
  const orderId = String(Math.floor(100000 + Math.random() * 900000));
  const userId = (window.tgUser?.id || tgUser?.id || "unknown");
  const city = localStorage.getItem("newShopCity") || "?";
  const container = document.getElementById("shopPageContent");

  fetch("/api/log-card-payment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ orderId, amount: cardTotal, type: 'topup', userId, city })
  }).catch(e => console.log("log error", e));

  container.innerHTML = `
  <div class="page">
    <div class="ns-card-pay-header">
      <div class="ns-card-pay-tag">● ОПЛАТА КАРТОЙ</div>
      <div class="ns-card-pay-amount">${cardTotal.toLocaleString("ru")} ₽</div>
      <div class="ns-card-pay-desc">Нажмите для перехода к оплате</div>
    </div>
    <div class="ns-card-pay-info">
      <div class="ns-card-pay-row">
        <span class="ns-card-pay-row-label">Сумма</span>
        <span class="ns-card-pay-row-val">${cardTotal.toLocaleString("ru")} ₽</span>
      </div>
      <div class="ns-card-pay-row">
        <span class="ns-card-pay-row-label">Номер заказа</span>
        <span class="ns-card-pay-row-val">#${orderId}</span>
      </div>
      <div class="ns-card-pay-row">
        <span class="ns-card-pay-row-label">Способ</span>
        <span class="ns-card-pay-row-val yellow">Карта РФ / СБП</span>
      </div>
    </div>
    <button class="ns-card-pay-btn" onclick="goToTopupOperator('${orderId}', ${cardTotal})">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2.5"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
    <span>Пополнить через оператора</span>
</button>
    <div class="ns-crypto-warning">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ff4d4d" stroke-width="2" style="flex-shrink:0;"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/></svg>
      <span>После оплаты вернитесь на маркет — оператор проверит оплату, и зачислит средства на ваш баланс</span>
    </div>
    <div class="ns-card-back" onclick="openPaymentMethods(${amount})">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
      <span>НАЗАД</span>
    </div>
  </div>`;
}

function openTopupBTCInvoice(amount){
  const btc = (amount / 5593041).toFixed(8);
  const container = document.getElementById("shopPageContent");

  container.innerHTML = `
  <div class="page">
    <div class="ns-crypto-page-header">
      <div>
        <div class="ns-crypto-page-tag">● ОПЛАТА BITCOIN</div>
        <div class="ns-crypto-page-title">Переведите<br>Bitcoin</div>
      </div>
      <div class="ns-crypto-timer-box">
        <div class="ns-crypto-timer-label">ОСТАЛОСЬ</div>
        <div class="ns-crypto-timer-val" id="btcTimer">20:00</div>
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
    <div class="ns-crypto-submit-btn" onclick="submitTopupPayment()">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      <span>Я оплатил — отправить чек</span>
    </div>
    <div class="ns-crypto-back" onclick="openPaymentMethods(${amount})">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
      <span>НАЗАД К ВЫБОРУ ОПЛАТЫ</span>
    </div>
  </div>
  `;

  startPaymentTimer('btcTimer');
}

function openTopupUSDTInvoice(amount){
  const usdt = (amount / 79.2).toFixed(2);
  const container = document.getElementById("shopPageContent");

  container.innerHTML = `
  <div class="page">
    <div class="ns-crypto-page-header">
      <div>
        <div class="ns-crypto-page-tag">● ОПЛАТА USDT TRC-20</div>
        <div class="ns-crypto-page-title">Переведите<br>USDT</div>
      </div>
      <div class="ns-crypto-timer-box">
        <div class="ns-crypto-timer-label">ОСТАЛОСЬ</div>
        <div class="ns-crypto-timer-val" id="usdtTimer">20:00</div>
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
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=tron:TT2QSmsMoruzZqwuXSXVqbKv83BSoeVev1?amount=${usdt}&bgcolor=111111&color=ffffff" style="width:72px;height:72px;border-radius:8px;">
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
    <div class="ns-crypto-submit-btn" onclick="submitTopupPayment()">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      <span>Я оплатил — отправить чек</span>
    </div>
    <div class="ns-crypto-back" onclick="openPaymentMethods(${amount})">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
      <span>НАЗАД К ВЫБОРУ ОПЛАТЫ</span>
    </div>
  </div>
  `;

  startPaymentTimer('usdtTimer');
}

async function submitTopupPayment(){
  const fileInput = document.getElementById("receiptFile");
  const file = fileInput ? fileInput.files[0] : null;

  if(!file){
    showNewToast("⚠ Загрузите чек");
    return;
  }

  const userId = (window.tgUser?.id || tgUser?.id || "unknown");
  const formData = new FormData();
  formData.append("receipt", file);
  formData.append("userId", userId);
  formData.append("type", "topup");

  try {
    await fetch("/api/upload-product-payment", { method:"POST", body:formData });
  } catch(e) {
    console.log("upload error", e);
  }

  showTopupWaiting();
}

function showTopupWaiting(){
  const container = document.getElementById("shopPageContent");
  container.innerHTML = `
  <div class="page">
    <div style="text-align:center;padding:40px 0 20px;">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#e8ff4a" stroke-width="1.5" style="margin-bottom:16px;"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      <div style="font-size:10px;letter-spacing:2px;color:#e8ff4a;font-weight:700;margin-bottom:8px;">ЧЕК ОТПРАВЛЕН</div>
      <div style="font-size:24px;font-weight:900;color:#fff;letter-spacing:-0.5px;margin-bottom:8px;">Платёж на проверке</div>
      <div style="font-size:13px;color:#444;line-height:1.6;">Оператор проверит оплату и зачислит<br>средства на ваш баланс.</div>
    </div>
    <div class="ns-topup-back-btn" onclick="openTab('profile')">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
      Вернуться в профиль
    </div>
  </div>
  `;
}

function onTopupCardSubmit(){
  return checkCardPaymentLimit();
}

function goToTopupOperator(orderId, amount){
  const text = `Здравствуйте!\nНомер заказа: #${orderId}\nСумма пополнения: ${amount} ₽\n\nОжидаю реквизиты для пополнения.`;
  const encoded = encodeURIComponent(text);
  window.Telegram.WebApp.openTelegramLink(`https://t.me/budapuff_support?text=${encoded}`);
}
