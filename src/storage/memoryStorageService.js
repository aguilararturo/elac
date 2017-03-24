(function () {
    'use strict';

    angular
        .module('ElacApp.Storage')
        .factory('memoryStorageService', memoryStorageService);

    /**
     * @function memoryStorageService
     * @author Christian Castillo
     * @param {Object} $cacheFactory - Factory that constructs Cache objects and gives access to them.
     * @param {Object} MEMORY_STORAGE_ID - Identifier of the cache object.
     *
     * @returns {Object} Newly created cache object.
     */
    function memoryStorageService($cacheFactory, MEMORY_STORAGE_ID) {
        return $cacheFactory(MEMORY_STORAGE_ID);
    }
})();
