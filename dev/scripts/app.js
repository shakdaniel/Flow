// app.js
var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

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
    });

});
