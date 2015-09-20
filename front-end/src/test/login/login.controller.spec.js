describe('Testing loginCtrl', function () {

    var _controller_,
        _modalInstance_;

    beforeEach(angular.mock.module('app.core'));

    //TODO: how to inject $modalInstance in tests?
    beforeEach(angular.mock.inject(function ($controller) {
        _controller_ = $controller('loginCtrl', {
        });
    }));

    describe('testing "vm.cancel"', function () {
        it('should call "_modalInstance_.dismiss"', function () {
            _controller_.cancel();
        });
    })


})