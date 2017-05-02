(function () {
    'use strict';
    function ElacMenuController() {
        var elacMenuCtrl = this;

        function $onInit() {
            elacMenuCtrl.items = [{
                name: 'Inicio',
                href: '#/home'
            },
            {
                name: 'Explorar',
                href: '#/home?da=explore'
            },
            {
                name: 'Asistentes',
                href: '#/home?da=event'
            },
            {
                name: 'Acerca',
                href: '#/home?da=about'
            },
            {
                name: 'Hotel',
                href: '#/home?da=hotel'
            },
            {
                name: 'Registrate',
                href: '#/registration'
            },
            {
                name: 'Contacto',
                href: '#/home?da=contact'
            }
            ];

            elacMenuCtrl.selectItem = elacMenuCtrl.items[0];

        }

        function onClickMenu(item) {
            var menuHeader = angular.element('.navbar-collapse.in');
            menuHeader.collapse('hide');
            elacMenuCtrl.selectItem = item;
        }

        elacMenuCtrl.onClickMenu = onClickMenu;

        elacMenuCtrl.$onInit = $onInit;
    }

    var elacMenu = {
        controller: ElacMenuController,
        controllerAs: 'elacMenuCtrl',
        templateUrl: 'elacMenu/elacMenu.tpl.html'
    };
    angular
        .module('ElacApp')
        .component('elacMenu', elacMenu);
})();

