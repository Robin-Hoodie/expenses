(function () {
    'use strict';

    angular.module('app.core')
        .controller('loginCtrl', loginCtrl);

    loginCtrl.$inject = ['$modalInstance', '$state', 'authenticationService'];

    function loginCtrl ($modalInstance, $state, authenticationService) {
        var vm = this;

        vm.loginError = false;
        vm.showPassword = false;
        vm.passwordType = passwordType;
        vm.login = login;
        vm.cancel = cancel;

        init();

        function init () {

        }

        function cancel () {
            $modalInstance.close(false);
        }

        function login () {
            if(authenticationService.login(vm.user)) {
                $modalInstance.close(true);
                $state.go('expenses.dashboard');
                vm.loginError = false;
            } else {
                vm.loginError = true;
            }
        }

        function passwordType () {
            if(vm.showPassword) {
                return 'text';
            }
            return 'password';
        }
    }

})();