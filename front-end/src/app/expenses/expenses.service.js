(function () {
    'use strict';

    angular.module('app.core')
        .factory('expensesService', expensesService);

    expensesService.$inject = ['$http'];

    function expensesService ($http) {
        return {
            getAllExpenses: getAllExpenses
        }

        function getAllExpenses() {
            return $http.get('all-expenses.json').then(success, reject);
        }
        
        function success (response) {
            return response.data;
        }

        function reject (reason) {
            return reason;
        }
    }
})();