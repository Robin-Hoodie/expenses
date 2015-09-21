(function () {
    'use strict';

    angular.module('app.core')
        .factory('authenticationService', authenticationService);

    authenticationService.$inject = [];

    function authenticationService () {
        var currentUser = {};

        return {
            //exposed this for testing purposes, this is an internal method and should not be used outside this service
            _checkCredentials_: checkCredentials,
            getCurrentUser: getCurrentUser,
            login: login,
            isLoggedIn: isLoggedIn
        }

        //dummy method, with back-end this will be fully implemented -> don't forget to test this
        function checkCredentials (user) {
            return true;
        }


        function login (user) {
            if(checkCredentials(user)) {
                currentUser = user;
                return true;
            } else
                return false;
        }

        function isLoggedIn() {
            return !angular.equals(getCurrentUser(), {});
        }

        function getCurrentUser () {
            return currentUser;
        }
    }

})();