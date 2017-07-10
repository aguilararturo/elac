(function () {
    'use strict';
    /* @ngInject */
    function RegisteredListController(RegService) {
        var regListCtrl = this;

        function loadAsistants(response) {
            regListCtrl.orderByField = '';
            regListCtrl.users = response;
            console.log('users', regListCtrl.users);
        }

        function $onInit() {
            regListCtrl.headers = [
                {
                    title: '#'
                },
                {
                    title: 'Nombre',
                    value: 'firstName'
                },
                {
                    title: 'Pais',
                    value: 'country'
                },
                {
                    title: 'Tipo',
                    value: 'type'
                },
                {
                    title: 'Polera',
                    value: 'shirt'
                },
                {
                    title: 'Llegada'
                    ,
                    value: 'arriveDate'
                },
                {
                    title: 'Vuelo'
                    ,
                    value: 'arriveCompany'
                },
                {
                    title: 'Partida'
                    ,
                    value: 'departureDate'
                },
                {
                    title: 'Vuelo Partida'
                    ,
                    value: 'departureCompany'
                }
            ];
            RegService.getElacUsers().then(loadAsistants);
        }

        function orderBy(header) {
            regListCtrl.orderByField = header.value;
        }

        regListCtrl.$onInit = $onInit;
        regListCtrl.orderBy = orderBy;
    }

    angular.module('ElacApp')
        .controller('RegisteredListController', RegisteredListController);
})();
