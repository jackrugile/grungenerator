<?php 
	// source = http://www.webdeveloper.com/forum/showthread.php?145686-force-image-to-download-not-to-display-in-browser
	if(!empty($_GET['img'])){ 
	$basename = basename($_GET['img']); // don't accept other directories
		$filename = 'temp/'.$basename;
		$size = @getimagesize($filename); 
		$fp = @fopen($filename, "rb"); 
		if ($size && $fp){ 
			header("Content-type: {$size['mime']}"); 
			header("Content-Length: " . filesize($filename)); 
			header("Content-Disposition: attachment; filename=$basename"); 
			header('Content-Transfer-Encoding: binary'); 
			header('Cache-Control: must-revalidate, post-check=0, pre-check=0');  
			fpassthru($fp); 
			exit; 
		} 
	} 
	header("HTTP/1.0 404 Not Found"); 
	?>