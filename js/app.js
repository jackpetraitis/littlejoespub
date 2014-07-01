'use strict';


// Declare app level module which depends on filters, and services
angular.module('joesApp', [
  'ngRoute',
  'joesApp.filters',
  'joesApp.services',
  'joesApp.directives',
  'joesApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home',
            {
                templateUrl: '/partials/home.html',
                controller: 'HomepageController'
            })
        .when('/store',
            {
                templateUrl: '/partials/shop.html',
                controller: 'StoreController'
            })
		.when('/menu',
			{
				templateUrl: 'test.html',
				controller: 'MenuController'
			})
		.when('/events',
		    {
				templateUrl: '/partials/events.php',
				controller: 'EventsController'
			})
		.when('/gallery',
			{
				templateUrl: '/partials/gallery.php',
				controller: 'GalleryController'
			})
		.when('contact',
			{
				templateUrl: '/partials/contact.php',
				controller: 'ContactController'
			})
			
        .otherwise({redirectTo: '/home'});
}]);

