static var currentspeed : int;
var wheelc : WheelCollider;

function Update () {
	currentspeed = Mathf.Round(2 * Mathf.PI * wheelc.radius * wheelc.rpm  * 6/100);
}