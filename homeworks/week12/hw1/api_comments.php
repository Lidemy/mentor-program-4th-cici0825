<?php 
    require_once('conn.php');
    header('Content-Type: application/json;charset=utf-8'); //告訴瀏覽器是jason的資料
    header('Access-control-Allow-Origin:*'); //任何來源都可以存取api origin都可以存取
    //處理傳進來的資料
    if(
        empty($_GET['site_key'])
    ){
        $json= array(
            "ok" => false,
            "message"=> "please add side_key in url"
        );
        $response = json_encode($json);
        echo $response;
        die();
    }
    
    // 拿資料
    $site_key = $_GET['site_key'];

 
    // 輸入搜尋的指令 
    // $sql = "select nickname, content, created_at from cici0825_discussions where site_key=? order by id desc";
    $sql = 
      "select id, nickname, content, created_at from cici0825_discussions
       where site_key = ? " . 
      (empty($_GET['before']) ? "" : "and id < ?") .
      " order by id desc limit 5 ";
    // 準備使用sql
    $stmt = $conn ->prepare($sql);
    if(empty($_GET['before'])){
        $stmt->bind_param('s',$site_key);
    }else{
        $stmt->bind_param('si',$site_key,$_GET['before']);
    }
    //把拿到的資料綁定 在指令上
   
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

    //拿到結果
    $result = $stmt->get_result();
    $discussions = array();

   
    //撈資料庫裡的資料 把相對應 GET的 資訊用array 格式 push 進去
    while($row = $result->fetch_assoc()){
        array_push($discussions,array(
            "id" => $row["id"],
            "nickname" => $row["nickname"],
            "content" => $row["content"],
            "created_at" =>$row["created_at"]
        ));
    }

    
    
    //成
    $json = array(
        "ok" => true,
        "discussions"=> $discussions
    );
    $response = json_encode($json);
    echo $response;
?>

