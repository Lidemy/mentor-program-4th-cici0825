  //選到 新增
  document.querySelector('.btn-new').addEventListener('click', (e) => {
    // 拿到 value的資料
    const value = document.querySelector('.input-todo').value;
    // 先處理不符合輸入條件的直接return忽略
    if (!value) return
    //新增 一個 Element
    const div = document.createElement('div')
    // 選class中的 todo 
    div.classList.add('todo')
    // 把要的東西放進 todo 中
    div.innerHTML = `
        <input class="todo__check" type="checkbox">
        <div class="todo__title">${escapeHtml(value)}</div>
        <button class="btn-delete">Ｘ</button>
   `
    // 從父層 todos 把 div appendChild 進去
    document.querySelector('.todos').appendChild(div);
    // 把畫面清空
    document.querySelector('.input-todo').value = '';
})

//對符號跳脫 看作純文字
function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

//queryＳelector 只會選到第一個
document.querySelector('.todos').addEventListener('click', (e) => {
    const el = document.querySelector('.todos')
    if (e.target.className === 'todo__check') {
        // 確認勾選與否 開關done
        // console.log(e.target.checked)
        if (e.target.checked) {
            e.target.nextElementSibling.classList.toggle('done')
        } else {
            e.target.nextElementSibling.classList.toggle('done')
        }
    }
    if (e.target.className === 'btn-delete') {
        el.removeChild(document.querySelector('.todo'))
    }
})