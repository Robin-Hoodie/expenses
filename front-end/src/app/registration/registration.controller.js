/**
 * Created by rohellem on 18/09/2015.
 */
(function(){
    'use strict';

    angular.module('app.core')
        .controller('registrationCtrl', registrationCtrl);

    registrationCtrl.$inject = ['userService', '$state', '$window', 'authenticationService'];

    function registrationCtrl (userService, $state, $window, authenticationService) {
        var vm = this;

        vm.cancel = cancel;
        vm.emailPattern;
        vm.init = init;
        vm.open = open;
        vm.passwordPattern;
        vm.register = register;

        init();

        function init () {
            vm.emailPattern =  /^(\w|\.)+@\w+\.\w{2,}(\.\w{2,})?$/i;
            vm.passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,20}$/;
        }
        
        function open () {
            vm.opened = true;
        }

        function register () {
            if(vm.registrationForm.$valid) {
                userService.register(vm.user);
                $state.go('expenses.dashboard', {user: authenticationService.getCurrentUser()});
            }
        }

        function cancel () {
            $window.history.back();
        }
    }
})();
