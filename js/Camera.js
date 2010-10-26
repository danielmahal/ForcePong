var Camera = function(aCanvas, aContext, x, y, debug) {
	var camera = this;
	
	var canvas = aCanvas;
	var context = aContext;
	var debug = debug;
	
	this.x = x;
	this.y = y;
	
	this.minZoom = 1;
	this.maxZoom = 1;
	this.zoom = this.minZoom;
	
	this.setupContext = function() {
		var translateX = canvas.width / 2 - camera.x * camera.zoom;
		var translateY = canvas.height / 2 - camera.y * camera.zoom;
		
		// Reset transform matrix
		context.setTransform(1,0,0,1,0,0);
		context.fillStyle = '#25414f';
		context.fillRect(0,0,canvas.width, canvas.height);
		
		context.fillStyle = context.strokeStyle = '#fff';
		
		context.translate(translateX, translateY);
		context.scale(camera.zoom, camera.zoom);
		
		if(debug) {
			drawDebug();
		}
	};
	
	this.update = function(model) {

	};
	
	// Gets bounds of current zoom level of current position
	this.getBounds = function() {
		return [
			{x: camera.x - canvas.width / 2 / camera.zoom, y: camera.y - canvas.height / 2 / camera.zoom},
			{x: camera.x + canvas.width / 2 / camera.zoom, y: camera.y + canvas.height / 2 / camera.zoom}
		];
	};
	
	// Gets bounds of minimum zoom level of current position
	this.getOuterBounds = function() {
		return [
			{x: camera.x - canvas.width / 2 / camera.minZoom, y: camera.y - canvas.height / 2 / camera.minZoom},
			{x: camera.x + canvas.width / 2 / camera.minZoom, y: camera.y + canvas.height / 2 / camera.minZoom}
		];
	};
	
	// Gets bounds of maximum zoom level of current position
	this.getInnerBounds = function() {
		return [
			{x: camera.x - canvas.width / 2 / camera.maxZoom, y: camera.y - canvas.height / 2 / camera.maxZoom},
			{x: camera.x + canvas.width / 2 / camera.maxZoom, y: camera.y + canvas.height / 2 / camera.maxZoom}
		];
	};
	
	this.startUILayer = function() {
		context.setTransform(1,0,0,1,0,0);
	}
	
	var debugBounds = function(bounds, text) {
		context.strokeStyle   = '#000';
		context.fillStyle   = '#000';
		context.beginPath();
		context.moveTo(bounds[0].x, bounds[0].y);
		context.lineTo(bounds[0].x, bounds[1].y);
		context.lineTo(bounds[1].x, bounds[1].y);
		context.lineTo(bounds[1].x, bounds[0].y);
		context.closePath();
		context.stroke();
		context.fillText(text, bounds[0].x + 10, bounds[0].y + 10);
	};
	
	var drawDebug = function() {
		debugBounds(camera.getInnerBounds(), 'Maximum zoom camera bounds');
		debugBounds(camera.getOuterBounds(), 'Minimum zoom camera bounds');
		debugBounds(camera.getBounds(), 'Current zoom camera bounds');
	};
};