(function () {
    'use strict';

    angular.module('app.core').constant('allExpensesUrl', 'all-expenses.json')
        .factory('expensesService', expensesService);

    expensesService.$inject = ['$http', 'allExpensesUrl'];

    function expensesService ($http, allExpensesUrl) {

        return {
            getAllExpenses: getAllExpenses
        }

        function getAllExpenses() {
            return $http.get(allExpensesUrl).then(success, reject);
        }
        
        function success (response) {
            return response.data;
        }

        function reject (reason) {
            return reason;
        }
    }
})();