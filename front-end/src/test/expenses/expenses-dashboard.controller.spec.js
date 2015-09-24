describe('Testing expensesDashboardCtrl', function () {

    var _controller_,
        _expenses_;

    beforeEach(angular.mock.module('app.core'));

    beforeEach(angular.mock.inject(function ($controller) {
        _expenses_ = [];
        _controller_ = $controller('expensesDashboardCtrl', {
            expenses: _expenses_
        });
    }));


    describe('expenses', function () {
        it('should be assigned to vm.expenses', function () {
            expect(_controller_.expenses).toBeDefined();
        });
    });
});