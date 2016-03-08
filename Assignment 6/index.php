<?php
$dotxcoords = $_REQUEST["first"];
$dotycoords = $_REQUEST["second"];

$filename = "dots.txt";

file_put_contents($filename, 'x: '.$dotxcoords.'  y: '.$dotycoords);
?>
