<?php
$temp = 0;
$substring = $_REQUEST["first"];
if(strpos($substring, '/') === false)
{
	$temp = 0;
}
else
{
	$temp = 1;
}
$myfile = fopen("CompleteScrabbleWordlist.txt", "r") or die("Unable to open file!");
$allwords = fread($myfile,filesize("CompleteScrabbleWordlist.txt"));
$splitwords = explode("\n", $allwords);
for ($x = 0; $x < count($splitwords); $x++)
{
	if($temp == 0)
	{
		if(preg_match('/'.$substring.'/', $splitwords[$x]))
		{
			echo $splitwords[$x]."\n";
		}
	}
	if($temp == 1)
	{
		if(preg_match($substring, $splitwords[$x]))
		{
			echo $splitwords[$x]."\n";
		}
	}
}
fclose($myfile);
?>