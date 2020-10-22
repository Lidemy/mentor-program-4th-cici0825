<?php 
    require_once('conn.php');
    header('Content-Type: application/json;charset=utf-8'); //告訴瀏覽器是jason的資料
    header('Access-control-Allow-Origin:*'); //任何來源都可以存取api origin都可以存取
    
    //處理傳進來的資料
    if(
        empty($_POST['content']) ||
        empty($_POST['nickname'])||
        empty($_POST['site_key'])   
    ){
        $json= array(
            "ok" => false,
            "message"=> "please input missing fields"
        );
        $response = json_encode($json);
        echo $response;
        die();
    }
    
    // 拿資料
    $content = $_POST['content'];
    $nickname = $_POST['nickname'];
    $site_key = $_POST['site_key'];

    // 輸入新增的指令 
    $sql = "insert into cici0825_discussions(site_Key, nickname, content) value (?,?,?)";
    // 準備使用sql
    $stmt = $conn ->prepare($sql);
    //把拿到的資料綁定 在指令上
    $stmt->bind_param('sss',$site_key,$nickname,$content);
    $result = $stmt->execute(); //執行
    
    //處理錯誤回傳
    if(!$result){
        $json = array(
            "ok" => false,
            "message"=> $conn->error
        );
        $response = json_encode($json);
        echo $response;
        die();
    }

    //成功
    $json = array(
        "ok" => true,
        "message"=> "success"
    );
    $response = json_encode($json);
    echo $response;
?>