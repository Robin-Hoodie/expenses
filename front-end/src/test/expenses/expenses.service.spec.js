describe('expensesService', function () {

    var _expensesService_,
        _allExpensesUrl_;

    beforeEach(angular.mock.module('app.core'));

    beforeEach(angular.mock.inject(function (expensesService, allExpensesUrl) {
        _expensesService_ = expensesService;
        _allExpensesUrl_ = allExpensesUrl;
    }));

    describe('GET request for all expenses', function () {

        it('should return an array of 5 objects', function () {
            var promise = _expensesService_.getAllExpenses();
            promise.then(function (expenses) {
                expect(angular.isArray(expenses)).toBe(true);
                expect(expenses.length).toBe(5);
            });
        });
    });
});