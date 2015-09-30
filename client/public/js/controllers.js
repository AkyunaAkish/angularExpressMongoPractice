// app.controller('HomeController',['$scope',function($scope){
//   $scope.message = "Connected to home";
// }]);

app.controller('HomeController', ['$scope', '$http', function($scope, $http){
  $scope.message = "Connected to home";
  $http.get('http://localhost:8080/instrumentsApi/').then(function(response) { // INDEX
    $scope.instruments = response.data;
  }, function(response) {
    console.log("Invalid URL");
  });
}]);


// app.controller('NewController',['$scope',function($scope){
//   $scope.message = "Connected to New";
//
// }]);

app.controller('NewController', ["$scope", '$http', '$location', function($scope, $http, $location){
  $scope.message = "Connected to New";
  $scope.addInstrument = function(instrument){
    var instrument  = {
      instrumentName:  $scope.instrument.instrumentName,
      instrumentOwner: $scope.instrument.instrumentOwner
    }
    $http.post('http://localhost:8080/instrumentsApi/', instrument).then(function(response) { // NEW
      console.log("Instrument added.");
      $location.path( "/" );
    }, function(response) {
      console.log("Invalid URL");
    });
  }
}]);


app.controller('ShowController',['$scope',function($scope){
  $scope.message = "Connected to Show";

}]);



app.controller('EditController',['$scope',function($scope){
  $scope.message = "Connected to Edit";

}]);
