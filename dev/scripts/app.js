// app.js
var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');

    $stateProvider

    .state('home', {
        url: '/',
        templateUrl: 'home.html'
    })

    .state('about', {
        url: '/about',
        templateUrl: 'about.html'
    })

    .state('contact', {
        url: '/contact',
        templateUrl: 'contact.html'
    })

    .state('services', {
        url: '/services',
        templateUrl: 'services.html'
    })

    .state('login', {
        url: '/login',
        templateUrl: 'login.html'
    });

});