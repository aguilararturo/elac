
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
        $stateProvider.state('registrationList', {
            url: '/admin/registered',
            controller: 'RegisteredListController',
            controllerAs: 'regListCtrl',
            templateUrl: 'registration/registered/registeredList.tpl.html',
        });
    }
    angular
        .module('ElacApp')
        .config(CartConfig);
})();