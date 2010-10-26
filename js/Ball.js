var Ball = function() {
	var ball = this;
	
	ball.x = 0;
	ball.y = 0;
	
	ball.angle = Math.random() * Math.PI * 2;
	ball.momentum = 1;
	
	ball.size = 2;
	
	ball.update = function(world) {
		var distanceFromCenter = Math.sqrt(Math.pow(ball.y, 2) + Math.pow(ball.x, 2));
		if(distanceFromCenter > world.size) {
			ball.x = 0;
			ball.y = 0;
			ball.angle = Math.random() * Math.PI * 2;
		}
		
		ball.x += Math.cos(ball.angle) * ball.momentum;
		ball.y += Math.sin(ball.angle) * ball.momentum;
	}
	
	ball.draw = function(context) {
		context.beginPath();
		context.arc(ball.x,ball.y,ball.size,0,Math.PI*2);
		context.closePath();
		context.fill();
	}
};