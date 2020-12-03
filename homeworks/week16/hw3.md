#### 順序由下而上

#執行函式內程式 fn2() line_12
＿＿＿＿  fn2 函式執行環境 EC ＿＿＿＿ 
fn2 VO ( fn2內程式碼){

    1. line_13
        => 因為fn2在進行初始化時是空的，沒有被宣告的參數/函式/變數，
           所以程式會往上一層去尋找。
        ＝> 往上找會先遇到 {a : 6} , 因此 line_13 的 log 值為 6

    2. line_14
        => 一樣往上找到 a , 把值改為 20
    
    3. line_15
        => fn2 沒有 b , 往上找 fn 沒有 b , 再往上全域找發現也沒有b , 當程式往上都找不到目標時會在全域建立該值,成為 全域變數。
        => 在 global 設置 { b : 20 }
    
    4. 程式執行完畢
        => 釋放函式
        => 回到上一層 fn
    
}   


＃執行初始化line_12
＿＿＿＿  fn2 函式執行環境 EC ＿＿＿＿ 
fn2 VO (進行初始化動作){

    1.找參數
        ＝> line_12 沒有
    2.找function 
        => 沒有
    3.找被宣告的 variable
        => 沒有
    4. 往上一層找
        => 回到 fn 
}   



#執行函式程式碼
＿＿＿＿  fn 函式執行環境 EC ＿＿＿＿ 
fn VO ( fn內程式碼){

    1. line_4
        => a 這時候為初始化的值 "undefined"
        => 所以 line_4 的 { a : undefined } .
    
    2. line_5
        => a 被賦予新值 , { a : 5 } 
    
    3. line_7 
        => a++ , { a : 6 }
    
    4. line_8
        => var a 再次被宣告但原本就有宣告a，所以值照樣不變

    5. line_9 
        => 呼叫 fn2() ,進入新的執行環境 fn2()
    6. line_10 
        => 因為 fn2裡的 a要賦予新值, 但是在fn2的初始值找不到,所以找到這一層來,
        所以當fn2執行完畢回到這層 a 此時的值 為 20.
        => 程式執行完畢 回到 global環境 
    
}   

＃執行初始 line_18
＿＿＿＿  fn 函式執行環境 EC ＿＿＿＿ 
fn VO (進行初始化動作){

    1.找參數
        ＝> line_9 沒有
    2.找function 
        => function: fn2 (初始化為function)
    3.找被宣告的 variable
        => variable : a (初始值為undefined)
    
}   



#執行程式 line_1 
＿＿＿＿  global 全域執行環境 EC ＿＿＿＿ 

global VO{

    1.執行到 variable 被賦予值
        => variable : a = 1(執行到程式碼賦予值)
    2.遇到 function 跳過 
        => 執行到 line_18 遇到 呼叫函式
        ＝> 進入新的執行環境
    
    3. line_19 {a:1}
}




#進檔案 初始化
＿＿＿＿  global 全域執行環境 EC ＿＿＿＿
global VO{

    1.找參數
    2.找被宣告的function 
        => function: fn  (初始化為function)
    3.找被宣告的 variable
        => variable : a (初始值為undefined)
}
