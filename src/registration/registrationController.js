(function () {
    'use strict';

    function RegistrationController($rootScope, $state) {
        var regCtrl = this;
        regCtrl.countryData = {};
    }

    angular.module('ElacApp')
        .controller('RegistrationController', RegistrationController);
})();
