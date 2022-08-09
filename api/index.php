
<?php
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers: *");

// require 'DBconnect.php';

// // POST DATA
// $data = json_decode(file_get_contents("php://input"));

// if (
//     isset($data->firstName)
//     && isset($data->lastName)
//     && isset($data->email)
//     && isset($data->setPassword)
//     && isset($data->confirmPassword)
   
// ) {
//     $fname = mysqli_real_escape_string($connect, trim($data->firstName));
//     $lname = mysqli_real_escape_string($connect, trim($data->lastName));
//     $email = mysqli_real_escape_string($connect, trim($data->email));
//     $setPassword = mysqli_real_escape_string($connect, trim($data->setPassword));
//     $confirmPassword = mysqli_real_escape_string($connect, trim($data->confirmPassword));
   
//         $insertUser = mysqli_query($connect, "INSERT INTO `users`(firstName,lastName,email,setPassword,confirmPassword) VALUES('$fname','$lname','$email','$setPassword','$confirmPassword')");
//         if ($insertUser) {
//             $last_id = mysqli_insert_id($connect);
//             echo json_encode(["success" => 1, "msg" => "User Inserted.", "id" => $last_id]);
//         } else {
//             echo json_encode(["success" => 0, "msg" => "User Not Inserted!"]);
//         }
    
// } 




header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include('DBconnect.php');
$objDb=new DBConnect;
$connect=$objDb->connect();

$method=$_SERVER['REQUEST_METHOD'];
switch($method){
    case "GET":
        $sql="select *from users";
        $stmt=$connect->prepare($sql);
        $stmt->execute();
        $users=$stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($users);
        break;

    case "POST":
        $user = json_decode( file_get_contents('php://input') );
        $sql="insert into users(userid, firstName, lastName, email, setPassword, confirmPassword)
              values(null, :firstName, :lastName, :email, :setPassword, :confirmPassword)";
        // $exec=mysqli_query($connect, $sql);
        $stmt=$connect->prepare($sql);
        $stmt->bindParam(':firstName',$user->firstName);
        $stmt->bindParam(':lastName',$user->lastName);
        $stmt->bindParam(':email',$user->email);
        $stmt->bindParam(':setPassword',$user->setPassword);
        $stmt->bindParam(':confirmPassword',$user->confirmPassword);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;
    }
?>