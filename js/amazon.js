import { updateTotalQuantity } from './cartBadge.js';
import { PRODUCTS } from "./product.js";
import { debounce } from "./debounce.js";

const input = document.querySelector('.nav-search-input');
const ul = document.getElementById("suggestions");
const overlay = document.getElementById("overlay");
const productArray = Object.entries(PRODUCTS).map(([id, p]) => ({
    id,
    ...p
}));

updateTotalQuantity();

// 開啟聚焦狀態
function openSearch() {
    overlay.style.display = "block";
}

// 關閉聚焦狀態
function closeSearch() {
    overlay.style.display = "none";
    ul.style.display = "none";
}
// 渲染搜尋建議清單
function render(list = []) {
    if (!list.length) {
        ul.style.display = "none";
        ul.innerHTML = "";
        return;
    }
    ul.innerHTML = list.map(p => `<li data-url="product.html?id=${p.id}">${p.name}</li>`).join("");
    ul.style.display = "block";
}

const handleSearch = debounce((keyword = "") => {
    const key = keyword.toLowerCase().trim();
    if(!key){
        ul.style.display = "none";
        return;
    }
    const result = productArray.filter(p => p.name.toLowerCase().includes(key));
    render(result);
}, 300);

// 點擊 input
input.addEventListener("focus", () => {
    openSearch();
});
input.addEventListener("input", e => {
    handleSearch(e.target.value);
});

// 點擊遮罩
overlay.addEventListener("click", () => {
    closeSearch();
    input.blur();
});
// 點擊搜尋建議項目
ul.addEventListener("click", e => {
    const li = e.target.closest("li");
    if(!li) return;
    const url = li.dataset.url;
    if(!url) return;

    window.location.href = url;
});

// 阻止搜尋區冒泡
document.querySelector('.nav-search-box')
    .addEventListener('click', e => e.stopPropagation());

// ESC 關閉
document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
        closeSearch();
        input.blur();
    }
});
