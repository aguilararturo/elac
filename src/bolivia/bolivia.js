(function () {
    'use strict';
    /* @ngInject */
    function BoliviaController(_) {
        var boliviaCtrl = this;


        function $onInit() {
            boliviaCtrl.myInterval = 5000;
            boliviaCtrl.noWrapSlides = false;
            boliviaCtrl.active = 0;
            boliviaCtrl.url = 'www.boliviaentusmanos.com/turismo/';
            boliviaCtrl.slides = [
                {
                    id: 0,
                    title: 'Salar de Uyuni',
                    text: '',
                    image: 'images/bolivia/salar-uyuni.jpg',
                    url: 'http://www.boliviaentusmanos.com/turismo/destinos/salar-de-uyuni.html'
                },
                {
                    id: 1,
                    title: 'Tiwanacu',
                    text: '',
                    image: 'images/bolivia/tiwanacu.jpg',
                    url: 'http://www.boliviaentusmanos.com/turismo/destinos/tiwanaku.html'
                },
                {
                    id: 2,
                    title: 'Los Yungas',
                    text: '',
                    image: 'images/bolivia/yungas.jpg',
                    url: 'http://www.boliviaentusmanos.com/turismo/destinos/coroico-yungas.html'
                },
                {
                    id: 3,
                    title: 'Ruta Del Vino',
                    text: '',
                    image: 'images/bolivia/rutavino.jpg',
                    url: 'http://www.boliviaentusmanos.com/turismo/destinos/salar-de-uyuni.html'
                },
                {
                    id: 4,
                    title: 'La Paz',
                    text: '',
                    image: 'images/bolivia/lapaz.jpg',
                    url: 'http://www.boliviaentusmanos.com/turismo/ciudad-de-la-paz.html'
                },
                {
                    id: 5,
                    title: 'Cochabamba',
                    text: '',
                    image: 'images/bolivia/cochabamba.jpg',
                    url: 'http://www.boliviaentusmanos.com/turismo/cochabamba.html'
                }
            ];
        }

        boliviaCtrl.$onInit = $onInit;
    }

    var boliviaSection = {
        controller: BoliviaController,
        controllerAs: 'boliviaCtrl',
        templateUrl: 'bolivia/bolivia.tpl.html'
    };

    angular.module('ElacApp')
        .component('boliviaSection', boliviaSection);
})();
