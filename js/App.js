var App = function(canvas) {
	var app = this;
	var model = {},
		canvas = canvas,
		context,
		mouse = {x:0,y:0};
	
	this.update = function() {
		var mvp = getMouseWorldPosition();
		
		model.ball.update(model.world);
		model.force.update(model.world, mvp.x, mvp.y);
	}
	
	this.draw = function() {
		model.camera.setupContext();
		model.world.draw(context);
		model.ball.draw(context);
		model.force.draw(context);
	};
	
	this.mousemove = function(e) {
		mouse.x = e.clientX;
		mouse.y = e.clientY;
	}
	
	this.resize = function() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		
		var padding = 40;
		var heightBasedZoom = canvas.height / (model.world.size+padding)*0.5;
		var widthBasedZoom = canvas.width / (model.world.size+padding)*0.5;
		model.camera.zoom = Math.min(heightBasedZoom,widthBasedZoom);
	};
	
	var getMouseWorldPosition = function() {
		return {
			x: (mouse.x + (model.camera.x * model.camera.zoom - canvas.width / 2)) / model.camera.zoom,
			y: (mouse.y + (model.camera.y * model.camera.zoom  - canvas.height / 2)) / model.camera.zoom
		}
	};
	
	(function() {
		context = canvas.getContext('2d');
		
		model.camera = new Camera(canvas, context, 0, 0, false);
		model.world = new World();
		model.ball = new Ball();
		model.force = new Force();
		
		app.resize();
	})();
};