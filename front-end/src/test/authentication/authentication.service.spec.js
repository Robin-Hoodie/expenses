describe('Testing authenticationService', function () {

    var _authenticationService_;
    beforeEach(angular.mock.module('app.core'));

    beforeEach(angular.mock.inject(function (authenticationService) {
        _authenticationService_ = authenticationService;
    }));

    describe('"login"', function () {
        it('should set "currentUser" to the passed user object if checkcredentials returns true', function () {
            _authenticationService_._checkCredentials_ = jasmine.createSpy('_authenticationService_._checkCredentials_').and.returnValue(true);
            _authenticationService_.login({username: 'Robin'});
            expect(_authenticationService_._checkCredentials_).toHaveBeenCalled();
            expect(_authenticationService_.getCurrentUser()).toEqual({username: 'Robin'});
        });

        it('should return true if checkCredentials returns true', function () {
            _authenticationService_._checkCredentials_ = jasmine.createSpy('_authenticationService_._checkCredentials_').and.returnValue(true);
            expect(_authenticationService_.login()).toBe(true);
        });

        it('should return false if checkCredentials returns false', function () {
            _authenticationService_._checkCredentials_ = jasmine.createSpy('_authenticationService_._checkCredentials_').and.returnValue(false);
            expect(_authenticationService_.login()).toBe(false);
        });
    });

    describe('_checkCredentials_', function () {
        it('should return true for now', function () {
            expect(_authenticationService_._checkCredentials_()).toBe(true);
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