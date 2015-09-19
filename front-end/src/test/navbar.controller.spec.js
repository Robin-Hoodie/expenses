describe('Testing the navbar controller', function () {
    var _controller_;

    beforeEach(angular.mock.module('app.core'));

    beforeEach(angular.mock.inject(function ($controller, userService) {
        _controller_ = $controller('navbarCtrl', {
            userService: userService
        });
    }));
});


