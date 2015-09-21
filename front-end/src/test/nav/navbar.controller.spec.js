describe('Testing the navbar controller', function () {
    var _controller_,
        _loginService_;

    beforeEach(angular.mock.module('app.core'));

    beforeEach(angular.mock.inject(function ($controller, loginService) {
        _loginService_ = loginService;
        _controller_ = $controller('navbarCtrl', {
            loginService: _loginService_
        });
    }));

    describe('openLoginWindow', function () {
        it('should call "userService.loginWindow"', function () {
            _loginService_.openLoginWindow = jasmine.createSpy('_loginService_.openLoginWindow');
            _controller_.openLoginWindow();

            expect(_loginService_.openLoginWindow).toHaveBeenCalled();
        });
    });
});


