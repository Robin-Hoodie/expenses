describe('Testing the past-date directive', function () {
    var _scope_;

    beforeEach(angular.mock.module('app.core'));

    beforeEach(angular.mock.inject(function ($compile, $rootScope) {
        _scope_ = $rootScope.$new();
        var compileFn  = $compile('<form name="registrationForm">' +
            '<input name="birthDate" past-date ng-model="birthDate">' + '</form>');
        compileFn(_scope_);
    }));

    it('should not set a validation error', function () {
        _scope_.birthDate = '10-01-1991';
        _scope_.$apply();
        expect(_scope_.registrationForm.birthDate.$error.pastDate).toBeUndefined();
    });

    it('should set a validation error', function () {
        var today = new Date();
        _scope_.birthDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
        _scope_.$apply();
        expect(_scope_.registrationForm.birthDate.$error.pastDate).toBe(true);
    });
})