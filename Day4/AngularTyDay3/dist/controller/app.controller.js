var MyController = /** @class */ (function () {
    function MyController($scope) {
        this.$scope = $scope;
        this.message = 'Welcome to  TypeScript!';
        this.users = [
            { name: 'akshay', email: 'akshay@gmail.com' },
            { name: 'vishal ', email: 'vishal@gmail.com' },
            { name: 'yogesh', email: 'yogesh@gmail.com' }
        ];
        $scope['vm'] = this;
    }
    MyController.$inject = ['$scope'];
    return MyController;
}());

//angular.module('myApp').controller('MyController', MyController);
