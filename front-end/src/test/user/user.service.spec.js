describe('Testing userService', function () {

    var _userService_,
        _authenticationService_;

    beforeEach(angular.mock.module('app.core'));

    beforeEach(angular.mock.inject(function (userService, authenticationService) {
        _userService_ = userService;
        _authenticationService_ = authenticationService;
    }));

    describe('testing getUsers', function () {
        it(' should return an empty array', function () {
            expect(_userService_.getUsers()).toEqual([]);
        });
    });

    describe('testing register', function () {
        it('should push 1 user into "users" and call "login" on authentication service', function () {
            spyOn(_authenticationService_, 'login');
            _userService_.register({'username': 'Robin'});
            expect(_userService_.getUsers().length).toBe(1);
            expect(_authenticationService_.login).toHaveBeenCalled();
        });
    });
})