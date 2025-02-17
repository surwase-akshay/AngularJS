authModule.controller("LoginController", function ($scope, $window) {
    $scope.user = { email: "", password: "" };

    $scope.users = [
        { name: 'akshay', email: 'akshay@gmail.com' },
        { name: 'vishal ', email: 'vishal@gmail.com' },
        { name: 'yogesh', email: 'yogesh@gmail.com' }
    ];

    $scope.onValidate = function () {
        var matchedUser = $scope.users.find(
            user => user.email === $scope.user.email && user.password === $scope.user.password
        );

        if (matchedUser) {
            localStorage.setItem("loggedInUser", matchedUser.email);
            $scope.$applyAsync(function () {
                alert("Hello");
                // $window.location.href = "index.html"; 
            });
        } else {
            $scope.errorMessage = "Invalid credentials. Please try again.";
        }
    };
});


