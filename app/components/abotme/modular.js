let myapp = angular.module("myapp",[]);

let mycontroller = function($scope){
    $scope.message = "Hello world";
}

myapp.controller("mycontroller",mycontroller);
let JSONController = function($scope){
    let student = {
        firstname : "Himabindu",
        lastname : "Poshala",
        email : "S533727@nwmissouri.edu"
    }
    $scope.student = student;
}
myapp.controller("student",JSONController);