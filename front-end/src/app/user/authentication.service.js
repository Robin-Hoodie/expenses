(function () {
    'use strict';

    angular.module('app.core')
        .factory('authenticationService', authenticationService);

    function authenticationService () {
        var currentUser = {};

        return {
            getCurrentUser: getCurrentUser,
            login: login,
            isLoggedIn: isLoggedIn
        }

        function login (user) {
            currentUser = user;
        }

        function isLoggedIn() {
            return !angular.equals(getCurrentUser(), {});
        }

        function getCurrentUser () {
            return currentUser;
        }
    }

})();