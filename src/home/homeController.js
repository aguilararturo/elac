(function () {
    'use strict';
    function homeController($rootScope, $state, $document, _, $window) {
        var homeCtrl = this;

        homeCtrl.endTime = '9 August 2017 12:00:00';

        if (_.isEmpty($state.params.da)) {
            $window.scrollTo(0, 0);
        } else {
            var elementTo = angular.element('#' + $state.params.da);
            var top = elementTo.offset().top;
            $document.scrollTo(top - 60);
        }

        //$location.hash($state.params.da);

        // call $anchorScroll()
        //$anchorScroll();
    }

    angular.module('ElacApp')
        .controller('homeController', homeController);
})();
