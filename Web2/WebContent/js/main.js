function captura(){
	//obtener el valor por id
	var nombrecompleto = document.getElementById("nombrecompleto").value;
	var numerodedocumento = document.getElementById("numerodedocumento").value;
	var email = document.getElementById("email").value;
	var clave = document.getElementById("clave").value;
	
	  document.getElementById("resultado").innerHTML =
		  "<br> C.C. " + numerodedocumento +
		  "<br> Nombre Completo " + nombrecompleto +
		  "<br> Email " + email +
		  "<br> Clave " + clave;	  
}

function activarcaja() {

	document.getElementById("nombrecompleto").disabled=false
	document.getElementById("numerodedocumento").disabled=false
	document.getElementById("email").disabled=false
	document.getElementById("clave").disabled=false	
}
function desactivarcaja() {
	
	document.getElementById("nombrecompleto").disabled=true
	document.getElementById("numerodedocumento").disabled=true
	document.getElementById("email").disabled=true
	document.getElementById("clave").disabled=true
	
}