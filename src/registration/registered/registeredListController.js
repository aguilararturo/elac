(function () {
    'use strict';
    /* @ngInject */
    function RegisteredListController(RegService) {
        var regListCtrl = this;

        function loadAsistants(response) {
            regListCtrl.users = response;
            console.log('users', regListCtrl.users);
        }

        function $onInit() {
            regListCtrl.headers = [
                {
                    title: '#'
                },
                {
                    title: 'Nombre'
                },
                {
                    title: 'Pais'
                },
                {
                    title: 'Tipo'
                },
                {
                    title: 'Polera'
                },
                {
                    title: 'Llegada'
                },
                {
                    title: 'Vuelo'
                },
                {
                    title: 'Partida'
                },
                {
                    title: 'Vuelo Partida'
                }
            ];
            RegService.getElacUsers().then(loadAsistants);
        }

        regListCtrl.$onInit = $onInit;
    }

    angular.module('ElacApp')
        .controller('RegisteredListController', RegisteredListController);
})();
