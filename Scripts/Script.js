app = angular.module("myApp",[])
    .controller("myCtrl", function($scope, stringService){
        $scope.transformString = function(input){

            $scope.output = stringService.processString(input);
         
        }
    })