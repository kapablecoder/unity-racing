var accTorque = 250;
var braTorque = 300;
var left : WheelCollider;
var right : WheelCollider;
var Vert : float;
var Horiz : float;

function FixedUpdate () {
		//herrausfinden des aktuellen Zustands des Autos
		Vert = Input.GetAxis("Vertical");
		Horiz = Input.GetAxis("Horizontal");
		
		if ((Vert>0) && (Globals.currentspeed<0) || (Vert<0) &&(Globals.currentspeed>0)) {
			Globals.stateofcar = 2; //Brakeing
			}
		if (Globals.currentspeed == 0) {
			Globals.stateofcar = 0; //Car in waiting Position
			}
		if ((Vert>0) && (Globals.currentspeed>=0)) {
			Globals.stateofcar = 1; //Car accelerate foward
			}
		if ((Vert<0) && (Globals.currentspeed<0)) {
			Globals.stateofcar = 3; //Car accelerate back
			}
		if (Vert==0) {
			Globals.stateofcar = 4; //Car rolling
			}
		
		
		
		
		
		//Lenkbewegung des Autos
		left.steerAngle = 10 * Input.GetAxis("Horizontal");//bewegt sich zwischen -1 und 1
		right.steerAngle = 10 * Input.GetAxis("Horizontal");//bewegt sich zwischen -1 und 1
		
}

function Start () {

	rigidbody.centerOfMass.y = 0;

}