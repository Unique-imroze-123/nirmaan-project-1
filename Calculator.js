<html>
    <head>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
</head>
<body>
 
<div ng-app="CalculatorApp" ng-controller="CalculatorController">
  <p><input type="number" ng-model="a"></p>
  <p><input type="number" ng-model="b"></p>
  <p><select ng-model="operator">
    <option>+</option>
    <option>*</option>
    <option>-</option>
    <option>/</option>
     </select></p>
  <p>{{result()}}</p>
 </div>
<script>
Var app=angular.module('myApp', [])
    app.controller('CalculatorController', function($scope) {
        $scope.result = function() {
            if ($scope.operator == '+') {
                return $scope.a + $scope.b;
            }
            if ($scope.operator == '-') {
                return $scope.a - $scope.b;
            }
            if ($scope.operator == '*') {
                return $scope.a * $scope.b;
            }
            if ($scope.operator == '/') {
                return $scope.a / $scope.b;
            }
    });

</script>
</body>
</html>
