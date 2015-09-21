describe('expensesService', function () {

    var _expensesService_,
        _httpBackend_;

    beforeEach(angular.mock.module('app.core'));

    beforeEach(angular.mock.inject(function (expensesService, $httpBackend) {
        _expensesService_ = expensesService;
        _httpBackend_ = $httpBackend;
    }));

    describe('GET request for all expenses', function () {
        //TODO: Take a look at what should be tested
        //beforeEach(function () {
        //    _httpBackend_.expect('GET', 'all-expenses.json').respond([
        //        {"description": "Bananas", "category": "Fruit", "price": 2.5, "amount": 4},
        //        {"description": "Coconuts", "category": "Fruit", "price": 3.1, "amount": 2},
        //        {"description": "Milk", "category": "Dairy", "price": 1.5, "amount": 10},
        //        {"description": "Chocolate", "category": "Yummy", "price": 2.0, "amount": 20},
        //        {"description": "Coca-Cola", "category": "Soda", "price": 2.8, "amount": 5}
        //    ]);
        //    _httpBackend_.flush();
        //});
        //
        //it('should return all expenses', function () {
        //    expect(angular.isArray(allExpenses)).toBe(true);
        //    expect(allExpenses.length).toBe(5);
        //});
        //
        //it('should make an ajax request', function () {
        //    _httpBackend_.verifyNoOutstandingExpectation();
        //});
    });
});