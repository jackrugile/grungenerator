var GrunGenerator = function(){
	var self = this;
	
	self.controls = {
		width: {
			min: 50,
			max: 4000,
			initial: 800,
			current: 800,
			inputElem: $('#gg-width'),
			sliderElem: $('#gg-width-slider')
		},
		height: {
			min: 50,
			max: 4000,
			initial: 800,
			current: 800,
			inputElem: $('#gg-height'),
			sliderElem: $('#gg-height-slider')
		},
		particleCount: {
			min: 1,
			max: 1000000,
			initial: 1000,
			current: 1000,
			inputElem: $('#gg-particle-count'),
			sliderElem: $('#gg-particle-count-slider')
		}
	};
	
	self.buttons = {
		generate: $('#gg-generate')
	};
	
	self.init = function(){
		self.canvas = document.createElement('canvas');
		if(!(self.canvas.getContext && self.canvas.getContext('2d'))){
			alert('HTML5 canvas is required to run GrunGenerator');
			return false;
		}	
		self.ctx = self.canvas.getContext('2d');
		self.canvasWidth = self.canvas.width = self.controls.width.current;
		self.canvasHeight = self.canvas.height = self.controls.height.current;
		
		self.setupSlideControl(self.controls.width);
		self.setupSlideControl(self.controls.height);
		self.setupSlideControl(self.controls.particleCount);
		self.bindButtons();
		
		self.generate();
		document.body.appendChild(self.canvas);
	};
	
	self.reset = function(){
		
	};
	
	self.setupSlideControl = function(control){		
		control.sliderElem.slider({
            min: control.min,
            max: control.max,
            value: control.current,
			slide: function(e, ui){
				control.inputElem.val(ui.value);
				control.current = ui.value;
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
			control.current = this.value;			
        });			
	};
	
	self.bindButtons = function(){
		self.buttons.generate.on('click', function(e){
			e.preventDefault();
			self.generate();
		});
	};
	
	self.setDimensions = function(){
		self.canvasWidth = self.canvas.width = self.controls.width.current;
		self.canvasHeight = self.canvas.height = self.controls.height.current;	
	}
	
	self.rand = function(min, max){
        return Math.floor( (Math.random() * (max - min + 1) ) + min);
    };
	
	self.generate = function(){
		self.setDimensions();
		self.ctx.clearRect(0, 0, self.canvasWidth, self.canvasHeight);
		
		var i = self.controls.particleCount.current;		
		while(i--){
			self.ctx.fillStyle = 'hsla(0, 0%, 100%, '+self.rand(1, 50)/100+')';
			self.ctx.fillRect(self.rand(0, self.canvasWidth), self.rand(0, self.canvasHeight), self.rand(1, 2), self.rand(1, 2));
		}
		
	};
	
	return self;
};