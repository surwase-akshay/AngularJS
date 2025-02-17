var MyLoginController = /** @class */ (function () {
    function MyLoginController($scope) {
        this.$scope = $scope;
        this.message = 'Welcome to  TypeScript!';
        this.users = [
            { name: 'akshay', email: 'akshay@gmail.com' },
            { name: 'vishal ', email: 'vishal@gmail.com' },
            { name: 'yogesh', email: 'yogesh@gmail.com' }
        ];
        $scope['vm'] = this;
    }
    MyLoginController.$inject = ['$scope'];
    return MyLoginController;
}());


