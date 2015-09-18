/**
 * Created by rohellem on 18/09/2015.
 */
(function () {
    'use strict';

    angular.module('app.core')
        .controller('navbarCtrl', navbarCtrl);

    navbarCtrl.$inject = ['$location', 'userService'];

    function navbarCtrl($location, userService) {

        var vm = this;

        vm.init = init;
        vm.isActive = isActive;

        function init () {
            vm.isLoggedIn = userService.isLoggedIn();
        }

        function isActive(state) {
            if($location.state() === state)
                return true;
            return false;
        }

    }
})();