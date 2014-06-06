ng-progressbar
=========

A simple bootstrap-progressbar directive which takes in a maximum value, a true/false value for starting/stopping and a callback function which fires when the timer reaches the end. Requires Bootstrap 3.
The timer will increment from 0 to to a maximum value, and the progress bar will increase based on percentage progress of the timer towards that maximum value.


Usage
--------------

- include "progressBar.js" script in your html
- add 'progress.bar' as a dependency in app.js

```sh
var app = angular.module('progressdemo', ['progress.bar']);
```

#####Using the directive#####
```sh
<ng-progressbar type="success" max="{{max_count}}" start="{{timer_running}}" on-stop="stopProgress()"></ng-progressbar> 
```
- 'type' is the bootstrap alert class (info, warning, success, danger)
- 'max' is the maximum value that the timer will reach in seconds
- 'start' is a scope variable which must be either true or false, and can be set in the controller scope, e.g. :

```sh
$scope.timer_running = false;
$scope.max_count = 11;
```
- 'on-stop' is a callback function , e.g. for the example above : 

```sh

$scope.stopProgress = function() {
    $scope.timer_running = false;
}
```

- To start the timer, the 'start' value should be set to true, e.g. : 

```sh
$scope.startProgress = function() {
    $scope.timer_running = true;
}
```
