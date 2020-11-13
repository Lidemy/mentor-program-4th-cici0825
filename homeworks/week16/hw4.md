line_16 obj.inner.hello() 
    轉成call()
    # obj.inner.hello.call(obj.inner) 
        => hello function 的 this 會接收 呼叫參數的值 , obj.inner
        ＝> 第一個console.log  this 印出 2
        

line_17 obj2.hello() // ??
    轉成call()
    # obj2.hello.call(obj2) 
        => hello function 的 this 會接收 呼叫參數的值 , obj2(obj.inner)
        => 第二個console.log  this 印出 2

line_18
    轉成call()
    # hello.call() 
         ＝> hello 前面沒有東西 , 
         但是有call的方式去看的話call裡的參數就是this會接收的值,
         但因為hello前面沒有東西 所以參數是空的。
         => 第三個console.log 印出 undefined
