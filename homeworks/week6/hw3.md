## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
1.video tag 顧名思義可置入影片顯示於網頁
2.audio tag 可置入聲音檔
3.code  tag 可放程式碼

## 請問什麼是盒模型（box modal）
以一個寬高皆為300的正方形來說，如果在元素上加上 margin: 10px / padding: 10px / border: 2px 
整個元素佔在網頁的大小為 322 * 322 ,而以上加總的設定也就是盒模型的原型。 
一開始計算盒模型改變元素的大小還需要去計算外距內距以及外框線一起納入元素的總合內，
但現在我們有boxsizing的功能依照設計師的需求可以省去計算盒子的不便。

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
inline 願意和其他元素並排 改變寬高他不會理你
block 自己就是王會佔滿瀏覽器寬度 能夠改變寬高唯一親民的地方
inlineblock 能屈能伸擁有前兩者的優點

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

static: 沒有定位，按瀏覽器預設顯示流進行排版。
relative: 該元素的位置為起點，可設定 top bottom right left 等屬性指定到設計師想要的位置，
absolute: 依據參考點做定位，也就是通常有一個指定的父層做參考點。
fixed: 相對於瀏覽器做定位，可固定在瀏覽器的某個指定位置。