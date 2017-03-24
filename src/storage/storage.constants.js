(function () {
    'use strict';

    angular
        .module('ElacApp.Storage')
        .constant('STORAGE_KEYS', {
            CART: 'cartKey',
            WISHLIST: 'wishListKey',
            PROMOTIONS: 'promotionsKey',
            SELECTED_PROMOTION: 'selectedPromotion',
            BRANDS: 'brands',
            REDIRECT_STATE: 'redirectState',
            SERVER_SESSION_TIME: 'serverSessionTime',
            SESSION_STATUS: 'sessionStatus',
            NO_CATALOGS_MESSAGE: 'noCatalogsMessage',
            PARTICIPANT_ID: 'participantId',
            PARTICIPANT_DATA: 'participant',
            SELECTED_CATEGORIES: 'selectedCategories',
            LAST_SELECTED_CATEGORY_PARAMS: 'lastSelectedCategoryParams',
            LAST_SELECTED_CATALOG_PAGE_INDEX: 'lastSelectedIndex',
            CART_PAYMENT: 'cartPayment',
            PRODUCT_FLAGS: 'productFlags',
            POINTS: 'points',
            PREV_CART_ITEMS: 'prevCartItems',
            CURRENT_ACH_CART_ITEM: 'currentACHCartItem',
            CATEGORIES: 'categories',
            FORCE_PASSWORD_DISPLAYED: 'forcePasswordDisplayed'
        })
        .constant('BROWSER_STORAGE_SPECIFICATION', {
            LOCAL_STORAGE: {
                serviceName: 'localStorageService',
                methodsMapping: {
                    get: 'get',
                    set: 'set',
                    remove: 'remove',
                    clearAll: 'clear'
                }
            },
            COOKIES: {
                serviceName: 'browserCookiesStorage',
                methodsMapping: {
                    get: 'get',
                    set: 'set',
                    remove: 'remove',
                    clearAll: 'clearAll'
                }
            }
        })
        .constant('MEMORY_STORAGE_ID', 'memoryStorageCache');
})();
