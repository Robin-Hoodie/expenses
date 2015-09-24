(function () {
    'use strict';

    angular.module('app.core')
        .factory('loginService', loginService);

    loginService.$inject = ['$modal'];

    function loginService ($modal) {

        return {
            openLoginWindow: openLoginWindow
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