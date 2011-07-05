var AccelerateForward = 250;
var AccelerateBack = 30;
var brakeforce = 300;
var left : WheelCollider;
var right : WheelCollider;
private var Vert : float;
private var Horiz : float;
var standartfriction = 10;
private var text = " ";


function FixedUpdate () {
		//herrausfinden des aktuellen Zustands des Autos
		Vert = Input.GetAxis("Vertical");
		Horiz = Input.GetAxis("Horizontal");
		
		
		if (Globals.currentspeed == 0 && Vert==0) {
			Globals.stateofcar = 0; //Car in waiting Position
			text = "warten  ";
			}
			
		if ((Vert>0) && (Globals.currentspeed>=0)) {
			Globals.stateofcar = 1; //Car accelerate foward
				left.motorTorque = AccelerateForward * Vert;
				right.motorTorque = AccelerateForward * Vert;
			text = "beschl. vor   ";	
			}
			
		if ((Vert>0) && (Globals.currentspeed<0) || (Vert<0) &&(Globals.currentspeed>0)) {
			Globals.stateofcar = 2; //Brakeing
				left.brakeTorque = brakeforce * Vert * (-1);
				right.brakeTorque = brakeforce * Vert * (-1);
			text = "bremsen   ";	
			}
			
		if ((Vert<0) && (Globals.currentspeed<0)) {
			Globals.stateofcar = 3; //Car accelerate back
				left.motorTorque = AccelerateBack * Vert;
				right.motorTorque = AccelerateBack * Vert;
			text = "rückwärts    ";
			}
		if (Vert==0 && Globals.currentspeed != 0) {
			Globals.stateofcar = 4; //Car rolling
			text = "rollen    ";
			}
			
		Debug.Log(text+left.motorTorque.ToString());
		
		
		
		
		
		//Lenkbewegung des Autos
		left.steerAngle = 10 * Input.GetAxis("Horizontal");//bewegt sich zwischen -1 und 1
		right.steerAngle = 10 * Input.GetAxis("Horizontal");//bewegt sich zwischen -1 und 1
		
}

function Start () {

	rigidbody.centerOfMass.y = 0;

}