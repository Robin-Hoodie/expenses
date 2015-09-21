describe('Testing loginCtrl', function () {

    var _controller_,
        _modalInstance_,
        _state_,
        _loginService_;

    beforeEach(angular.mock.module('app.core'));


    beforeEach(angular.mock.inject(function ($controller, $state, loginService) {
        _state_ = $state;
        _loginService_ = loginService;
        _modalInstance_ = {
            close: jasmine.createSpy('_modalInstance_.close')
        }
        _controller_ = $controller('loginCtrl', {
            $modalInstance: _modalInstance_,
            $state: _state_,
            loginService: _loginService_
        });
    }));

    describe('"vm.cancel"', function () {
        it('should call "_modalInstance_.close" with false', function () {
            _controller_.cancel();
            expect(_modalInstance_.close).toHaveBeenCalledWith(false);
        });
    });

    describe('"vm.login"', function () {

        beforeEach(function () {
            _state_.go = jasmine.createSpy('_state._.go');
        });

        it('should call "_loginService_.checkCredentials"', function () {
            _loginService_.checkCredentials = jasmine.createSpy('(_loginService_.checkCredentials');
            _controller_.login();
            expect(_loginService_.checkCredentials).toHaveBeenCalled();
        });

        it('should call "_modalInstance_.close", call "_state_.go" and set "vm.loginError" to false when checkCredentials returns true', function () {
            _loginService_.checkCredentials = jasmine.createSpy('_loginService_.checkCredentials').and.returnValue(true);
            _controller_.login();
            expect(_modalInstance_.close).toHaveBeenCalledWith(true);
            expect(_state_.go).toHaveBeenCalled();
            expect(_controller_.loginError).toBe(false);
        });

        it('should not call "_modalInstance_.close", call "_state_.go" and set "vm.loginError" to false when checkCredentials returns false ', function () {
            _loginService_.checkCredentials = jasmine.createSpy('_loginService_, .checkCredentials').and.returnValue(false);
            _controller_.login();
            expect(_modalInstance_.close).not.toHaveBeenCalledWith(true);
            expect(_state_.go).not.toHaveBeenCalled();
            expect(_controller_.loginError).toBe(true);
        });
    });


})