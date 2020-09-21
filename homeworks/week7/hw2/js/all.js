const el = document.querySelector('.faq-list')

el.addEventListener('click', function (e) {
    // 找目標的類別名稱 是不是點擊的目標
    if (e.target.className === 'faq-title') {

        // 如果是就找他的下一個同層對classlist做開關faqAnswer這個class
        e.target.nextElementSibling.classList.toggle('faqAnswer')
    }
})