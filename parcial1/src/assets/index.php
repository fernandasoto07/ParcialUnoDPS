<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

$conn = new mysqli($_POST["host"],$_POST['user'],$_POST['pswd'],$_POST['db']);
$response = [];

if($conn->connect_errno){
  printf("fallo la conexion: %s\n",$conn->connect_error);
  exit();
}

if($_POST['select'] == 'true'){
  $data = [];
  if( $res = $conn->query($_POST['query']) ){
    while($row = $res->fetch_assoc()){ array_push($data,$row); }
    $response = [
      'state' => true,
      'data' => $data
    ];
  }
  else $response = ["state" => false];
}
if($_POST['select'] == 'false'){
  if( $res = $conn->multi_query($_POST['query']) ){
    $response = [ 'state' => true ];
  }
  else $response = ["state" => false];
}

$conn->close();

//echo json_encode($ret);
echo json_encode($response);
?>