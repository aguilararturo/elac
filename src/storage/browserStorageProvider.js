(function () {
    'use strict';
    angular
        .module('ElacApp.Storage')
        .factory('browserCookiesStorage', browserCookiesStorage)
        .provider('browserStorage', BrowserStorageProvider);

    var storageServiceName;
    var storageServiceMethodsConfig;
    var PREFIX = 'I3_';

    /**
     * @constructor BrowserStorageProvider
     * @author Christian Castillo
     */
    function BrowserStorageProvider() {
        this.$get = browserStorageFactory;
        this.useService = useService;
        this.mapServiceMethods = mapServiceMethods;

        /**
         * @function useService
         * @param {String} serviceName - Service name that is going to be used for as storage mechanism
         */
        function useService(serviceName) {
            storageServiceName = serviceName;
        }

        /**
         * @function mapServiceMethods
         * @param {Object} serviceMethodsConfig - Configuration that matches the methods of the service that is being used.
         */
        function mapServiceMethods(serviceMethodsConfig) {
            storageServiceMethodsConfig = serviceMethodsConfig;
        }
    }

    /**
     * @function browserStorageFactory
     * @author Christian Castillo
     * @param {Object} $injector - It is used to inject (retrieve object instances) dynamically.
     * @param {Object} BROWSER_STORAGE_SPECIFICATION contant var names
     * @returns {{get: get, set: set, remove: remove}}
     */
    function browserStorageFactory($injector, BROWSER_STORAGE_SPECIFICATION) {
        if (!storageServiceName) {
            throw new Error('No storageServiceName provided. Please select the storage service you are going to use.');
        }

        if (!storageServiceMethodsConfig) {
            throw new Error('The configuration for the storageService\'s methods is not provided. ' +
                'Please specify the mapping for the methods.');
        }

        var storageService = $injector.get(storageServiceName);

        if (storageServiceName === BROWSER_STORAGE_SPECIFICATION.LOCAL_STORAGE.serviceName) {
            var localStorageProvider = $injector.get('localStorageServiceProvider');
            localStorageProvider.setPrefix('Hinda');
            localStorageProvider.setStorageCookie(1, window.location.href);
            localStorageProvider.setNotify(true, true);
        }

        /**
         * @function get
         * @description Returns the value of given key
         * @param {String} key - Id to use for lookup.
         *
         * @returns {Object | String} storage item value
         */
        function get(key) {
            return storageService[storageServiceMethodsConfig.get](key);
        }

        /**
         * @function set
         * @description Sets a value for given key
         * @param {String} key - Id for the `value`
         * @param {Object | String} value - Value to be stored.
         * @param {Object} options - Options attributes supported by the storage provider.
         */
        function set(key, value, options) {
            storageService[storageServiceMethodsConfig.set](key, value, options);
        }

        /**
         * @function remove
         * @description Remove given storage item
         * @param {String} key - Id of the key-value pair to delete.
         */
        function remove(key) {
            storageService[storageServiceMethodsConfig.remove](key);
        }

        /**
         * @function clearAll
         * @description Remove all data that has been added by using this storage service
         */
        function clearAll() {
            storageService[storageServiceMethodsConfig.clearAll]();
        }

        return {
            get: get,
            set: set,
            remove: remove,
            clearAll: clearAll
        };
    }
    /**
     * @function browserCookiesStorage
     * @author Darwin Vera
     * @param {Object} $cookies to store session information.
     * @param {Object} _ Lodash Library.
     * @returns {{get: get, set: set, remove: remove}}
     */
    function browserCookiesStorage($cookies, _) {
        var arrayOfAddedKeys = getAllKeys();
        /**
         * @function get
         * @description Keep track of the added key
         * @param {String} key - Id of the value that is being added to the storage.
         */
        function keepTrackOfAddedKey(key) {
            if (arrayOfAddedKeys.indexOf(key) === -1) {
                arrayOfAddedKeys.push(key);
            }
        }
        /**
         * @function getAllKeys
         * @description Returns a list of valid cookies keys list. Valid keys are the ones not marked with the prefix '_'
         * @returns {String[]} Valid cookies keys list.
         */
        function getAllKeys() {
            var cookies = $cookies.getAll();
            var localCookies = _.map(cookies, function iterateCookies(value, key) {
                if (_.startsWith(key, '_') || !_.startsWith(key, PREFIX)) {
                    return null;
                }
                return key;
            });
            return _.filter(localCookies, function iterateLocalCookies(value) {
                return value !== null;
            });
        }
        /**
         * @function get
         * @description Returns the value of given key.
         * @param {String} key - Id to use for lookup.
         *
         * @returns {Object | String} storage item value
         */
        function get(key) {
            /**
             * @function getValue
             * @author Darwin Vera
             * @description Returns a stored object value.
             * @param {String} gvKey - Key of the stored value.
             * @returns {Object} Object value retrieved.
             */
            function getValue(gvKey) {
                return $cookies.getObject(PREFIX + gvKey);
            }
            /**
             * @function getMultiValue
             * @description Returns a object value splitted and stored in multiple locations.
             * @param {String} key - Key of the stored value.
             * @param {String[]} multiKeys - List of keys.
             * @returns {Object} Object value retrieved from multiple locations.
             */
            function getMultiValue(key, multiKeys) {
                var value = getValue(key);
                _.forEach(multiKeys, function iterateMultiKeys(multiKey) {
                    var attribute = multiKey.replace(PREFIX + key + '__', '');
                    var multiObj = getValue(multiKey.replace(PREFIX, ''));
                    if (multiObj) {
                        value[attribute] = multiObj;
                    }
                });
                return value;
            }

            var multiKeys = _.filter(arrayOfAddedKeys, function iterateAddedKeys(addedKey) {
                return _.startsWith(addedKey, PREFIX + key + '__');
            });
            if (multiKeys.length > 0) {
                return getMultiValue(key, multiKeys);
            }
            return getValue(key);
        }

        /**
         * @function set
         * @description Sets a value for given key
         * @param {String} key - Id for the `value`
         * @param {Object | String} value - Value to be stored.
         * @param {Object} options - Options properties supported by the storage provider.
         */
        function set(key, value, options) {
            var configOptions = options || {};
            /**
             * @function setValue
             * @author Darwin Vera
             * @description Sets a value for given key
             * @param {String} svKey - Id for the `value`
             * @param {Object | String} svValue - Value to be stored.
             */
            function setValue(svKey, svValue) {
                var vKey = PREFIX + svKey;
                keepTrackOfAddedKey(vKey);
                if (_.isNil(configOptions.expires)) {
                    $cookies.putObject(vKey, svValue);
                } else {
                    $cookies.putObject(vKey, svValue, { expires: configOptions.expires });
                }
            }
            /**
             * @function setMultiValue
             * @author Darwin Vera
             * @description Store a object value splitted in multiple locations.
             * @param {String} mkey - key of the main store object.
             * @param {Object | String} mvalue - Object to store.
             * @param {Object[]} splitAttributes - List of objects's attributes that define the distribution of the object.
             */
            function setMultiValue(mkey, mvalue, splitAttributes) {
                var splitDefinitions = [];
                _.forEach(splitAttributes, function iterateSplitAttributes(attribute) {
                    if (mvalue.hasOwnProperty(attribute)) {
                        splitDefinitions.push({
                            key: mkey + '__' + attribute,
                            attribute: attribute
                        });
                    }
                });
                if (splitDefinitions.length > 0) {
                    var attributes = [];
                    _.forEach(splitDefinitions, function iterateSplitDefinitions(definition) {
                        setValue(definition.key, mvalue[definition.attribute]);
                        attributes.push(definition.attribute);
                    });
                    var mainValue = _.omit(mvalue, attributes);
                    setValue(mkey, mainValue);
                } else {
                    setValue(mkey, mvalue);
                }
            }

            if (_.isNil(configOptions.split)) {
                setValue(key, value);
            } else {
                setMultiValue(key, value, configOptions.split);
            }
        }

        /**
         * @function remove
         * @description Remove given storage item
         * @param {String} key - Id of the key-value pair to delete.
         */
        function remove(key) {
            $cookies.remove(PREFIX + key);
            _.remove(arrayOfAddedKeys, function iterateAddedKeys(addedKey) { return addedKey === PREFIX + key; });
        }

        /**
         * @function clearAll
         * @description Remove all data that has been added by using this storage service
         */
        function clearAll() {
            var cookies = getAllKeys();
            _.each(cookies, function iterateCookies(key) {
                $cookies.remove(key);
            });
        }

        return {
            get: get,
            set: set,
            remove: remove,
            clearAll: clearAll
        };
    }
})();
