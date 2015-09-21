(function () {
    'use strict';

    angular.module('app.core')
        .controller('loginCtrl', loginCtrl);

    loginCtrl.$inject = ['$modalInstance', '$state', 'loginService'];

    function loginCtrl ($modalInstance, $state, loginService) {
        var vm = this;

        vm.init = init;
        vm.loginError = false;
        vm.login = login;
        vm.cancel = cancel;

        init();

        function init () {

        }

        function login () {
            if(loginService.checkCredentials(vm.user)) {
                $modalInstance.close(true);
                $state.go('expenses.dashboard');
                vm.loginError = false;
            } else {
                vm.loginError = true;
            }
        }

        function cancel () {
            $modalInstance.close(false);
        }
    }

})();