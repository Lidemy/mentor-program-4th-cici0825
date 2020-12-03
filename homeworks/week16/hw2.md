
#### 順序由下而上


#執行程式  回到line_1 第六次
＿＿＿＿  global 全域執行環境 EC ＿＿＿＿ 

global VO{

    1.執行到 variable 被賦予值
        => variable : i = 5(執行到程式碼賦予值)
    2.for 判斷 5 < 5 , false
        =>  跳出迴圈
        => 結束程式。
 
}

#執行程式 回到 line_4 第六次
＿＿＿＿  global 全域執行環境 EC ＿＿＿＿ 

global VO{

    1. setTimeout(() => {console.log(i)}, i * 1000)
        => 第四圈 { i : 4 } 
        => setTimeout 進入 stack 
        => web api 處理資料,當設置完畢後 放置 callback Queue
        => 等待 event loop 判斷 call stack 是否為空,是的話把 web api push 上去執行
        => web api 執行完畢 離開 call stack

}

#執行程式  回到line_1 第五次 
＿＿＿＿  global 全域執行環境 EC ＿＿＿＿ 

global VO{

    1.執行到 variable 被賦予值
        => variable : i = 4(執行到程式碼賦予值)
    2.for 判斷 4 < 5 , true
        =>  放入 stack 
        => 執行 code : console.log('i:'+i) 
        => 印出資料 { i:4 }
        => 執行完畢 離開 stack 

}


#執行程式 回到 line_4 第四次
＿＿＿＿  global 全域執行環境 EC ＿＿＿＿ 

global VO{

    1. setTimeout(() => {console.log(i)}, i * 1000)
        => 第四圈 { i : 3 } 
        => setTimeout 進入 stack 
        => web api 處理資料,當設置完畢後 放置 callback Queue
        => 等待 event loop 判斷 call stack 是否為空,是的話把 web api push 上去執行
        => web api 執行完畢 離開 call stack

}

#執行程式  回到line_1 第四次
＿＿＿＿  global 全域執行環境 EC ＿＿＿＿ 

global VO{

    1.執行到 variable 被賦予值
        => variable : i = 3(執行到程式碼賦予值)
    2.for 判斷 3 < 5 , true
        =>  放入 stack 
        => 執行 code : console.log('i:'+i) 
        => 印出資料 { i:3 }
        => 執行完畢 離開 stack 

}


#執行程式 回到 line_4 第三次
＿＿＿＿  global 全域執行環境 EC ＿＿＿＿ 

global VO{

    1. setTimeout(() => {console.log(i)}, i * 1000)
        => 第三圈 { i : 2 } 
        => setTimeout 進入 stack 
        => web api 處理資料,當設置完畢後 放置 callback Queue
        => 等待 event loop 判斷 call stack 是否為空,是的話把 web api push 上去執行
        => web api 執行完畢 離開 call stack
}


#執行程式  回到line_1 第三次
＿＿＿＿  global 全域執行環境 EC ＿＿＿＿ 

global VO{

    1.執行到 variable 被賦予值
        => variable : i = 2(執行到程式碼賦予值)
    2.for 判斷 2 < 5, true
        =>  放入 stack 
        => 執行 code : console.log('i:'+i) 
        => 印出資料 { i:2 }
        => 執行完畢 離開 stack 
}










#執行程式 回到 line_4 第二次
＿＿＿＿  global 全域執行環境 EC ＿＿＿＿ 

global VO{

    1. setTimeout(() => {console.log(i)}, i * 1000)
        => 第二圈 { i : 1 } 
        => setTimeout 進入 stack 
        => web api 處理資料,當設置完畢後 放置 callback Queue
        => 等待 event loop 判斷 call stack 是否為空,是的話把 web api push 上去執行
        => web api 執行完畢 離開 call stack

}

#執行程式  回到line_1 第二次
＿＿＿＿  global 全域執行環境 EC ＿＿＿＿ 

global VO{

    1.執行到 variable 被賦予值
        => variable : i = 1(執行到程式碼賦予值)
    2.for 判斷 1 < 5 , true
        =>  放入 stack 
        => 執行 code : console.log('i:'+i) 
        => 印出資料 { i:1 }
        => 執行完畢 離開 stack 


}


#執行程式 line_4
＿＿＿＿  global 全域執行環境 EC ＿＿＿＿ 

global VO{

    1. setTimeout(() => {console.log(i)}, i * 1000)
        => 第一圈 { i : 0 } 
        => setTimeout 進入 stack 
        => web api 處理資料,當設置完畢後 放置 callback Queue
        => 等待 event loop 判斷 call stack 是否為空,是的話把 web api push 上去執行
        => web api 執行完畢 離開 call stack

}


#執行程式 line_1 
＿＿＿＿  global 全域執行環境 EC ＿＿＿＿ 

global VO{

    1.執行到 variable 被賦予值
        => variable : i = 0(執行到程式碼賦予值)
    2.for 判斷 0 < 5 , true
        =>  放入 stack 
        => 執行 code : console.log('i:'+i) 
        => 印出資料 { i:0 }
        => 執行完畢 離開 stack 


}




#進檔案 初始化
＿＿＿＿  global 全域執行環境 EC ＿＿＿＿
global VO{

    1.找參數
       => 沒有
    2.找被宣告的function 
        => 沒有
    3.找被宣告的 variable
        => 找到 i ，初始化為 undefined。
}

