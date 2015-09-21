/**
 * Created by rohellem on 21/09/2015.
 */
(function(){
    'use strict';

    angular.module('app.core')
        .controller('expensesDashboardCtrl', expensesDashboardCtrl);

    expensesDashboardCtrl.$inject = ['expenses'];

    function expensesDashboardCtrl (expenses) {
        var vm = this;
        //TODO: test this resolve
        vm.expenses = expenses;
    }
})();