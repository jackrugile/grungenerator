<?php
	// source = http://j-query.blogspot.com/2011/02/save-base64-encoded-canvas-image-to-png.html
	if(!isset($_POST['dataurl']) || empty($_POST['dataurl'])){
		echo 'error';
	} else {
		define('UPLOAD_DIR', 'temp/');
		$img = $_POST['dataurl'];
		$img = str_replace('data:image/png;base64,', '', $img);
		$img = str_replace(' ', '+', $img);
		$data = base64_decode($img);
		$file = UPLOAD_DIR . uniqid('grungenerator-', true) . '.png';
		$success = file_put_contents($file, $data);
		echo $file;
	}
?>