
(function () {
    'use strict';
    /**
     * @function CartConfig
     * @desc Create routes for oder Confirm
     * @author Arturo Aguilar
     * @param  {stateWrapperProvider} stateWrapperProvider state provider service
     * @param  {constant} STATES_IDS contant with state IDs
     */
    function CartConfig($stateProvider) {
        $stateProvider.state('registration', {
            url: '/registration',
            controller: 'RegistrationController',
            controllerAs: 'regCtrl',
            templateUrl: 'registration/registration.tpl.html',
        });
    }

    angular
        .module('ElacApp')
        .config(CartConfig);
})();
