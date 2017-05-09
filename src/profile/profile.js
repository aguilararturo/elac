(function () {
    'use strict';
    function ProfileController() {
        var profileCtrl = this;

        function $onInit() {

        }

        profileCtrl.$onInit = $onInit;
    }

    var profile = {
        controller: ProfileController,
        controllerAs: 'profileCtrl',
        templateUrl: 'profile/profile.tpl.html',
        bindings: {
            user: '=',
            action: '&',
            isLogged: '<'
        }
    };
    angular
        .module('ElacApp')
        .component('profile', profile);
})();

