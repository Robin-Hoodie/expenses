describe('Testing the registration controller', function () {
    var controller;

    beforeEach(angular.mock.module('app.core'));

    beforeEach(angular.mock.inject(function ($controller) {
        controller = $controller('registrationCtrl');
    }));

    describe('testing email pattern', function () {
        it('should match boo@boo.be', function () {
            expect(controller.emailPattern.test('boo@boo.be')).toBe(true);
        });

        it('should match foo@gmail.co.uk', function () {
            expect(controller.emailPattern.test('foo@gmail.co.uk')).toBe(true);
        });

        it('should not match foo', function () {
            expect(controller.emailPattern.test('foo')).toBe(false);
        });

        it('should not match foo@foo', function () {
            expect(controller.emailPattern.test('foo@foo')).toBe(false);
        });

        it('should not match foo@foo.b', function () {
            expect(controller.emailPattern.test('foo@foo.b')).toBe(false);
        });

        it('should not match foo@foo.co.u', function () {
            expect(controller.emailPattern.test('foo@foo.co.u')).toBe(false);
        });
    });
    
    describe('testing password pattern', function () {
        it('should match Foo21', function () {
            expect(controller.passwordPattern.test('Foo21')).toBe(true);
        });

        it('should match FOo23', function () {
            expect(controller.passwordPattern.test('FOo23')).toBe(true);
        });

        it('should not match fooooo', function () {
            expect(controller.passwordPattern.test('Fooooo')).toBe(false);
        });

        it('should not match FOOOOOOO', function () {
            expect(controller.passwordPattern.test('FOOOOOOO')).toBe(false);
        });

        it('should not match FOO23', function () {
            expect(controller.passwordPattern.test('FOO23')).toBe(false);
        });

        it('should not match Foo@23', function () {
            expect(controller.passwordPattern.test('Foo@23')).toBe(false);
        })
    })
});
