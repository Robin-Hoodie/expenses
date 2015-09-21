(function () {
    'use strict';

    angular.module('app.core', ['ui.router', 'ui.bootstrap']);

    angular.module('app.core').config(configFn);

    configFn.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider', 'datepickerConfig']

    function configFn($stateProvider, $locationProvider, $urlRouterProvider, datepickerConfig) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
        datepickerConfig.startingDay = 1;
        datepickerConfig.maxDate = new Date();

        toastr.options.positionClass = 'toast-bottom-right';

        //TODO: Make a real homepage
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
            templateUrl: 'expenses/dashboard.html',
            controller: 'expensesDashboardCtrl',
            controllerAs: 'vm',
            onEnter: function () {
                toastr.info('Welcome to your dashboard!')
            }
        });
    }
})();