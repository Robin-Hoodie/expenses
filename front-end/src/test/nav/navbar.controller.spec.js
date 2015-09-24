describe('Testing the navbar controller', function () {
    var _controller_,
        _loginService_,
        _authenticationService_,
        _state_;

    beforeEach(angular.mock.module('app.core'));

    beforeEach(angular.mock.inject(function ($controller, loginService, authenticationService, $state) {
        _loginService_ = loginService;
        _authenticationService_ = authenticationService;
        _state_ = $state;
        _controller_ = $controller('navbarCtrl', {
            loginService: _loginService_,
            authenticationService: _authenticationService_
        });
    }));

    describe('openLoginWindow', function () {
        it('should call userService.loginWindow', function () {
            _loginService_.openLoginWindow = jasmine.createSpy('_loginService_.openLoginWindow');
            _controller_.openLoginWindow();

            expect(_loginService_.openLoginWindow).toHaveBeenCalled();
        });
    });

    describe('logout', function () {
        it('should call authenticationService.logout and $state.go', function () {
            _authenticationService_.logout = jasmine.createSpy('_authenticationService_.logout');
            _state_.go = jasmine.createSpy('_state_.go');
            _controller_.logout();
            expect(_authenticationService_.logout).toHaveBeenCalled();
            expect(_state_.go).toHaveBeenCalled();
        });
    });
});


