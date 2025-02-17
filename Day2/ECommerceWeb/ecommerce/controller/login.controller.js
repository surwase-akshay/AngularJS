app.controller("LoginController", function ($scope, $window) {
    $scope.user = { email: "", password: "" };

    $scope.users = [
        { email: "akshay@gmail.com", password: "akshay" },
        { email: "abc@gmail.com", password: "12345" },
        { email: "xyz@gmail.com", password: "12345" }
    ];

    $scope.onValidate = function () {
        var matchedUser = $scope.users.find(
            user => user.email === $scope.user.email && user.password === $scope.user.password
        );

        if (matchedUser) {
            localStorage.setItem("loggedInUser", matchedUser.email);
            $scope.$applyAsync(function () {
                $window.location.href = "index.html"; 
            });
        } else {
            $scope.errorMessage = "Invalid credentials. Please try again.";
        }
    };
});


