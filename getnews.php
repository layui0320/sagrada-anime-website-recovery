<!DOCTYPE html>
<html>
<head>
</head>
<body style="height:100vh;overflow:hidden;margin:0;display:flex;flex-flow:column nowrap;align-items:stretch;">
<div style="flex:0 0;">
 </div>
<iframe id="playback" src="./getnews.php" frameborder="0" style="flex:1 0">
</iframe>
<script>
if (window.location.hash) {
  document.getElementById("playback").src += window.location.hash;
}
</script>
</body>
</html>