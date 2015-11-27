<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
require_once './vendor/autoload.php';

$views = (int) $_COOKIE['views'];
$views++;
setcookie('views', $views);

$emitter = new SocketIO\Emitter();
$emitter->emit('postviews', $views);

?><!DOCTYPE html>
<html>
<body>
<span><?php echo $views ?></span>

<script src="http://localhost:3000/socket.io/socket.io.js"></script>
<script>
(function() {
  'use strict';

  var socket = io('http://localhost:3000');
  var $span = document.querySelector('span');
  console.log($span.textContent);
  socket.on('postviews', function(views) {
    $span.textContent = 'views: ' + views; 
  });
})();
</script>
</body>
</html>
