<?php 
$diskList = file_get_contents( __DIR__ . "/../data/data.json");
header('Content-Type: application/json');
// var_dump($diskList);
// json_decode($diskList);
echo $diskList;
?>