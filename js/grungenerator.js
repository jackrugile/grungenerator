var GrunGenerator = function(){
	var self = this;
		
	self.settings = {
		width: 800,
		height: 800,
		particleCount: 1000,
		particleSizeMin: 3,
		particleSizeMax: 10,
		polygonCount: 200
	}
	
	self.controls = {
		width: {
			setting: 'width',
			range: 'min',
			min: 50,
			max: 4000,
			initial: self.settings.width,
			current: self.settings.width,
			inputElem: $('#gg-width'),
			sliderElem: $('#gg-width-slider')
		},
		height: {
			setting: 'height',
			range: 'min',
			min: 50,
			max: 4000,
			initial: self.settings.height,
			current: self.settings.height,
			inputElem: $('#gg-height'),
			sliderElem: $('#gg-height-slider')
		},
		particleCount: {
			setting: 'particleCount',
			range: 'min',
			min: 0,
			max: 100000,
			initial: self.settings.particleCount,
			current: self.settings.particleCount,
			inputElem: $('#gg-particle-count'),
			sliderElem: $('#gg-particle-count-slider')
		},
		particleSize: {
			setting: 'particleSize',
			range: true,
			min: 1,
			max: 100,
			initial: [self.settings.particleSizeMin, self.settings.particleSizeMax],
			current: [self.settings.particleSizeMin, self.settings.particleSizeMax],
			inputElemMin: $('#gg-particle-size-min'),
			inputElemMax: $('#gg-particle-size-max'),
			sliderElem: $('#gg-particle-size-slider')
		},
		polygonCount: {
			setting: 'polygonCount',
			range: 'min',
			min: 0,
			max: 10000,
			initial: self.settings.polygonCount,
			current: self.settings.polygonCount,
			inputElem: $('#gg-polygon-count'),
			sliderElem: $('#gg-polygon-count-slider')
		}
	};
	
	self.buttons = {
		generate: $('#gg-generate'),
		exportPNG: $('#gg-export'),		
		reset: $('#gg-reset')
	};
	
	self.init = function(){
		self.panel = $('.panel');
		self.canvas = document.createElement('canvas');
		self.$canvas = $(self.canvas);
		self.canvasContainer = $('.canvas-container');
		if(!(self.canvas.getContext && self.canvas.getContext('2d'))){
			alert('HTML5 canvas is required to run GrunGenerator');
			return false;
		}	
		self.ctx = self.canvas.getContext('2d');
		self.canvas.width = self.settings.width;
		self.canvas.height = self.settings.height;
		
		self.setSlideControl(self.controls.width);
		self.setSlideControl(self.controls.height);
		self.setSlideControl(self.controls.particleCount);
		self.setSlideControl(self.controls.particleSize);
		self.setSlideControl(self.controls.polygonCount);
		self.setButtons();
		self.setCanvasContainer();
		
		self.generate();
		self.canvasContainer.append(self.canvas);
	};
	
	self.reset = function(){
		self.resetSlideControl(self.controls.width);
		self.resetSlideControl(self.controls.height);
		self.resetSlideControl(self.controls.particleCount);
		self.resetSlideControl(self.controls.particleSize);
		self.resetSlideControl(self.controls.polygonCount);
	};
	
	self.setSlideControl = function(control){			
		if(control.range === 'min' || control.range === 'max'){
			/*==============================================================================*/
			/* Single Slider */
			/*==============================================================================*/
			control.sliderElem.slider({
				range: control.range,
				min: control.min,
				max: control.max,
				value: control.current,
				slide: function(e, ui){
					control.inputElem.val(ui.value);
					control.current = self.settings[control.setting] = ui.value;
				}
			});
						
			control.inputElem.val(self.settings[control.setting]);	
			
			control.inputElem.on('change', function(){															
				this.value = this.value.replace(/\D/g,'');
				if(this.value > control.max){
					this.value = control.max;
				}
				if(this.value < control.min){
					this.value = control.min;
				}
				if(!this.value){
					this.value = 0;
				}
				control.current = this.value;
				self.settings[control.setting] = this.value;
				control.sliderElem.slider('value', this.value);
			});
			
			control.inputElem.on('keydown', function(e){
				if(e.keyCode == '13'){
					$(this).blur();
				}		
			});		
		} else {
			/*==============================================================================*/
			/* Range Slider */
			/*==============================================================================*/
			control.sliderElem.slider({
				range: control.range,
				min: control.min,
				max: control.max,
				values: control.current,
				slide: function(e, ui){
					control.inputElemMin.val(ui.values[0]);
					control.inputElemMax.val(ui.values[1]);
					control.current[0] = self.settings[control.setting+'Min'] = ui.values[0];
					control.current[1] = self.settings[control.setting+'Max'] = ui.values[1];
				}
			});
			
			control.inputElemMin.val(self.settings[control.setting+'Min']);
			control.inputElemMax.val(self.settings[control.setting+'Max']);
			
			control.inputElemMin.on('change', function(){															
				this.value = this.value.replace(/\D/g,'');
				if(this.value > control.max){
					this.value = control.max;
				}
				if(this.value < control.min){
					this.value = control.min;
				}
				if(this.value > self.settings[control.setting+'Max']){
					this.value = self.settings[control.setting+'Max'];
				}
				if(!this.value){
					this.value = 0;
				}				
				control.current[0] = this.value;
				self.settings[control.setting+'Min'] = this.value;
				control.sliderElem.slider('value', [this.value, self.settings[control.setting+'Max']]);
			});
			
			control.inputElemMax.on('change', function(){															
				this.value = this.value.replace(/\D/g,'');
				if(this.value > control.max){
					this.value = control.max;
				}
				if(this.value < control.min){
					this.value = control.min;
				}
				if(this.value < self.settings[control.setting+'Min']){
					this.value = self.settings[control.setting+'Min'];
				}
				if(!this.value){
					this.value = 0;
				}
				control.current[1] = this.value;
				self.settings[control.setting+'Max'] = this.value;
				control.sliderElem.slider('value', [self.settings[control.setting+'Min'], this.value]);
			});
			
			control.inputElemMin.on('keydown', function(e){
				if(e.keyCode == '13'){
					$(this).blur();
				}		
			});
			
			control.inputElemMax.on('keydown', function(e){
				if(e.keyCode == '13'){
					$(this).blur();
				}		
			});
		} 
	};
	
	self.resetSlideControl = function(control){
		if(control.range === 'min' || control.range === 'max'){
			control.sliderElem.slider('value', control.initial);
			control.inputElem.val(control.initial);
			self.controls[control.setting].current = control.initial;
			self.settings[control.setting] = control.initial;
		} else {
			control.sliderElem.slider('values', [control.initial[0], control.initial[1]]);
			control.inputElemMin.val(control.initial[0]);
			control.inputElemMax.val(control.initial[1]);
			self.controls[control.setting].current = [control.initial[0], control.initial[1]];
			self.settings[control.setting+'Min'] = control.initial[0];
			self.settings[control.setting+'Max'] = control.initial[1];
		}
	};
	
	self.setButtons = function(){
		self.buttons.generate.on('click', function(e){
			e.preventDefault();
			self.generate();
		});
		
		self.buttons.exportPNG.on('click', function(e){
			e.preventDefault();
			self.exportPNG();
		});
		
		self.buttons.reset.on('click', function(e){
			e.preventDefault();
			self.reset();
		});
	};
	
	self.setCanvasContainer = function(){			
		self.setCanvasContainerWidth();
		$(window).on('resize', self.setCanvasContainerWidth);		
	};
	
	self.setCanvasContainerWidth = function(){
		var winWidth = $(window).width();
		var winHeight = $(window).height();
		var panelWidth = self.panel.outerWidth();
		var newContainerWidth = winWidth - panelWidth - 1;
		var padding = 44;
		
		self.canvasContainer.css({
			'width': newContainerWidth+'px'			 
		});
		
		var x1 = (self.settings.width <= newContainerWidth) ? panelWidth + 1 : winWidth - self.settings.width - padding;
		var y1 = (self.settings.height <= winHeight) ? 0 : winHeight - self.settings.height - padding;
		var x2 = (self.settings.width <= newContainerWidth) ? winWidth - self.settings.width : panelWidth + 1 + padding;
		var y2 = (self.settings.height <= winHeight) ?  winHeight - self.settings.height : 0 + padding;
		
		self.$canvas.draggable({
			containment: [x1, y1, x2, y2]					   
		});		
		
	};
	
	self.setDimensions = function(){
		self.canvas.width = self.settings.width;
		self.canvas.height = self.settings.height;	
		self.setCanvasContainerWidth();
	};
	
	self.rand = function(min, max){
        return Math.floor( (Math.random() * (max - min + 1) ) + min);
    };
	
	self.generate = function(){
		self.setDimensions();		
		self.ctx.clearRect(0, 0, self.settings.width, self.settings.height);
		
		var i = self.settings.particleCount;
		while(i--){
			var width = self.rand(self.settings.particleSizeMin, self.settings.particleSizeMax)/3;
			var height = self.rand(self.settings.particleSizeMin, self.settings.particleSizeMax)/3;
			self.ctx.save();
			self.ctx.translate(self.rand(0, self.settings.width) - (width/2), self.rand(0, self.settings.height) - (height/2));
			self.ctx.rotate(self.rand(0, Math.PI * 2));
			self.ctx.fillStyle = 'hsla(0, 0%, 100%, '+self.rand(1, 20)/100+')';
			self.ctx.fillRect(0, 0, width, height);
			self.ctx.restore();
		}
		
		var j = self.settings.polygonCount;
		while(j--){
			var polygon = new self.Polygon();
			polygon.render();
		};		
	};
	
	self.exportPNG = function(){
		var dataURL = self.canvas.toDataURL();
		$.ajax({
			type: 'POST',
			url: 'create-image.php',
			data: 'dataurl='+dataURL,
			success: function(data){
				document.location.href = 'download-image.php?img='+data;
			}
		});	
	}
	
	self.compare = function(a, b) {
		if (a.angle < b.angle)
			return -1;
		if (a.angle > b.angle)
			return 1;
			return 0;
	}
	
	self.Polygon = function(){
		var minRadius = 2,
			maxRadius = 4,
			minPoints = 3,
			maxPoints = 6;
		this.radius = self.rand(minRadius, maxRadius);
		this.x = self.rand(0, self.settings.width);
		this.y = self.rand(0, self.settings.height);
		this.vy = 0;
		this.alpha = self.rand(1, 20) / 100;
		this.points = [];
		var i = self.rand(minPoints, maxPoints);
		while(i--){
			var angle = Math.random() * (Math.PI * 2),
				x = Math.round(Math.cos(angle) * this.radius),
				y = Math.round(Math.sin(angle) * this.radius);
			this.points.push({
				x: x, 
				y: y,
				angle: angle
			});
			
		}
		this.points.sort(self.compare);
	};
	
	self.Polygon.prototype.render = function(){
		var i = this.points.length - 1;
		self.ctx.save();
		self.ctx.translate(this.x, this.y);
		self.ctx.beginPath();  
		self.ctx.moveTo(this.points[i].x, this.points[i].y);
		while(i--){
			self.ctx.lineTo(this.points[i].x, this.points[i].y);    
		}
		self.ctx.closePath();
		self.ctx.fillStyle = 'hsla(0, 0%, 100%, '+this.alpha+')';
		self.ctx.fill();
		self.ctx.restore();
	};
	
	return self;
};