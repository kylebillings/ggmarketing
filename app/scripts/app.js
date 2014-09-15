'use strict';

/**
 * @ngdoc overview
 * @name marketingSiteApp
 * @description
 * # marketingSiteApp
 *
 * Main module of the application.
 */
angular
  .module('marketingSiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/science', {
        templateUrl: 'views/science.html',
        controller: 'ScienceCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });