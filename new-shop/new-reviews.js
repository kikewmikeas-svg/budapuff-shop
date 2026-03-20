function renderNewReviews(){

let visibleCount = 6;
let activeFilter = "all";

const shuffled = [...REVIEWS_DATA].sort(() => Math.random() - 0.5);
const container = document.getElementById("shopPageContent");

function getFiltered(){
  if(activeFilter === "5") return shuffled.filter(r => r.rating === 5);
  if(activeFilter === "4") return shuffled.filter(r => r.rating === 4);
  if(activeFilter === "3") return shuffled.filter(r => r.rating === 3);
  return shuffled;
}

function render(){
  const filtered = getFiltered();
  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  container.innerHTML = `
<div class="page">

  <div class="ns-reviews-header">
    <div class="ns-reviews-title-row">
      <div class="ns-reviews-title">Отзывы</div>
      <div class="ns-reviews-badge">${REVIEWS_DATA.length}+</div>
    </div>
    <div class="ns-reviews-rating-row">
      <div class="ns-rating-num">4.9</div>
      <div class="ns-rating-right">
        <div class="ns-stars">★★★★★</div>
        <div class="ns-reviews-sub">средняя оценка</div>
      </div>
    </div>
  </div>

  <div class="ns-reviews-filters">
    <button class="ns-filter-btn ${activeFilter === 'all' ? 'active' : ''}" data-filter="all">Все</button>
    <button class="ns-filter-btn ${activeFilter === '5' ? 'active' : ''}" data-filter="5">★★★★★</button>
    <button class="ns-filter-btn ${activeFilter === '4' ? 'active' : ''}" data-filter="4">★★★★</button>
    <button class="ns-filter-btn ${activeFilter === '3' ? 'active' : ''}" data-filter="3">★★★</button>
    <button class="ns-filter-btn ${activeFilter === 'new' ? 'active' : ''}" data-filter="new">Новые</button>
  </div>

  <div class="ns-reviews-list">
    ${visible.map(r => `
      <div class="ns-review-card">
        <div class="ns-review-top">
          <div class="ns-review-user">
            <div>
              <div class="ns-review-name">Анонимный клиент</div>
              <div class="ns-review-city">${r.city}</div>
            </div>
          </div>
          <div class="ns-review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
        </div>
        <p class="ns-review-text">${r.text}</p>
      </div>
    `).join("")}
  </div>

  ${hasMore ? `<button class="ns-reviews-load-more" id="loadMoreBtn">Загрузить ещё →</button>` : ""}

</div>
  `;

  document.querySelectorAll(".ns-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      activeFilter = btn.dataset.filter;
      visibleCount = 6;
      render();
    });
  });

  if(hasMore){
    document.getElementById("loadMoreBtn").addEventListener("click", () => {
      visibleCount += 6;
      render();
    });
  }
}

render();

}