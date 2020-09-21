const apiUrl = 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery';
const errMessage = '系統不穩定請再試一次';
document.querySelector('.banner-card_btn')
    .addEventListener('click', () => {

        const xhr = new XMLHttpRequest();
        // GET拿網址的資料
        xhr.open('GET', apiUrl, true);
        // onload載入後發生的事情，如果狀態碼介於200-400之間把回傳資料用json格式印出來 如果不是就印出err訊息
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 400) {
                let data;
                try {
                    data = JSON.parse(xhr.response);
                } catch (err) {
                    alert(errMessage); // 測試 data 回傳json格式是否成功
                    console.log(err);
                    return
                }
                if (!data.prize) { // 檢查data裡是不是有prize的資料 是的話印出err訊息
                    alert(errMessage);
                    return
                }
                let className;
                let title;
                if (data.prize === 'FIRST') {
                    className = 'FIRST';
                    title = '恭喜你中頭獎了！日本東京來回雙人遊！';
                } else if (data.prize === 'SECOND') {
                    className = 'SECOND';
                    title = '二獎！90 吋電視一台！';
                } else if (data.prize === 'THIRD') {
                    className = 'THIRD';
                    title = '恭喜你抽中三獎：知名 YouTuber 簽名握手會入場券一張，bang！';
                } else if (data.prize === 'NONE') {
                    className = 'NONE';
                    title = '銘謝惠顧';
                }

                document.querySelector('.banner-block').classList.add(className);
                document.querySelector('.banner-card_lottery-title').innerText = title;
                document.querySelector('.banner-card').classList.add('hide');
                document.querySelector('.banner-card_lotteryResult').classList.toggle('hide');

            } else {
                alert(errMessage);
            }
        }
        xhr.onerror = function () {
            alert(errMessage);
        }
        //送出request
        xhr.send();
    });