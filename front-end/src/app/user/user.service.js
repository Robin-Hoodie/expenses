/**
 * Created by rohellem on 18/09/2015.
 */
(function () {
    'use strict';

    angular.module('app.core')
        .factory('userService', userService);

    userService.$inject = [];

    function userService() {

        var users = [];

        return {
            register: register,
            isLoggedIn: isLoggedIn,
            users: users
        }

        function register (user) {
            users.push(user);
        }

        function isLoggedIn() {
            return false;
        }

    }
})();