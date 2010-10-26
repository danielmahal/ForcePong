var Force = function() {
	var force = this;
	this.x = 0;
	this.y = 0;
	
	this.angle = 0;
	
	this.force = 50;
	
	this.update = function(world ,mvpX, mvpY) {
		var angle = Math.atan2(mvpY,mvpX);
		
		force.angle += (angle - force.angle) / 20;
		
		force.x = Math.cos(force.angle)*world.size;
		force.y = Math.sin(force.angle)*world.size;
	}
	
	this.draw = function(context) {
		context.beginPath();
		context.arc(force.x,force.y,force.force,0,Math.PI*2);
		context.closePath();
		context.stroke();
	}
}