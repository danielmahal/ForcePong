var Force = function() {
	var force = this;
	this.x = 0;
	this.y = 0;
	
	this.angle = 0;
	
	this.force = 50;
	
	this.update = function(world ,mvpX, mvpY) {
		
		var anglediff = ((Math.atan2(mvpY,mvpX)) - force.angle);
		
		while(anglediff < -Math.PI) {
			anglediff += Math.PI * 2;
		}
		while(anglediff > Math.PI) {
			anglediff -= Math.PI * 2;
		}
		
		force.angle += anglediff / 15;
		
		force.x = Math.cos(force.angle)*world.size;
		force.y = Math.sin(force.angle)*world.size;
	}
	
	this.draw = function(context) {
		context.beginPath();
		context.arc(force.x,force.y,force.force,0, Math.PI*2);
		context.stroke();
		context.closePath();
	}
}