describe('Testing the registration controller', function () {
    var _controller_,
        _userService_;

    beforeEach(angular.mock.module('app.core'));

    beforeEach(angular.mock.inject(function ($controller, userService) {
        _userService_ = userService;
        _controller_ = $controller('registrationCtrl', {
            userService: _userService_
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
        it('should set "vm.user" and "vm.registrationForm" to empty objects', function () {
            _controller_.cancel();
            expect(_controller_.user).toEqual({});
            expect(_controller_.registrationForm).toEqual({});
        });
    });

    describe('testing "vm.register"', function () {
        it('should call "userService.registerUser if registrationForm is valid', function () {
            _controller_.registrationForm = {};
            _controller_.registrationForm.$valid = true;
            spyOn(_userService_, 'register');
            _controller_.register({username: 'Robin'});
            expect(_userService_.register).toHaveBeenCalled();
        });

        it('should NOT call "userService.registerUser" if registrationForm is not valid', function () {
            _controller_.registrationForm = {};
            _controller_.registrationForm.$valid = false;
            spyOn(_userService_, 'register');
            _controller_.register({username: 'Robin'})
            expect(_userService_.register).not.toHaveBeenCalled();
        });
    })
});
