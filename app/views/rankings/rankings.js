'use strict';

squashLadder.controller('rankingsController', function($scope, rankingsFactory) {
  $scope.players = rankingsFactory.getList();
})
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/rankings', {
    templateUrl: 'views/rankings/rankings.html',
    controller: 'rankingsController'
  });
}]);
