 // 監聽form底下的submit的事件
 document.querySelector('form')
 .addEventListener('submit', function (e) {
     e.preventDefault(); // 阻止預設行為
     let hasError = false; //error預設為f
     let values = {}; //將使用者輸入的value儲存成物件
     const elements = document.querySelectorAll('.fillIn-block'); // 撈取填寫的範圍作為檢查的項目

     // 填寫欄位裡面要判斷的事情都是重複的所以包在for裡面去跑
     for (let element of elements) {
         const radios = element.querySelectorAll(
         'input[type=radio]'); //要判斷的內容有兩個不同的type 1. input[type=radio]
         const input = element.querySelector('input[type=text]'); // 1.input[type=text]
         let isValid = true; // 有效欄位判斷

         if (input) { //如果是input 
             values[input.name] = input.value; //把使用者輸入的value存進name
             if (!input.value) { //如果 input.value為空 判斷欄位無效
                 isValid = false;
             }
         } else if (radios.length) { // 如果是勾選項目 
             isValid = [...radios].some(radio => radio
             .checked); // 有效的條件為 radio項目內是否checked的值 (先把radio重構成陣列 => 把要判斷的值放進去)
             if (isValid) { //如果有效欄位
                 let r = element.querySelector('input[type=radio]:checked'); //選到被checked的元素
                 values[r.name] = r.value; //選到被checked的元素存進name裡
             }
         } else {
             continue; //以上兩個都沒發生就跳下一個
         }

         if (!isValid) { //如果無效打開原本關起來的error 有效則反
             element.classList.toggle('hide-error');
             hasError = true;
         }
     }

     if (!hasError) { // 如果沒有出現error 跳出 values 然後轉成json模式
         alert(JSON.stringify(values));
     }
 })