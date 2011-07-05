static var currentspeed : int;
static var stateofcar : int;
/* Bedeutung der Variable stateofcar:
	0...waiting Position (keine Beschl. und Geschw = 0);
	1...accelerate forward
	2...braking
	3...accelerate back
	*/
var wheelc : WheelCollider;

function start() {
	stateofcar = 0;	
}

function Update () {
	currentspeed = Mathf.Round(2 * Mathf.PI * wheelc.radius * wheelc.rpm  * 6/100);
}