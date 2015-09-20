(function () {
    'use strict';

    angular.module('app.core', ['ui.router', 'ui.bootstrap']);

    angular.module('app.core').config(configFn);

    configFn.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider']

    function configFn($stateProvider, $locationProvider, $urlRouterProvider) {

        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'index.html'
        }).state('registration', {
            url: '/registration',
            templateUrl: 'registration/registration.html',
            controller: 'registrationCtrl',
            controllerAs: 'vm'
        }).state('expenses', {
            url: '/expenses',
            abstract: true,
            template: '<ui-view/>'
        }).state('expenses.dashboard', {
            url: '/dashboard',
            templateUrl: 'expenses/dashboard.html'
        });
    }

})();