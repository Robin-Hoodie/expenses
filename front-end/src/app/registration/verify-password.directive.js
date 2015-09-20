(function () {
    'use strict';

    angular.module('app.core')
        .directive('verifyPassword', checkPassword);

    /*
     * One problem with this is still that passwords containing @splitter will give difficulties
     * Possibly fix this by altering regex in password
     */
    function checkPassword () {
        return {
            restrict: 'A',
            require: 'ngModel',
            scope: {
                password: '@verifyPassword'
            },
            link: function (scope, element, attrs, ctrl) {
                var splitter = '_';
                var validationErrorKey = 'noMatch';
                ctrl.$setValidity(validationErrorKey, false);
                scope.$watch(function () {
                    if (scope.password || ctrl.$viewValue) {
                        var combined = scope.password + splitter + ctrl.$viewValue;
                    }
                    return combined;
                }, function (newValue) {
                    if (newValue && angular.isString(newValue)) {
                        var passwords = newValue.split(splitter);
                        //passwords match
                        if (passwords[0] && passwords[1] && passwords[0] === passwords[1]) {
                            ctrl.$setValidity(validationErrorKey, true);
                        } else {
                            ctrl.$setValidity(validationErrorKey, false);
                        }
                    }
                })
            }
        }
    }
})();