

// function validate()
// {
//     let status=false;
//     let emailAddress=document.getElementById("email").value;
//     let password=document.getElementById("password").value;

//     if(emailAddress === "akshay" && password === "akshay")
//     {
//        status=true;
//     }
    
// }


// Credentials array
var credentials = [
    { "email": "akshay", "pass": "akshay" },
    { "email": "akshay1", "pass": "akshay1" }
];

// Function to validate user credentials
function validate(email, password) {
    for (let i = 0; i < credentials.length; i++) {
        if (credentials[i].email === email && credentials[i].pass === password) {
            return true; // Valid credentials
        }
    }
    return false; // Invalid credentials
}

// Function to authenticate user
function authentication() {
    alert("Authentication called");

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (validate(email, password)) {
        alert("Login successful!");
    } else {
        alert("Invalid email or password.");
    }
}
