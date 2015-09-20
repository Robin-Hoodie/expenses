/**
 * Created by rohellem on 18/09/2015.
 */
(function () {
    'use strict';

    angular.module('app.core')
        .factory('userService', userService);

    userService.$inject = ['authenticationService'];

    function userService(authenticationService) {

        var users = [];

        return {
            register: register,
            getUsers: getUsers
        }

        function register (user) {
            users.push(user);
            authenticationService.login(user);
        }

        function getUsers () {
            return users;
        }

    }
})();