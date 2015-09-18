(function(){
    'use strict';

    angular.module('app.core')
        .directive('checkPassword', checkPassword);

    function checkPassword () {
        return {
            require: 'ngModel',
            scope: {
                checkPassword: '='
            },
            link: function (scope, element, attrs, ctrl) {

            }
        }
    }
})();