<?php
// $username = $_REQUEST["first"];
// $city = $_REQUEST["second"];
// $state = $_REQUEST["third"];
// $zipcode = $_REQUEST["fourth"];
// $email = $_REQUEST["fifth"];
// $date = $_REQUEST["sixth"];

// $filename = "forminfo.txt";

// file_put_contents($filename, 'new entry: '.$username.' '.$city.' '.$state.' '.$zipcode.' '.$email.' '.$date);


$db = new SQLite3('formdata') or die('Unable to open database');
$query = <<<EOD
  CREATE TABLE IF NOT EXISTS users (
    username STRING, city STRING, state STRING, zipcode STRING, email STRING, date STRING)
EOD;
$db->exec($query) or die('Create db failed');
$user = ($_POST['username']);
$city = ($_POST['city']);
$state = ($_POST['state']);
$zipcode = ($_POST['zipcode']);
$email = ($_POST['email']);
$date = ($_POST['date']);
$query = <<<EOD
  INSERT INTO users VALUES ( '$user', '$city', '$state', '$zipcode', '$email', '$date' )
EOD;
$db->exec($query) or die("Unable to add user $user");
$result = $db->query('SELECT * FROM users') or die('Query failed');
while ($row = $result->fetchArray())
{
  echo "Name: {$row['username']}\nCity: {$row['city']}\nState: {$row['state']}\nZipcode: {$row['zipcode']}\nEmail: {$row['email']}\nDate: {$row['date']}\n";
}
?>