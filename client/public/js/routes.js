app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: '/partials/home.html',
    controller: 'InstrumentsController'
  })
  .otherwise({redirectTo:'/'});
})
