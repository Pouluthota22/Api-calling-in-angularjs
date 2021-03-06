var testApp = angular.module("testApp", []);

testApp.controller("testController", function($scope, $http) {
  $scope.home = "This is the homepage";

  $scope.getData = function(search) {
    console.log("I've been pressed!");
    $http
      .get(
        "http://openlibrary.org/query.json?type=/type/edition&authors=/authors/OL1A"
      )
      .then(
        function successCallback(response) {
          $scope.response = response.data;
          console.log(response.data);
        },
        function errorCallback(response) {
          console.log("Unable to perform get request");
        }
      );
  };
});
