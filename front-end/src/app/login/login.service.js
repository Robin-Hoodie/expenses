(function () {
    'use strict';

    angular.module('app.core')
        .factory('loginService', loginService);

    loginService.$inject = ['$modal'];

    function loginService ($modal) {
        var loginInstance;

        return {
            openLoginWindow: openLoginWindow
        }

        function openLoginWindow () {
            loginInstance = $modal.open({
                templateUrl: 'login/login.modal.html',
                controller: 'loginCtrl',
                controllerAs: 'vm',
                size: 'sm'
            });
        }
    }


})();