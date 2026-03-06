console.log("app.js loaded");

if (window.Telegram.WebApp.initData) {
  fetch("/api/log-visit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ initData: window.Telegram.WebApp.initData })
  });
}

function closeShop() {
  window.Telegram.WebApp.close();
}
