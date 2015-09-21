describe('Testing loginService', function () {

    var _loginService_,
        _modal_;

    beforeEach(angular.mock.module('app.core'));

    beforeEach(angular.mock.inject(function (loginService, $modal) {
        _loginService_ = loginService;
        _modal_ = $modal;
    }));

    describe('"openLoginWindow"', function () {
        it('should call "modal.open"', function () {
            _modal_.open = jasmine.createSpy('_modal_.open');
            _loginService_.openLoginWindow();
            expect(_modal_.open).toHaveBeenCalled();
        });
    });
});
