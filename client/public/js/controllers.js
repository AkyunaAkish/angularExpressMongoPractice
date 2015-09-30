
app.controller('HomeController', ['$scope', '$http','$route', function($scope, $http, $route){
  $scope.message = "Connected to home";
  $http.get('http://localhost:8080/instrumentsApi/').then(function(response) { // INDEX
    $scope.instruments = response.data;
  }, function(response) {
    console.log("Invalid URL");
  });

  $scope.deleteInstrument = function(instrument) { // DESTROY
    console.log("Deleting instrument.");
    $http.delete('http://localhost:8080/instrumentsApi/' + instrument._id).then(function(response){
      console.log("Instrument deleted.");
      $route.reload();
    }, function(response) {
      console.log("Failed to reload page.");
    });
  };
}]);


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


app.controller('ShowController', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location) {
  $http.get('http://localhost:8080/instrumentsApi/' + $routeParams.id).then(function(response) { // SHOW
    $scope.instrument = response.data;
    console.log($scope.instrument);
  }, function(response) {
    console.log("Invalid URL");
  });
}]);



app.controller('EditController', ["$scope", '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
  console.log("Edit controller");
  $http.get('http://localhost:8080/instrumentsApi/' + $routeParams.id + '/edit/').then(function(response) { // EDIT
    $scope.instrument = response.data;
    console.log(response.data);
  }, function(response) {
    console.log("Invalid URL");
  });

  $scope.updateInstrument = function(quote) {
    console.log("Updating instrument.");
    var instrument = {
      instrumentName:  $scope.instrument.instrumentName,
      instrumentOwner: $scope.instrument.instrumentOwner
    };
    console.log($routeParams.id);
    $http.put('http://localhost:8080/instrumentsApi/' + $routeParams.id, instrument).then(function(response) { // UPDATE
      $location.path( "/" );
      console.log("Instrument updated.");
    }, function(response) {
      console.log("Invalid URL");
    });
  }
}]);
