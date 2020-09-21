const request = new XMLHttpRequest();
request.open('GET', 'https://api.twitch.tv/kraken/games/top?limit=5', true);
request.setRequestHeader('Client-ID', 'gw1hr6fwynv346eq4zizlgz3ndwy3h');
request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        const games = JSON.parse(this.response).top; //把response轉成json格式 response取到top

        for (let game of games) {
            let element = document.createElement('li'); //新增 li
            element.innerText = game.game.name; //把li的內容放前五名的各個名字
            document.querySelector('.navbar-list').appendChild(element); //把結果放進原本的nav-bar中
        }

        document.querySelector('h2').innerText = games[0].game.name; // 標題顯示第一個遊戲的實況名稱

        // 抓第一個遊戲的實況內容
        const request2 = new XMLHttpRequest();
        request2.open('GET', 'https://api.twitch.tv/kraken/streams?game=' + encodeURIComponent(games[0].game
            .name), true);
        request2.setRequestHeader('Client-ID', 'gw1hr6fwynv346eq4zizlgz3ndwy3h'); //設定header帶的用戶端名稱
        request2.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json'); //設定header的接口
        request2.onload = function () { // 載入後要做的事
            if (request2.status >= 200 && request2.status < 400) { // 如果statusCode介於200~400
                const data = JSON.parse(request2.response).streams //取出資料 把response 取到 streams 轉成json格式 存進data中
                for (let stream of data) { // 跑每各個stream[i] 
                    let element = document.createElement('li'); // create li  
                    document.querySelector('.live').appendChild(element) // append 到 父元素live裡 然後把顯示的資料用outerHTML放進去
                    element.outerHTML =
                        `<li class="live-item ">
                        <div class="live-itemImg"><img src="${stream.preview.large}" alt=""></div>
                        <div class="live-profile d-flex ">
                        <div class="live-profile_photo"><img src="${stream.channel.logo}" alt=""></div>
                        <ul class="live-profile_content">
                            <li>${stream.channel.status}</li>
                            <li>${stream.channel.display_name}</li>
                        </ul>
                        </div>
                    </li>`
                }
            }
        }
        request2.send(); //送出request
    }
}
request.send();

//選到list底下發生的事件
document.querySelector('.navbar-list').addEventListener('click', e => {

    // 如果target的標籤是li
    if (e.target.tagName.toLowerCase() === 'li') {
        const gameName = e.target.innerText; // 先取出gamename的裡面文字
        document.querySelector('h2').innerText = gameName; // 選到h2的文字 存進gameName
        document.querySelector('.live').innerHTML = ''; //把原本的資料清掉
        const request2 = new XMLHttpRequest(); //和上面做一樣的事 請求request 把資料顯示出來
        request2.open('GET', 'https://api.twitch.tv/kraken/streams?game=' + encodeURIComponent(
            gameName), true);
        request2.setRequestHeader('Client-ID', 'gw1hr6fwynv346eq4zizlgz3ndwy3h');
        request2.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
        request2.onload = function () {
            if (request2.status >= 200 && request2.status < 400) {
                const data = JSON.parse(request2.response).streams

                for (let stream of data) {

                    let element = document.createElement('li');
                    document.querySelector('.live').appendChild(element)
                    element.outerHTML =
                        `<li class="live-item ">
                        <div class="live-itemImg"><img src="${stream.preview.large}" alt=""></div>
                        <div class="live-profile d-flex ">
                        <div class="live-profile_photo"><img src="${stream.channel.logo}" alt=""></div>
                        <ul class="live-profile_content">
                            <li>${stream.channel.status}</li>
                            <li>${stream.channel.display_name}</li>
                        </ul>
                        </div>
                    </li>`
                }
            }
        }
        request2.send();
    }
})