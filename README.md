ng-progressbar
=========

A simple bootstrap-progressbar directive for angularJS. Requires Bootstrap 3.
The timer will count in seconds from 0 to to the maximum number of seconds given, and the progress bar will increase based on percentage progress of the timer towards that maximum value with a text inlay. 

###Progress Bar Demo Screenshot###
![Progress Bar Demo Screenshot](https://github.com/jolleyjoe/ngProgressBar/blob/master/progressbar.jpg?raw=true "Progress Bar Demo Chooser Screenshot")

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

```sh
$scope.max_count = 11;
```
- 'start' is a boolean attribute which must be set from the controller scope : e.g. : 

```sh
$scope.timer_running = false;
```
- 'on-stop' is a callback function which will fire when the timer reaches the max.
-  To stop the timer :  The 'start' attribute is being observed, so in your controller, just set the relevant scope variable to false. Your callback function might look like this : 

```sh

$scope.stopProgress = function() {
    $scope.timer_running = false;
}
```

- To start the timer :  The 'start' attribute is being observed, so in your controller, just set the relevant scope variable to true. e.g. :

```sh
$scope.startProgress = function() {
    $scope.timer_running = true;
}
```



