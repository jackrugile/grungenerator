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
		<meta property="og:title" content="GrunGenerator" />
		<meta property="og:description" content="Generate grungy, gritty, worn, distressed textures with HTML5 canvas." />		
		<meta property="og:site_name" content="GrunGenerator" />
		<meta property="og:image" content="http://jackrugile.com/grungenerator/img/fb.png" />
		<meta property="og:url" content="http://jackrugile.com/grungenerator/" />
		<meta property="og:type" content="website" />
		<script type="text/javascript" src="//use.typekit.net/eyn6zuu.js"></script>
		<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
		<!--[if IE]><script type="text/javascript" src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
		<link href="css/style.css" rel="stylesheet" />
		<link href="img/favicon.ico" rel="shortcut icon" type="image/x-icon" />		
	</head>
	<body>
		<div class="panel">
			<header>
				<h1><strong>Grun</strong>Generator<span>Beta</span></h1>
			</header>			
			<div class="controls">
				<section class="clearfix">
					<label for="gg-width">Width</label>	
					<input type="text" id="gg-width" tabindex="1" />									
					<div id="gg-width-slider"></div>
				</section>				
				<section class="clearfix">
					<label for="gg-height">Height</label>	
					<input type="text" id="gg-height" tabindex="2" />									
					<div id="gg-height-slider"></div>	
				</section>				
				<section class="clearfix">
					<label for="gg-particle-count">Particle Count</label>	
					<input type="text" id="gg-particle-count" tabindex="3" />
					<div id="gg-particle-count-slider"></div>
				</section>
				<section class="clearfix">
					<div class="range">
						<label for="gg-particle-size">Particle Size</label>	
						<input type="text" id="gg-particle-size-min" class="min" tabindex="3" />
						<input type="text" id="gg-particle-size-max" class="max" tabindex="3" />
					</div>									
					<div id="gg-particle-size-slider"></div>
				</section>
				<section class="clearfix">			
					<label for="gg-polygon-count">Polygon Count</label>			
					<input type="text" id="gg-polygon-count" tabindex="4" />									
					<div id="gg-polygon-count-slider"></div>
				</section>				
			</div><!-- end .controls -->			
			<a href="#" class="button" id="gg-generate" tabindex="5"><span class="entypo-flash"></span>Generate</a>
			<a href="#" class="button" id="gg-export" tabindex="6"><span class="entypo-export"></span>Export PNG</a>
			<a href="#" class="button" id="gg-reset" tabindex="7"><span class="entypo-arrows-ccw"></span>Reset</a>	
		</div><!-- end .panel -->		
		<div class="canvas-container">
	</div><!-- end .canvas-container -->			
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
	<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.2/jquery-ui.min.js"></script>
<script src="js/lib.js"></script>
		<script src="js/grungenerator.js"></script>
		<script src="js/main.js"></script>
	</body>
</html>