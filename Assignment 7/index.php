<html>
<head>
	<title>Incrementation</title>
	<style type = "text/css">
		div
		{
			background-color: yellow;
		}
	</style>
</head>
<body>
	<?php
	//input
		$filename1 = "visitct.txt";
		$filename2 = "dates.txt";

		date_default_timezone_set('America/Virginia');

		if(file_exists($filename1))
		{
			$count = intval(file_get_contents($filename1)) + 1;
		}
		else
		{
			$count = 1;
		}

		if($count > 1)
		{
			echo "<div> This page has been visited at ";
			$date = file_get_contents($filename2);
			echo $date;
			echo ". <div>";
		}

		if(file_exists($filename2))
		{
			$date = date('m/d/Y h:i:s a', time());
		}
		else
		{
			$date = date('m/d/Y h:i:s a', time());
		}
		//output count
		echo "<div>This page has been visited ";
		echo $count;
		echo " times.</div>";
			

		//save to a file
		file_put_contents($filename1, $count);
		file_put_contents($filename2, $date);
	?>
</body>
</html>