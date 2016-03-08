<?php
$f1 = "leaderboard.txt";
$myfile = fopen($f1, "r") or die("Unable to open file!");
$str = fread($myfile,filesize($f1));
echo $str;
fclose($myfile);
?>