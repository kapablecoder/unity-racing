var accTorque = 250;
var braTorque = 300;
var left : WheelCollider;
var right : WheelCollider;

function FixedUpdate () {
		//Vorwärtsbewegung des Autos!
		left.motorTorque = accTorque * Input.GetAxis("Vertical");//bewegt sich zwischen -1 und 1
		right.motorTorque = accTorque * Input.GetAxis("Vertical");//bewegt sich zwischen -1 und 1

		//Lenkbewegung des Autos
		left.steerAngle = 10 * Input.GetAxis("Horizontal");//bewegt sich zwischen -1 und 1
		right.steerAngle = 10 * Input.GetAxis("Horizontal");//bewegt sich zwischen -1 und 1

}