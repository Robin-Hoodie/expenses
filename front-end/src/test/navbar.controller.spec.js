describe('Testing the navbar controller', function () {
    var controller,
        _location_;

    beforeEach(angular.mock.module('app.core'));

    beforeEach(angular.mock.inject(function ($controller, $location, userService) {
        _location_ = $location;
        controller = $controller('navbarCtrl', {
            $location: _location_,
            userService: userService
        });
    }));
});

