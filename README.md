# Amazon Clone (JavaScript電商專案)

> 本專案使用原生 JavaScript、HTML 和 CSS 來模擬 Amazon 的核心購物流程，包含商品展示、動態搜尋以及購物車管理。

## 功能

- **商品詳情頁**：模擬資料庫選取，支援動態計算價格與數量選取。
- **購物車系統**：新增、刪除、更新數量，即時計算總金額。
- **搜尋引擎**：實作 Debounce（防抖）技術優化搜尋建議，並處理冒泡事件。
- **資料永久性儲存**：使用 localStorage 確保重新整理網頁後購物車內容不遺失。
- **路由模擬**：透過 location.href 結合 URL 參數（或模擬 ID 匹配）實現產品頁的跳轉與動態內容加載。

## 資料夾與檔案說明

- assets - 圖片放置處
- index.html - 入口網頁
- product.html - 產品詳情頁
- cart.html - 購物車頁
- css/
  - al.css - 全域樣式、導航欄、頁腳及首頁佈局
  - product.css - 產品詳情頁樣式
  - cart.css - 購物車樣式
- js/
  - script.js - 首頁圖片輪播邏輯、跳轉處理
  - amazon.js - 搜尋功能（聚焦、防抖、冒泡處理、遮罩控制）
  - product.js - 模擬產品資料庫與價格計算工具
  - checkout.js - 產品詳情頁動態渲染與「加入購物車」行為
  - cart.js - 購物車頁面操作（增減數量、刪除、即時結算）
  - cartStorage.js - 封裝 localStorage 的 get/set 操作
  - cartBadge.js - 導航欄購物車數量圖標的即時更新
  - debounce.js - 防抖優化

## 使用技術

- HTML5
- CSS3
- JavaScript (ES6+)

## 第三方服務

- Google Fonts
- Font Awesome
