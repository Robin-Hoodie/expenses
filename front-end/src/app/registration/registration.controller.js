/**
 * Created by rohellem on 18/09/2015.
 */
(function(){
    'use strict';

    angular.module('app.core')
        .controller('registrationCtrl', registrationCtrl);

    registrationCtrl.$inject = [];

    function registrationCtrl () {
        var vm = this;

        vm.init = init;

        init();

        function init () {
            vm.emailPattern =  /^(\w|\.)+@\w+\.\w{2,}(\.\w{2,})?$/i;
            vm.passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/;
        }
    }
})();