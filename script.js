function getFormvalue() {
	
      // Accessing the form element by its ID
    var form = document.getElementById("form1");
	
     // Accessing the input elements by their names
	var firstNameInput = form.elements["fname"];
	var lastNameInput = form.elements["lname"];
   
	 // Getting the values entered by the user
	var firstName = firstNameInput.value;
	var lastName = lastNameInput.value;

    // Checking if both first name and last name are provided
	if(firstName && lastName){
    // Displaying the first and last name using alert	
	alert("First Name: " + firstName + " Last Name: " + lastName);
	} else {
     // Displaying an alert if either first name or last name is missing
	alert("Please enter both First Name and Last Name.");
	}
	 // Preventing the form from submitting and refreshing the page
    return false;
}

 // let btn = document.getElementById("button");

// btn.addEventListener("click", getFormvalue);


