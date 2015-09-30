app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: '/partials/home.html',
    controller: 'HomeController'
  })
  .when('/new', { // must be above '/:id' otherwise it'll think that the ID is 'new'
  templateUrl: '/partials//new.html', // NEW
  controller: 'NewController'
   })
   .when('/:id/edit', { // UPDATE
     templateUrl: '/partials//edit.html',
     controller: 'EditController'
   })
   .when('/:id', { // SHOW
     templateUrl: '/partials//show.html',
     controller: 'ShowController'
   })
.otherwise({redirectTo:'/'});
})
