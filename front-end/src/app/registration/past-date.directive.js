(function () {
    'use strict';

    angular.module('app.core')
        .directive('pastDate', pastDate);

    function pastDate () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attrs, ctrl) {
                var validationErrorKey = 'pastDate';
                ctrl.$validators[validationErrorKey] = function (modelValue) {
                    if (angular.isDate(modelValue)) {
                        if (modelValue < new Date())
                            return true;
                        else
                            return false;
                    } else
                        return null;
                }
                ctrl.$validate();
            }
        }
    }

})();