# BreakTime

BreakTime 是一個基於 Vue 3 + TypeScript 的單頁應用程式（SPA），用於向使用者顯示休息時間倒數計時，支援多時區顯示、QR 碼分享、以及 Microsoft Entra ID 登入驗證。

## 主要功能
- 登入驗證（Microsoft Entra ID，支援開關）
- 休息時間類型與預設時間設定
- 倒數計時頁面（支援多時區、QR Code 分享、無需登入）
- 設定頁面（休息類型、時區輪播）
- Dark/Light Mode 切換
- 完整 Accessibility 支援
- 單元測試（3A 原則，Fluent Assertions）

## 技術棧
- Vue 3 + TypeScript
- Vuex 4
- Vue Router 4
- Axios
- Bootstrap 5（Cloudflare CDN）
- FontAwesome（Cloudflare CDN）
- MSAL（Microsoft Authentication Library）
- Jest + Vue Test Utils

## 專案結構
- `src/`：原始碼
- `doc/`：文件與說明

## 安裝與啟動
```sh
npm install
npm run dev
```

## 測試
```sh
npm run test
```

## 相關文件
- 請參閱 doc/ 目錄下的文件以獲得詳細說明。
