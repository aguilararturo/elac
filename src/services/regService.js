(function () {
    'use strict';

    function RegService($log, $http, $q, requestService) {
        $http.defaults.headers.common.Accept = 'text/plain';
        $http.defaults.headers.common['Content-Type'] = 'application/json';

        var userUrl = 'http://localhost:49177/api' + '/Elac';

        function getElacUsers() {
            return $http.get(userUrl)
                .then(requestService.successRequest)
                .catch(requestService.errorLoadingScripts('getElacUsers'));
        }

        function saveElacUser(elacUser) {
            return $http.post(userUrl, elacUser);
        }

        return {
            saveElacUser: saveElacUser,
            getElacUsers: getElacUsers
        };
    }

    angular
        .module('ElacApp')
        .service('RegService', RegService);
})();
