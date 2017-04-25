(function () {
    'use strict';

    function lodashFactory() {
        return window._;
    }

    angular
        .module('ElacApp')
        .factory('_', lodashFactory);
})();
