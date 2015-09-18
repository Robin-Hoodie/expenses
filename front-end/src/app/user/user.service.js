/**
 * Created by rohellem on 18/09/2015.
 */
(function () {
    'use strict';

    angular.module('app.core')
        .factory('userService', userService);

    userService.$inject = [];

    function userService() {

        return {
            isLoggedIn: isLoggedIn
        }

        function isLoggedIn() {
            return false;
        }

    }
})();