## 什麼是 DOM？

DOM 全名為 Document Object Model 中文翻譯為 文件物件模型。

在DOM的標準下，一份文件中所有的標籤定義，包括文字，都認定為一個物件，這些物件以文件定義的結構，形成了一個樹狀結構。例：

```
<html>
    <head>
        <title>首頁</title>
    </head>
    <body>
        <h1>是在helloworld</h1>
    </body>
</html>
```

節點通常分成以下：

Document: 指這份文件，也就是這份 HTML 檔的開端(可以想成樹根)，所有的一切都會從 Document 開始往下進行。
Element: 指文件內的各個標籤，因此像是 `<div>`、`<p>` 等等各個 HTML 的 Tag 都被歸類在 Element 裡面。
Text：就是指被各個標籤包起來的文字，舉例來說在 `<h1>`是在Hello World`</h1>` 中， 是在Hello World 被`<h1>`這個 Element 包起來，因此 Hello World 就是 `h1` 的 Text。
Attribute：各個標籤內的相關屬性。

在js的應用下我們可以動態的對所有節點進行改變，HTML元素節點都可以被創建、添加或者刪除。


## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？

先補獲再冒泡
瀏覽器中的事件傳遞過程分成三個階段：
捕獲階段：從 DOM根部 ＝> target觸發各個元素的階段。
目標階段：抵達 target 觸發事件監聽。
冒泡階段：從 target => DOM根部 觸發各個元素的階段。


## 什麼是 event delegation，為什麼我們需要它？
透過監聽父層底下發生的事件，我們可以依據事件傳遞機制設計我們想要做的功能，並且不用逐一監聽聽元素。

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？

event.preventDefault: 取消瀏覽器的預設行為。
=> 例如我們在寫監聽表單的點擊事件，為了不要讓使用者在還沒填寫完正確資料就送出表單，所以設了一個阻止瀏覽器預設的行為，例如:開新的分頁或跳轉頁面。
event.stopPropagation: 取消事件繼續往下傳遞(所以只會傳到這層)。
