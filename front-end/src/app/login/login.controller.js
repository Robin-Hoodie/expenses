(function () {
    'use strict';

    angular.module('app.core')
        .controller('loginCtrl', loginCtrl);

    loginCtrl.$inject = [/*'$modalInstance'*/];

    function loginCtrl (/*$modalInstance*/) {
        var vm = this;

        vm.init = init;
        vm.login = login;
        vm.cancel = cancel;

        init();

        function init () {

        }

        function login () {

        }

        function cancel () {
            //$modalInstance.dismiss('Cancelled');
        }
    }

})();