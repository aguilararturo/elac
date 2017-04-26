
(function () {
    'use strict';
    /* @ngInject */
    function HomeConfig($stateProvider) {
        $stateProvider.state('home', {
            url: '/home?da',
            controller: 'homeController',
            controllerAs: 'homeCtrl',
            templateUrl: 'home/home.tpl.html',

            params: {
                da: {
                    value: ''
                }

            }
        });
    }
    angular
        .module('ElacApp')
        .config(HomeConfig)
})();