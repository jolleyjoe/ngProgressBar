ng-progressbar
=========

A simple bootstrap-progressbar directive. Requires Bootstrap 3.
The timer will count in seconds from 0 to to the maximum number of seconds given, and the progress bar will increase based on percentage progress of the timer towards that maximum value. 


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
- 'start' is a variable (either set from controller scope or directly) which must be either true or false : e.g. : 

```sh
$scope.timer_running = false;
$scope.max_count = 11;
```
- 'on-stop' is a callback function which will fire when the timer reaches the max.
-  To stop the timer on a button press, the 'start' attribute is being observed, so in your controller, just set the relevant scope variable to false. Your callback function might look like this : 

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



