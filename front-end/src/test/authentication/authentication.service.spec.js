describe('Testing authenticationService', function () {

    var _authenticationService_;
    beforeEach(angular.mock.module('app.core'));

    beforeEach(angular.mock.inject(function (authenticationService) {
        _authenticationService_ = authenticationService;
    }));

    describe('"login"', function () {
        it('should set "currentUser" to the passed user object and return true', function () {
            _authenticationService_.login({username: 'Robin'});
            expect(_authenticationService_.getCurrentUser()).toEqual({username: 'Robin'});
            expect(_authenticationService_.login()).toBe(true);
        });
    });

    describe('"isLoggedIn"', function () {
        it('should return true when user exists', function () {
            _authenticationService_.login({username: 'Robin'});
            expect(_authenticationService_.isLoggedIn()).toBe(true);
        });

        it('should return false when user does not exist', function () {
            expect(_authenticationService_.isLoggedIn()).toBe(false);
        });
    });

    describe('"getCurrentUser"', function () {
        it('should return an empty object', function () {
            expect(_authenticationService_.getCurrentUser()).toEqual({});
        });
    });
});