describe('Testing loginService', function () {

    var _loginService_,
        _modal_;

    beforeEach(angular.mock.module('app.core'));

    beforeEach(angular.mock.inject(function (loginService, $modal) {
        _loginService_ = loginService;
        _modal_ = $modal;
    }));

    describe('testing "openLoginWindow"', function () {
        it('should call "modal.open"', function () {
            spyOn(_modal_, 'open');
            _loginService_.openLoginWindow();
            expect(_modal_.open).toHaveBeenCalled();
        })
    })
});
