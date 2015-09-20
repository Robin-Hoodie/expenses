describe('Testing userService', function () {

    var _userService_;

    beforeEach(angular.mock.module('app.core'));

    beforeEach(angular.mock.inject(function (userService) {
        _userService_ = userService;
    }));

    it('"users" should contain 1 user', function () {
       _userService_.register({'username': 'Robin'});
        expect(_userService_.users.length).toBe(1);
    });
})