import * as angular from 'angular';

interface ICustomScope extends angular.IScope {
  vm: any; 
}

export class MyLoginController {
  static $inject = ['$scope'];
  message: string;
  users: Array<any>;

  constructor(private $scope: ICustomScope) {
    this.message = 'Welcome to  TypeScript!';
    this.users=[
      { name: 'akshay', email: 'akshay@gmail.com' },
      { name: 'vishal ', email: 'vishal@gmail.com' },
      { name: 'yogesh', email: 'yogesh@gmail.com' }
    ];
    
    $scope['vm'] = this;
  }
}

//angular.module('myApp').controller('MyController', MyController);