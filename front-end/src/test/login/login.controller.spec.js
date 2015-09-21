describe('Testing loginCtrl', function () {

    var _controller_,
        _modalInstance_,
        _state_,
        _authenticationService_;

    beforeEach(angular.mock.module('app.core'));


    beforeEach(angular.mock.inject(function ($controller, $state, authenticationService) {
        _state_ = $state;
        _authenticationService_ = authenticationService;
        _modalInstance_ = {
            close: jasmine.createSpy('_modalInstance_.close')
        }
        _controller_ = $controller('loginCtrl', {
            $modalInstance: _modalInstance_,
            $state: _state_,
            authenticationService: _authenticationService_
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

        it('should call "_loginService_.login"', function () {
            _authenticationService_.login = jasmine.createSpy('_authenticationService_.login');
            _controller_.login();
            expect(_authenticationService_.login).toHaveBeenCalled();
        });

        it('should call "_modalInstance_.close", call "_state_.go" and set "vm.loginError" to false when login returns true', function () {
            _authenticationService_.login = jasmine.createSpy('_authenticationService_.login').and.returnValue(true);
            _controller_.login();
            expect(_modalInstance_.close).toHaveBeenCalledWith(true);
            expect(_state_.go).toHaveBeenCalled();
            expect(_controller_.loginError).toBe(false);
        });

        it('should not call "_modalInstance_.close", call "_state_.go" and set "vm.loginError" to false when login returns false ', function () {
            _authenticationService_.login = jasmine.createSpy('_authenticationService_.login').and.returnValue(false);
            _controller_.login();
            expect(_modalInstance_.close).not.toHaveBeenCalledWith(true);
            expect(_state_.go).not.toHaveBeenCalled();
            expect(_controller_.loginError).toBe(true);
        });
    });


})