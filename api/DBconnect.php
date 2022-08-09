<?php
// $server = 'localhost';
// $dbname = 'react_library';
// $user = 'root';
// $pass = '';

// $connect=mysqli_connect($server,$user,$pass,$dbname);
    
?>



 <?php 
	
	class DbConnect {
		private $server = 'localhost';
		private $dbname = 'react_library';
		private $user = 'root';
		private $pass = '';

		public function connect() {
			try {
				$conn = new PDO('mysql:host=' .$this->server .';dbname=' . $this->dbname, $this->user, $this->pass);
				$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				return $conn;
			} catch (\Exception $e) {
				echo "Database Error: " . $e->getMessage();
			}
		}
        
	}
?>