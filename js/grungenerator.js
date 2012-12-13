var GrunGenerator = function(){
	var self = this;
	
	self.settings = {
		width: 800,
		height: 800,
		particleCount: 1000,
		polygonCount: 200
	}
	
	self.controls = {
		width: {
			setting: 'width',
			min: 50,
			max: 4000,
			initial: self.settings.width,
			current: self.settings.width,
			inputElem: $('#gg-width'),
			sliderElem: $('#gg-width-slider')
		},
		height: {
			setting: 'height',
			min: 50,
			max: 4000,
			initial: self.settings.height,
			current: self.settings.height,
			inputElem: $('#gg-height'),
			sliderElem: $('#gg-height-slider')
		},
		particleCount: {
			setting: 'particleCount',
			min: 0,
			max: 100000,
			initial: self.settings.particleCount,
			current: self.settings.particleCount,
			inputElem: $('#gg-particle-count'),
			sliderElem: $('#gg-particle-count-slider')
		},
		polygonCount: {
			setting: 'polygonCount',
			min: 0,
			max: 10000,
			initial: self.settings.polygonCount,
			current: self.settings.polygonCount,
			inputElem: $('#gg-polygon-count'),
			sliderElem: $('#gg-polygon-count-slider')
		}
	};
	
	self.buttons = {
		generate: $('#gg-generate')
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
		self.setSlideControl(self.controls.polygonCount);
		self.setButtons();
		self.setCanvasContainer();
		
		self.generate();
		self.canvasContainer.append(self.canvas);
	};
	
	self.reset = function(){
		
	};
	
	self.setSlideControl = function(control){		
		control.sliderElem.slider({
            min: control.min,
            max: control.max,
            value: control.current,
			slide: function(e, ui){
				control.inputElem.val(ui.value);
				control.current = self.settings[control.setting] = ui.value;
			}
        });
		
		control.inputElem.val(control.current);
				
		control.inputElem.on('keyup', function(){
			this.value = this.value.replace(/\D/g,'');
            control.sliderElem.slider('value', this.value);
        });
		
		control.inputElem.on('change', function(){															
			this.value = this.value.replace(/\D/g,'');			
			if(this.value > control.max){
				this.value = control.max;
			}
			if(this.value < control.min){
				this.value = control.min;
			}
			control.current = self.settings[control.setting] = this.value;			
        });
		
		control.inputElem.on('keydown', function(e){
			if(e.keyCode == '13'){
				$(this).blur();
			}		
		});
	};
	
	self.setButtons = function(){
		self.buttons.generate.on('click', function(e){
			e.preventDefault();
			self.generate();
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
			var width = self.rand(1, 6)/3;
			var height = self.rand(1, 6)/3;
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