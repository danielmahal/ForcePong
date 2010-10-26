var World = function() {
	var world = this;
	
	world.size = 500;
	
	world.update = function() {
		
	};
	
	world.draw = function(context) {
		context.beginPath();
		context.arc(0,0,world.size,0,Math.PI*2);
		context.closePath();
		context.stroke();
	}
}