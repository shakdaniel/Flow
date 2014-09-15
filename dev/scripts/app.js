'use strict'
var app = angular.module('app', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider
        .html5Mode(true)
        .hashPrefix('!'),
    $urlRouterProvider.otherwise("/"),
    $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "home.html",
            controller: 'homeCtrl'
        })
        .state("about", {
            url: "/about",
            templateUrl: "about.html",
            controller: 'aboutCtrl'
        })
        .state("contact", {
            url: "/contact",
            templateUrl: "contact.html"
        })
        .state("services", {
            url: "/services",
            templateUrl: "services.html"
        })
        .state("login", {
            url: "/login",
            templateUrl: "login.html"
        })
});

function homeCtrl($scope) {
    // For this tutorial, we will simply access the $scope.seo variable from the main controller and fill it with content.
    // Additionally you can create a service to update the SEO variables - but that's for another tutorial.
    $scope.$parent.seo = {
        pageTitle: 'Home',
        pageDescripton: 'Welcome to home.'

    };
}

function aboutCtrl($scope) {
    $scope.$parent.seo = {
        pageTitle: 'About',
        pageDescripton: 'Welcome to about.'
    };
}
