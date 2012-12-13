<?php include 'config-functions.php'; ?>
<!doctype html>
<!--[if lt IE 7]><html class="no-js lt-ie10 lt-ie9 lt-ie8 lt-ie7" lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://ogp.me/ns#" xmlns:fb="http://www.facebook.com/2008/fbml"><![endif]-->
<!--[if IE 7]><html class="no-js lt-ie10 lt-ie9 lt-ie8 ie7" lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://ogp.me/ns#" xmlns:fb="http://www.facebook.com/2008/fbml"><![endif]-->
<!--[if IE 8]><html class="no-js lt-ie10 lt-ie9 ie8" lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://ogp.me/ns#" xmlns:fb="http://www.facebook.com/2008/fbml"><![endif]-->
<!--[if IE 9]><html class="no-js lt-ie10 ie9" lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://ogp.me/ns#" xmlns:fb="http://www.facebook.com/2008/fbml"><![endif]-->
<!--[if gt IE 9]><!--><html lang="en" class="no-js" xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://ogp.me/ns#" xmlns:fb="http://www.facebook.com/2008/fbml"><!--<![endif]-->
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
		<title>GrunGenerator</title>		
		<meta name="description" content="Generate grungy, gritty, worn, distressed textures with HTML5 canvas." />					
		<meta property="og:title" content="Gritomatic" />
		<meta property="og:description" content="Generate grungy, gritty, worn, distressed textures with HTML5 canvas." />		
		<meta property="og:site_name" content="GrunGenerator" />
		<meta property="og:image" content="http://jackrugile.com/lab/grungenerator/img/fb.png" />
		<meta property="og:url" content="http://jackrugile.com/lab/grungenerator/" />
		<meta property="og:type" content="website" />
		<!--[if IE]><script type="text/javascript" src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
		<link href="css/style.css" rel="stylesheet" />
		<link href="images/favicon.ico" rel="shortcut icon" type="image/x-icon" />		
	</head>
	<body>
	
	<aside>
		<header>
			<h1><strong>Grun</strong>Generator</h1>
		</header>
			
			<div id="controls">
				<section class="clearfix">
					<label>Width</label>
					<input type="text" id="gg-width" />
					<div id="gg-width-slider"></div>				
				</section>
				
				<section class="clearfix">
					<label>Height</label>
					<input type="text" id="gg-height" />
					<div id="gg-height-slider"></div>				
				</section>
				
				<section class="clearfix">
					<label>Particle Count</label>
					<input type="text" id="gg-particle-count" />
					<div id="gg-particle-count-slider"></div>				
				</section>
			</div>
			
		<a href="#" class="button main" id="gg-generate">Generate</a>
		<a href="#" class="button" id="gg-export">Export PNG</a>
			<a href="#" class="button" id="gg-reset">Reset</a>			
		</aside>
		
		<div id="canvas-container">
		</div>
		
<script src="js/lib.js"></script>
		<script src="js/grungenerator.js"></script>
		<script src="js/main.js"></script>
	</body>
</html>