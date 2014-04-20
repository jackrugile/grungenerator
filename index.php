<!doctype html>
<!--[if lt IE 7]><html class="no-js lt-ie10 lt-ie9 lt-ie8 lt-ie7" lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://ogp.me/ns#" xmlns:fb="http://www.facebook.com/2008/fbml"><![endif]-->
<!--[if IE 7]><html class="no-js lt-ie10 lt-ie9 lt-ie8 ie7" lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://ogp.me/ns#" xmlns:fb="http://www.facebook.com/2008/fbml"><![endif]-->
<!--[if IE 8]><html class="no-js lt-ie10 lt-ie9 ie8" lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://ogp.me/ns#" xmlns:fb="http://www.facebook.com/2008/fbml"><![endif]-->
<!--[if IE 9]><html class="no-js lt-ie10 ie9" lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://ogp.me/ns#" xmlns:fb="http://www.facebook.com/2008/fbml"><![endif]-->
<!--[if gt IE 9]><!--><html lang="en" class="no-js" xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://ogp.me/ns#" xmlns:fb="http://www.facebook.com/2008/fbml"><!--<![endif]-->
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<title>GrunGenerator</title>
		<meta name="description" content="Generate grungy, gritty, worn, distressed textures with HTML5 canvas.">
		<meta property="og:title" content="GrunGenerator">
		<meta property="og:description" content="Generate grungy, gritty, worn, distressed textures with HTML5 canvas." />
		<meta property="og:site_name" content="GrunGenerator">
		<meta property="og:image" content="http://jackrugile.com/grungenerator/img/fb.png">
		<meta property="og:url" content="http://jackrugile.com/grungenerator/">
		<meta property="og:type" content="website">
		<script type="text/javascript" src="//use.typekit.net/eyn6zuu.js"></script>
		<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
		<!--[if IE]><script type="text/javascript" src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
		<link href="css/style.css" rel="stylesheet">
		<link href="img/favicon.ico" rel="shortcut icon" type="image/x-icon">
	</head>
	<body>
		<div class="panel">
			<header>
				<h1><strong>Grun</strong>Generator<span>Beta</span></h1>
			</header>
			<div class="controls">

				<div class="control-group">
					<h2>Dimensions</h2>
					<section class="clearfix">
						<label for="gg-width">Width <span>(px)</span></label>
						<input type="text" id="gg-width" tabindex="1">
						<div id="gg-width-slider"></div>
					</section>
					<section class="clearfix">
						<label for="gg-height">Height <span>(px)</span></label>
						<input type="text" id="gg-height" tabindex="2">
						<div id="gg-height-slider"></div>
					</section>
				</div>

				<div class="control-group">	
					<h2>Particles</h2>
					<section class="clearfix">
						<label for="gg-particle-count">Particle Count</label>
						<input type="text" id="gg-particle-count" tabindex="3">
						<div id="gg-particle-count-slider"></div>
					</section>
					<section class="clearfix">
						<div class="range">
							<label for="gg-particle-size">Particle Size</label>	
							<input type="text" id="gg-particle-size-min" class="min" tabindex="4">
							<input type="text" id="gg-particle-size-max" class="max" tabindex="5">
							<div id="gg-particle-size-slider"></div>
						</div>
					</section>
					<section class="clearfix">
						<div class="range">
							<label for="gg-particle-alpha">Particle Alpha</label>
							<input type="text" id="gg-particle-alpha-min" class="min" tabindex="6">
							<input type="text" id="gg-particle-alpha-max" class="max" tabindex="7">
							<div id="gg-particle-alpha-slider"></div>
						</div>
					</section>
				</div>

				<div class="control-group">
					<h2>Polygons</h2>
					<section class="clearfix">
						<label for="gg-polygon-count">Polygon Count</label>
						<input type="text" id="gg-polygon-count" tabindex="8">
						<div id="gg-polygon-count-slider"></div>
					</section>
					<section class="clearfix">
						<div class="range">
							<label for="gg-polygon-size">Polygon Size</label>
							<input type="text" id="gg-polygon-size-min" class="min" tabindex="9">
							<input type="text" id="gg-polygon-size-max" class="max" tabindex="10">
							<div id="gg-polygon-size-slider"></div>
						</div>
					</section>
					<section class="clearfix">
						<div class="range">
							<label for="gg-polygon-sides">Polygon Sides</label>	
							<input type="text" id="gg-polygon-sides-min" class="min" tabindex="11">
							<input type="text" id="gg-polygon-sides-max" class="max" tabindex="12">
							<div id="gg-polygon-sides-slider"></div>
						</div>
					</section>
					<section class="clearfix">
						<div class="range">
							<label for="gg-polygon-alpha">Polygon Alpha</label>	
							<input type="text" id="gg-polygon-alpha-min" class="min" tabindex="13">
							<input type="text" id="gg-polygon-alpha-max" class="max" tabindex="14">
							<div id="gg-polygon-alpha-slider"></div>
						</div>
					</section>
				</div>

				<div class="control-group">	
					<h2>Actions</h2>
					<section class="clearfix">
						<a href="#" class="button" id="gg-generate" tabindex="15"><span class="entypo-flash"></span>Generate</a>
						<a href="#" class="button" id="gg-invert" tabindex="16"><span class="entypo-adjust"></span>Invert</a>
						<a href="#" class="button" id="gg-export" tabindex="17"><span class="entypo-export"></span>Export PNG</a>
						<a href="#" class="button" id="gg-reset" tabindex="18"><span class="entypo-arrows-ccw"></span>Reset</a>
					</section>
				</div>

			</div>
		</div>
		<div class="canvas-container">
			<div class="canvas-container-inner">
				<img src="" class="canvas-image">
			</div>
		</div>
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
		<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.2/jquery-ui.min.js"></script>
		<script src="js/lib.js"></script>
		<script src="js/grungenerator.js"></script>
		<script src="js/main.js"></script>
	</body>
</html>