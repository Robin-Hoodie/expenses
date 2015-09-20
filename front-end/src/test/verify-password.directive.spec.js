describe('Testing the check-password directive', function () {

    var _scope_;

    beforeEach(angular.mock.module('app.core'));

    beforeEach(angular.mock.inject(function ($compile, $rootScope) {
        _scope_ = $rootScope.$new();
        var compileFn  = $compile('<form name="registrationForm">' +
            '<input name="passwordVerification" verify-password="{{password}}" ng-model="passwordVerification">' + '</form>');
        _scope_.password = 'Robin0';
        compileFn(_scope_);
    }));

    it('should not set a validation error', function () {
        _scope_.passwordVerification = 'Robin0';
        _scope_.$apply();
        expect(_scope_.registrationForm.passwordVerification.$error.noMatch).toBeUndefined();
    });

    it('should set a validation error', function () {
        _scope_.passwordVerification = 'foo';
        _scope_.$apply();
        expect(_scope_.registrationForm.passwordVerification.$error.noMatch).toBe(true);
    });
});