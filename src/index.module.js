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
            'ngCountries',
            'timer',
            'ElacApp.Storage',
            'ElacApp.Templates'
        ]);

    angular.module('ElacApp').config(['$locationProvider', function ($locationProvider) {
        $locationProvider.hashPrefix('');
    }]);
})();
