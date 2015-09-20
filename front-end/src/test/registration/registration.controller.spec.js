describe('Testing the registration controller', function () {
    var _controller_,
        _userService_,
        _state_,
        _window_;

    beforeEach(angular.mock.module('app.core'));

    beforeEach(angular.mock.inject(function ($controller, userService, $state, $window) {
        _userService_ = userService;
        _state_ = $state;
        _window_ = $window;
        _controller_ = $controller('registrationCtrl', {
            userService: _userService_,
            $state: _state_,
            $window: _window_
        });
    }));

    describe('testing email pattern', function () {
        it('should match boo@boo.be', function () {
            expect(_controller_.emailPattern.test('boo@boo.be')).toBe(true);
        });

        it('should match foo@gmail.co.uk', function () {
            expect(_controller_.emailPattern.test('foo@gmail.co.uk')).toBe(true);
        });

        it('should not match foo', function () {
            expect(_controller_.emailPattern.test('foo')).toBe(false);
        });

        it('should not match foo@foo', function () {
            expect(_controller_.emailPattern.test('foo@foo')).toBe(false);
        });

        it('should not match foo@foo.b', function () {
            expect(_controller_.emailPattern.test('foo@foo.b')).toBe(false);
        });

        it('should not match foo@foo.co.u', function () {
            expect(_controller_.emailPattern.test('foo@foo.co.u')).toBe(false);
        });
    });

    describe('testing password pattern', function () {
        it('should match Foo21', function () {
            expect(_controller_.passwordPattern.test('Foo21')).toBe(true);
        });

        it('should match FOo23', function () {
            expect(_controller_.passwordPattern.test('FOo23')).toBe(true);
        });

        it('should not match fooooo', function () {
            expect(_controller_.passwordPattern.test('Fooooo')).toBe(false);
        });

        it('should not match FOOOOOOO', function () {
            expect(_controller_.passwordPattern.test('FOOOOOOO')).toBe(false);
        });

        it('should not match FOO23', function () {
            expect(_controller_.passwordPattern.test('FOO23')).toBe(false);
        });

        it('should not match Foo@23', function () {
            expect(_controller_.passwordPattern.test('Foo@23')).toBe(false);
        });

        it('should not match VEEEERrrrrrryyyyyLOooonnggg52', function () {
            expect(_controller_.passwordPattern.test('VEEEERrrrrrryyyyyLOooonnggg52')).toBe(false);
        });
    });

    describe('testing "vm.open"', function () {
        it('should set "vm.opened" to true', function () {
            _controller_.open();
            expect(_controller_.opened).toBe(true);
        });
    });

    describe('testing "vm.cancel"', function () {
        it('should go back in history', function () {
            spyOn(_window_.history, 'back')
            _controller_.cancel();
            expect(_window_.history.back).toHaveBeenCalled();
        });
    });

    describe('testing "vm.register"', function () {

        it('should call "userService.registerUser if registrationForm is valid and transition $state to expenses.dashboard', function () {
            _controller_.registrationForm = {};
            _controller_.registrationForm.$valid = true;
            spyOn(_userService_, 'register');
            spyOn(_state_, 'go');

            _controller_.register({username: 'Robin'});
            expect(_userService_.register).toHaveBeenCalled();
            expect(_state_.go).toHaveBeenCalled();
        });

        it('should NOT call "userService.registerUser" or change state if registrationForm is not valid', function () {
            _controller_.registrationForm = {};
            _controller_.registrationForm.$valid = false;
            spyOn(_userService_, 'register');
            spyOn(_state_, 'go');

            _controller_.register({username: 'Robin'})
            expect(_userService_.register).not.toHaveBeenCalled();
            expect(_state_.go).not.toHaveBeenCalled();
        });
    })
});
