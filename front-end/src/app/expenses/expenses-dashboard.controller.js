/**
 * Created by rohellem on 21/09/2015.
 */
(function () {
    'use strict';

    angular.module('app.core')
        .controller('expensesDashboardCtrl', expensesDashboardCtrl);

    expensesDashboardCtrl.$inject = ['expenses'];

    function expensesDashboardCtrl(expenses) {
        var vm = this;
        vm.expenses = expenses;

        init();

        function init () {
            vm.gridOptions = {
                data: vm.expenses,
                columnsDefs: [
                    {field: 'purchaseDate', type: 'date'},
                    {field: 'description', type: 'string'},
                    {field: 'category', type: 'string'},
                    {field: 'price', type: 'number'},
                    {field: 'amount', type: 'number'},
                ],
                enableFiltering: true,
                showGridFooter: true
            }
        }

    }
})();