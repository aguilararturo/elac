(function () {
    'use strict';

    function RegistrationController($rootScope, $state) {
        var regCtrl = this;
        regCtrl.selectedCountry = {};
    }

    angular.module('ElacApp')
        .controller('RegistrationController', RegistrationController);
})();
