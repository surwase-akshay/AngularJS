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
      { email: "akshay@gmail.com", password: "akshay" },
      { email: "abc@gmail.com", password: "12345" },
      { email: "xyz@gmail.com", password: "12345" }
    ];
    
    $scope['vm'] = this;
  }
}

