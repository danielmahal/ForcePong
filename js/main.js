
var runLoop = function() {
	app.update();
	app.draw();
}

var app = new App(document.getElementById('canvas'));

window.addEventListener('resize', app.resize);
document.addEventListener('mousemove', app.mousemove);

setInterval(runLoop, 1000/60);
//runLoop();