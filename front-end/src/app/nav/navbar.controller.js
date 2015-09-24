/**
 * Created by rohellem on 18/09/2015.
 */
(function () {
    'use strict';

    angular.module('app.core')
        .controller('navbarCtrl', navbarCtrl);

    navbarCtrl.$inject = ['authenticationService', 'loginService', '$state'];

    function navbarCtrl(authenticationService, loginService, $state) {

        var vm = this;

        vm.isLoggedIn = authenticationService.isLoggedIn;
        vm.logout = logout;
        vm.openLoginWindow = openLoginWindow;

        function logout () {
            authenticationService.logout();
            $state.go('home');
        }

        function openLoginWindow () {
            loginService.openLoginWindow();
        }
    }
})();