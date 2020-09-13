<?php
  session_start();
  require_once("conn.php");
  require_once("utils.php");
  $username = NULL;
  if(!empty($_SESSION['username'])) {
    $username = $_SESSION['username'];
  }

  $result = $conn->query("select * from cici0825_comments order by id desc");
  if (!$result) {
    die('Error:' . $conn->error);
  }
  
?>

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
      <div>
        <?php if (!$username) { ?>
          <a class="board__btn" href="register.php">註冊</a>
          <a class="board__btn" href="login.php">登入</a>
        <?php } else { ?>
          <a class="board__btn" href="logout.php">登出</a>
          <h3 class="board__sayHi">你好！<?php echo $username; ?></h3>
        <?php } ?>
      </div>
      
      <h1 class="board__title">Comments</h1>
      <?php
        if (!empty($_GET['errCode'])) {
          $code = $_GET['errCode'];
          $msg = 'Error';
          if ($code === '1') {
            $msg = '資料不齊全';
          }
          echo '<h2 class="error">錯誤：' . $msg . '</h2>';
        }
      ?>
        <form class="board__new-comment-form" method="POST" action="handle_add_comment.php">
          
          <?php if ($username) { ?>
            <textarea name="content" rows="5"></textarea>
            <input class="board__submit-btn" type="submit" />
          <?php } else { ?>
            <h3>請登入發布留言</h3>
          <?php } ?>  
        </form>
      <div class="board__hr"></div>
      <section>
        <?php
          while($row = $result->fetch_assoc()) {
        ?>
          <div class="card">
            <div class="card__avatar"></div>
            <div class="card__body">
                <div class="card__info">
                  <span class="card__author">
                    <?php echo $row['nickname']; ?>
                  </span>
                  <span class="card__time">
                    <?php echo $row['created_at']; ?>
                  </span>
                </div>
                <p class="card__content"><?php echo $row['content']; ?></p>
            </div>
          </div>
        <?php } ?>

      </section>

  </main>
</body>
</html>


