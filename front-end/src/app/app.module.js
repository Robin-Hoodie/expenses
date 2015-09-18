(function () {
    'use strict';

    angular.module('app.core', ['ui.router']);

    angular.module('app.core').config(configFn);

    configFn.$inject = ['$stateProvider', '$locationProvider']

    function configFn($stateProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'index.html'
        }).state('registration', {
            url: '/registration',
            templateUrl: 'registration/registration.html',
            controller: 'registrationCtrl',
            controllerAs: 'vm'
        });
    }

})();