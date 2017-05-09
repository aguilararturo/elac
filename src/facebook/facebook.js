(function () {
    'use strict';
    function Facebook($q, $rootScope, $window) {
        function iniFace() {
            FB.init({
                appId: '1849327175317576',
                cookie: true,  // enable cookies to allow the server to access
                xfbml: true,  // parse social plugins on this page
                version: 'v2.8' // use graph api version 2.8
            });
            //FB.AppEvents.logPageView();
            console.log('initFace');
            $rootScope.facebookInitialized = true;
            $rootScope.$broadcast('faceInit');
        }

        $window.fbAsyncInit = iniFace;

        function resolve(errval, retval, deferred) {
            $rootScope.$apply(function () {
                if (errval) {
                    deferred.reject(errval);
                } else {
                    retval.connected = true;
                    deferred.resolve(retval);
                }
            });
        }

        function getMeData(response, deferred) {
            var access_token = response.authResponse.accessToken;
            var user_id = response.authResponse.userID;
            FB.api('/me?fields=id, first_name,last_name', function (responseMe) {
              //  console.log('me fields request', responseMe);
                resolve(null, responseMe, deferred);
            });
        }

        function getUser() {
            var deferred = $q.defer();

            function onLogin(response) {
              //  console.log('login response');
                if (response.status == 'connected') {
                    getMeData(response, deferred);
                } else if (response.status == 'not_authorized') {
                    FB.login(function (response) {
                        if (response.authResponse) {
                            getMeData(response, deferred);
                        } else {
                            console.log('no auth', response);
                            resolve(response.error, null, deferred);
                        }
                    });
                } else if(response.status == 'unknown') {
                     deferred.reject('not logged');
                }
            }

            FB.getLoginStatus(onLogin);
            var promise = deferred.promise;
            promise.connected = false;
            return promise;
        }

        function login() {
            var deferred = $q.defer();
            FB.login(function (response) {
                if (response.authResponse) {
                     getMeData(response, deferred);
                } else {
                    console.log('no auth', response);
                    resolve(response.error, null, deferred);
                }
            });

            var promise = deferred.promise;
            promise.connected = false;
            return promise;
        }

        return {
            login: login,
            getUser: getUser
        };
    }

    var elacApp = angular.module('ElacApp');

    app.service('Facebook', Facebook);

})();