/**
 * Created by rohellem on 18/09/2015.
 */
(function () {
    'use strict';

    angular.module('app.core')
        .controller('navbarCtrl', navbarCtrl);

    navbarCtrl.$inject = ['authenticationService'];

    function navbarCtrl(authenticationService) {

        var vm = this;

        vm.init = init;

        init();

        function init () {
            vm.isLoggedIn = authenticationService.isLoggedIn();
        }

    }
})();