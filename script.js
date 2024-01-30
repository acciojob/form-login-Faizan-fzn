function getFormvalue() {
	
      // Accessing the form element by its ID
    var form = document.getElementById("form1");
	
     // Accessing the input elements by their names
	var firstNameInput = form.elemen[fname];
	var lastNameInput = form.elemen[lname];
   
	 // Getting the values entered by the user
	var firstName = firstNameInput.value;
	var LastName = LastNameInput.value;

    // Checking if both first name and last name are provided
	if(firstName && LastName){
    // Displaying the first and last name using alert	
	alert("First Name: " + firstName + "lastName: " + lastName);
	} else {
     // Displaying an alert if either first name or last name is missing
	alert("Please enter both First Name and Last Name.");
	}
	 // Preventing the form from submitting and refreshing the page
    return false;
}
