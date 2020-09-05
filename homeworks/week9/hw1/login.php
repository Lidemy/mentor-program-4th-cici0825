
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="reset.css">
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;1,300&display=swap" rel="stylesheet">
    <title>留言板</title>
</head>
<body>

<header class="warning">
   <h6>Please note that this site is a practice site and the information security is deliberately ignored for teaching purposes.</h6>
</header>
<main class="board">
    <a class="board__btn" href="index.php">回留言板</a>
    <a class="board__btn" href="register.php">註冊</a>
    
    <h1 class="board__title">Login</h1>
    <?php
        if(!empty($_GET['errCode'])){
            $code = $_GET['errCode'];
            $msg ='Error';
            if($code==='1'){
                $msg = '資料不齊全';
            }else if($code==='2'){
                $msg ='帳號或密碼有誤';
            }
            echo '<h2 class="error"> 錯誤 :'.$msg.'</h2>';
        }
    ?>
        
    <form class="board__new-comment-form"method="POST" action="handle_login.php">

        <div class="board__basic">
            <!-- <span>Name</span> -->
            <input type="text" name="username" placeholder="username">
        </div>
        <div class="board__basic">
            <!-- <span>Name</span> -->
            <input type="password" name="password" placeholder="password">
        </div>
        <input class="board__submit-btn" type="submit"/>
    </form>

</main>
    
</body>
</html>
