
import * as angular from 'angular';


interface IProduct {
name: string;
price: number;
image: string;
description: string;
}


interface ICustomScope extends angular.IScope {
vm: ProductController;
}


export class ProductController {
static $inject = ['$scope'];
message: string;
products: IProduct[];


constructor(private $scope: ICustomScope) {
this.message = 'Welcome to the Product Store!';

this.products = [
    { name: "Smartphone", price: 30000, image: "smartphone.jpg", description: "Latest Android smartphone with high-end features" },
            { name: "Headphones", price: 2500, image: "headphones.jpg", description: "Wireless noise-canceling headphones" },
            { name: "Backpack", price: 1500, image: "backpack.jpg", description: "Durable and spacious backpack for travel and work" }
];


// Bind controller instance to $scope
$scope.vm = this;
}
}


// Register the controller with the AngularJS module
angular.module('myApp').controller('ProductController', ProductController);

