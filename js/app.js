console.log("app.js loaded");

window.tg = window.Telegram.WebApp;
window.backButton = window.tg.BackButton;

if (window.tg.initData) {
  fetch("/api/log-visit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ initData: window.tg.initData })
  });
}

function closeShop() {
  window.tg.close();
}
