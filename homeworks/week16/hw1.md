『 callback Queue 』
    => 為先進先出的工作佇列,會接收 web api 傳來的任務, 
       透過event loop 的監控,
       當 callStack 為空時 ，會被 callback Queue 裡排隊的 function 放進 call stack 堆疊中執行

『 web api 』
    => ex: setTimeOut / AJAX / DOM ，能夠同時處理多項任務
   當 web api 完成函式後會將任務傳遞至 => callback Queue


『 call stack 』
    ＝> 後進先出的執行堆疊，會依序執行函式。
    從e 到 main program 
    逐一把各個function push 至 call stack 的最上方，
    並從最後進入 function 開始執行。 當 function 結束後，會將 function 抽離堆疊。


# 程式執行

{
     line_1 ： console.log(1)
        =>  進入 call stack , 程式 印出 1
        =>  離開 call stack。
     
     line_2 : setTimeOut 
        => 進入 call stack
        =>  web api 處理傳進來的資料 , 設置完畢放進 callback Queue
           等待 event loop 判斷放入 call stack 時機。
        => 離開call stack
     
     line_5 : console.log(3)
        => 進入call stack , 程式 印出 3
        => 執行完畢 , 離開call stack
     
     line_6 : setTimeOut 
        => 進入 call stack 
        => web api 處理傳進來的資料 , 設置完畢放進 callback Queue
           等待 event loop 判斷放入 call stack 時機。
        => 離開call stack

     line_9 console.log(5)
        => 進入call stack
        => 程式印出 5
        => 執行完畢 , 離開call stack

    # ＿＿＿event loop 判斷 call stack 為空＿＿＿ #

    callback Queue 裡 的 function 已排排站中
    event loop 會判斷 call stack 是否為 empty
    是的話會將 callback Queue 的排隊函式依序放進 call stack 執行。
     
    ( event loop 撈 callback Queue )
    => 
    line_2 : setTimeOut 
        => 進 call stack
        => 等待0秒 , 印出 2 
        => 完成，離開 call stack。
    
    
    # ＿＿＿event loop 判斷 call stack 為空＿＿＿ #

    ( event loop 撈 callback Queue )
    => 
    line_6 : setTimeOut
        => 進入 call stack
        => 等待0秒 , 印出 4
        => 執行完畢 , 離開 call stack 
}   
