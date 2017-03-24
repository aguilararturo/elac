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
    elacApp.run(function () {
    });
})();
