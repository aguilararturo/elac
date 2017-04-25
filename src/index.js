(function () {
    'use strict';
    var elacApp = angular.module('ElacApp');

    /**
     * @function config
     * @moduleof HindaApp
     * @author Arturo Aguilar
     * @desc Website Level Configuration
     */
    elacApp.config(function (browserStorageProvider, BROWSER_STORAGE_SPECIFICATION) {
        browserStorageProvider.useService(BROWSER_STORAGE_SPECIFICATION.COOKIES.serviceName);
        browserStorageProvider.mapServiceMethods(BROWSER_STORAGE_SPECIFICATION.COOKIES.methodsMapping);
    });

    /**
     * @function run
     * @moduleof elacApp
     * @author Arturo Aguilar
     * @desc Website Level Runtime Configurations
     */
    elacApp.run(function ($rootScope, $window) {
        $rootScope.headerClass = '';
        $rootScope.contentClass = '';
        function stateChangeSuccess(event, toState, toParams, fromState, fromParams) {
            var w = angular.element($window);
            $rootScope.otherState = false;
            var header = angular.element('#headerNav');

            function menuToggle() {
                var windowWidth = w.width();
                function putHeader() {
                    if ($rootScope.otherState) {
                        return;
                    }
                    if (w.scrollTop() > 405) {
                        header.addClass('fixed-menu animated slideInDown');
                    } else {
                        header.removeClass('fixed-menu animated slideInDown');
                    }
                }

                if (windowWidth > 767) {
                    w.on('scroll', putHeader);
                } else {
                    header.addClass('fixed-menu animated slideInDown');
                }
            }

            w.on('resize', _.debounce(menuToggle, 300));

            if (toState.name === 'home') {
                $rootScope.contentClass = '';
                console.log('params', toParams);
                $rootScope.otherState = false;
                header.removeClass('fixed-menu animated slideInDown');
            } else {
                $window.scrollTo(0, 0);
                $rootScope.otherState = true;
                header.addClass('fixed-menu animated slideInDown');
                $rootScope.contentClass = 'body-content';
            }

            menuToggle();
        }

        $rootScope.$on('$stateChangeSuccess', stateChangeSuccess);
    });
})();
