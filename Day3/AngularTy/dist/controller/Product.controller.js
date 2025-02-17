
var ProductController = /** @class */ (function () {
    function ProductController($scope) {
        this.$scope = $scope;
        this.message = 'Welcome to the Product Store!';
        this.products = [
            { name: "Smartphone", price: 30000, image: "smartphone.jpg", description: "Latest Android smartphone with high-end features" },
            { name: "Headphones", price: 2500, image: "headphones.jpg", description: "Wireless noise-canceling headphones" },
            { name: "Backpack", price: 1500, image: "backpack.jpg", description: "Durable and spacious backpack for travel and work" }
        ];
        // Bind controller instance to $scope
        $scope.vm = this;
    }
    ProductController.$inject = ['$scope'];
    return ProductController;
}());

// Register the controller with the AngularJS module
angular.module('myApp').controller('ProductController', ProductController);
