console.log("app.js loaded");

const tg = window.Telegram.WebApp;
const backButton = tg.BackButton;

if (tg.initData) {
  fetch("/api/log-visit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ initData: tg.initData })
  });
}
