function onSignIn(googleUser){
	 var profile = googleUser.getBasicProfile();
	 
	 console.log("ID: " + profile.getId()); // Don't send this directly to your server!
	 console.log("Full Name: " + profile.getName());
	 console.log("Given Name: " + profile.getGivenName()); 
	 console.log("Family Name: " + profile.getFamilyName());
	 console.log("Image URL: " + profile.getImageUrl());
	 console.log("Email: " + profile.getEmail());
	 
	 document.getElementById("resultado").innerHTML =
		 "<br> Nombre Completo:" +profile.getName()+
		 "<br> Nombre :" +profile.getGivenName()+
		 "<br> Apellido:" +profile.getFamilyName()+
		 "<br> Correo:" +profile.getEmail()+
	 	 "<br> <img src='" +profile.getImageUrl()+"'>" ;
	 
}


function signOut(){
	
	gapi.auth2.getAuthInstance().signOut().then(function(){
		
		console.log("User signed out Camilo")
		var profile =null
		document.getElementById("resultado").innerHTML = null;	
		
		
	})	
}