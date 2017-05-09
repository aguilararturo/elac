(function () {
    'use strict';
    angular.module("ElacApp").directive("fbLogin", function ($rootScope, $window) {
        return function (scope, iElement, iAttrs) {
            if ($window.FB) {
                $window.FB.XFBML.parse(iElement[0]);
            }
        };
    });
})();