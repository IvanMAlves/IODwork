function onSubmit() {
	//Todo getNameValue
	let name = document.getElementById("name").value;
	if(!isValidName(name)) {
		alert('Invalid Name !');
		return;
	}
	//Todo getEmailValue
	let email = document.getElementById("email").value;
	if(!isValidEmail(email)) {
		alert('Invalid Email !');
		return;
	}
}

function isValidName(name) {
	if(name.length > 0) {
		return true;
	}
	return false;
}

function isValidEmail(email) {
	let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(email.match(mailformat)) {
		return true;
	}
	return false;
}
