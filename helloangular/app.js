var app = angular.module('app', []);
app.controller('theController', ['$scope',
    function($scope) {
        $scope.greeting = { text: "Hello Angular" };
    }]);
