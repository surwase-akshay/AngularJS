var app = angular.module("transflower", []);

app.controller("LoginController", function($scope) {
    // User credentials
    $scope.user = {
        email: "",
        pass: ""
    };

    $scope.users={email: "abc@gmail.com",pass: "12345"   },
        {email: "abc1@gmail.com",pass: "12345"   },
        
        
 

    // Login validation function
    $scope.onValidate = function() {
        if ($scope.user.email === "akshay@gmail.com" && $scope.user.pass === "akshay") {
            alert("Hi from Angular - Login Successful!");
        } else {
            alert("Invalid Credentials");
        }
    };

});


