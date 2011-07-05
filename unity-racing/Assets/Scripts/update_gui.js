var guitext : GUIText;
var guiSpeedDisplay : Texture2D;
var guiSpeedPointer : Texture2D;

function Update () {
	guitext.text = Globals.currentspeed.ToString();
}

function Start () {
	//guitext.material.color = Color.black;
}

function OnGUI () {
	GUI.Label (Rect (5, Screen.height - 145, 160, 140), guiSpeedDisplay);
	GUIUtility.RotateAroundPivot( Globals.currentspeed - 105, Vector2(82.5,Screen.height - 65));
	GUI.DrawTexture(Rect (48, Screen.height - 120, 70, 60), guiSpeedPointer, ScaleMode.StretchToFill, true, 0);
}