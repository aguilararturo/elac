(function () {
    'use strict';

    /**
     * @function setup
     * @author Arturo Aguilar
     * @desc Loads HindaApp on body element once the document is ready and the configuration is
     * available creating a new constant with the configuration info in HindaApp.Configuration
     * module.
     */
    function setup() {
        /**
         * @function loadAppAndConfiguration
         * @author Arturo Aguilar
         * @desc Adds a constant to HindaApp.Configuraiton module with config data retrieved from
         * the API.
         * @param  {Object} config information for the site
         */
        function loadAppAndConfiguration(config) {
            angular.module('ElacApp.Configuration')
                .constant('BASE_URL', window.EASYBIKE_BASE_URL)
                .constant('USE_RECAPTCHA_MOCK', window.EASYBIKE_USE_RECAPTCHA_MOCK);

            document.title = 'Elac Bolivia 2017';
            angular.bootstrap(document.body, ['ElacApp']);
            console.log('app is running');
        }

        loadAppAndConfiguration();
    }

    angular.element(document)
        .ready(setup);
})();
