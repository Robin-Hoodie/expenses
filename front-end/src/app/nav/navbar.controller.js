/**
 * Created by rohellem on 18/09/2015.
 */
(function () {
    'use strict';

    angular.module('app.core')
        .controller('navbarCtrl', navbarCtrl);

    navbarCtrl.$inject = ['authenticationService', 'loginService'];

    function navbarCtrl(authenticationService, loginService) {

        var vm = this;

        vm.init = init;
        vm.openLoginWindow = openLoginWindow;

        init();

        function init () {
            vm.isLoggedIn = authenticationService.isLoggedIn();
        }

        function openLoginWindow () {
            loginService.openLoginWindow();
        }

    }
})();