'use strict';

var squashLadder = angular.module("squashLadder", [
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/rankings'});
}]);
