## 什麼是 Ajax？

在瀏覽器上面發送 Request，會用到的技術叫做 Ajax(Asynchronous JavaScript and XML)重點就在於 Asynchronous，非同步。  
非同步: 執行完之後就不管，不等結果是否回來，繼續執行。

## 用 Ajax 與我們用表單送出資料的差別在哪？
使用 Ajax 不必換頁即可拿到回傳的資料，讓網頁的效能能使用戶端有更好的使用者體驗。

## JSONP 是什麼？
JSONP, 全名是 JSON with padding ，不受同源政策的影響的傳送資料的方式。利用 `<script>` 的 `src` 屬性避開同原政策的限制。src屬性的不止有`<script>`,`<img>`,`<iframe>`。

## 要如何存取跨網域的 API？
在不同的origin之間傳輸資料，規範「CORS」(Cross-Origin Resource Sharing)-跨來源資料共享。
如果要申請跨來源HTTP請求的話，Server必須在Response的Header裡面加上 Access-Control-Allow-Origin: * (星號代表萬用字元)，檢驗通過，允許接受跨來源請求的回應。

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？
因為第四週是用 Node.js 來串 API，不必通過瀏覽器。
而在透過瀏覽器與Serve進行資料交換，因為安全性的考量，必須受瀏覽器「同源政策」的限制，所以必須遵守相關規則獲取資料標準來接收response。
