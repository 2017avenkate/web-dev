<?php
$f1 = $_REQUEST["name"];
$f2 = $_REQUEST["wpm"];
$myfile = fopen("leaderboard.txt", "r") or die("Unable to open file!");
$str = fread($myfile,filesize("leaderboard.txt"));
$ar = explode("\n", $str);
$str2 = "";
$a = 0;
for ($x = 0; $x < 10; $x++) 
{
	$split = explode(" ", $ar[$x]);
	if($a == 1)
	{
		$str2 = $str2.$ar[$x-1]."\n";
	}
	else if($f2 > $split[count($split)-1])
	{
		$str2 = $str2.$f1." ".$f2."\n";
		$a = 1;
	}
	else
	{
		$str2 = $str2.$ar[$x]."\n";
	}
}
echo $str2;
fclose($myfile);
file_put_contents("leaderboard.txt", $str2);
?>