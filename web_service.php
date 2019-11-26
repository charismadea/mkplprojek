<?php
REQUIRE_ONCE('koneksi.php');

$query = MYSQLI_QUERY($conn, "SELECT * FROM JURUSAN");

$mhs = new stdClass;

$row = MYSQLI_FETCH_ASSOC($query);

$mhs -> NIM = $row['NIM'];
$mhs -> Nama = $row['NAMA'];
$mhs -> Jurusan = $row['JURUSAN'];
$mhs -> Fakultas = $row['Fakultas'];
$mhs -> Alamat = $row['Alamat'];
$mhs -> NoHp = $row['NoHp'];

header('Content-Type:application/json;charset=utf-8');

ECHO JSON_ENCODE($mhs);

MYSQLI_CLOSE($conn);
 ?>
