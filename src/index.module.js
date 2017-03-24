(function () {
    'use strict';

    /**
     * @module HindaApp
     */
    angular
        .module('ElacApp', [
            'ui.router',
            'ui.bootstrap',
            'ngAnimate',
            'ngMap',
            'angularMoment',
            'vcRecaptcha',
            'ElacApp.Storage'
        ]);

    angular.module('ElacApp').config(['$locationProvider', function ($locationProvider) {
        $locationProvider.hashPrefix('');
    }]);
})();
