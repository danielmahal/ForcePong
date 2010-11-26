var Paddle = function() {
	var paddle = this;
	this.x = 0;
	this.y = 0;
	
	this.angle = 0;
	
	this.force = 30;
	
	this.update = function(world ,mvpX, mvpY) {
		
		var anglediff = ((Math.atan2(mvpY,mvpX)) - paddle.angle);
		
		while(anglediff < -Math.PI) {
			anglediff += Math.PI * 2;
		}
		while(anglediff > Math.PI) {
			anglediff -= Math.PI * 2;
		}
		
		paddle.angle += anglediff / 15;
		
		paddle.x = Math.cos(paddle.angle)*world.size;
		paddle.y = Math.sin(paddle.angle)*world.size;
	}
	
	this.draw = function(context) {
		context.beginPath();
		context.arc(paddle.x,paddle.y,paddle.force,0, Math.PI*2);
		context.stroke();
		context.closePath();
	}
}