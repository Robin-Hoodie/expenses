(function () {
    'use strict';

    angular.module('app.core')
        .factory('loginService', loginService);

    loginService.$inject = ['$modal', 'userService'];

    function loginService ($modal, userService) {

        return {
            openLoginWindow: openLoginWindow,
            checkCredentials: checkCredentials
        }

        //dummy method, with back-end this will be fully implemented
        function checkCredentials (user) {
            return true;
        }

        function openLoginWindow () {
            $modal.open({
                templateUrl: 'login/login.modal.html',
                controller: 'loginCtrl',
                controllerAs: 'vm'
            });
        }
    }


})();