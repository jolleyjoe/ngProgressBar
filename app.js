var app = angular.module('progressdemo', ['progress.bar']);

app.controller('MainCtrl', function($scope) {

  $scope.timer_running = false;
  $scope.max_count = 11;

  $scope.startProgress = function() {
    $scope.timer_running = true;
  }

  $scope.stopProgress = function() {
    $scope.timer_running = false;
  }

});