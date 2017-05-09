(function () {
    'use strict';
    /* @ngInject */
    function HotelController(_) {
        var hotelCtrl = this;


        function $onInit() {
            hotelCtrl.myInterval = 5000;
            hotelCtrl.noWrapSlides = false;
            hotelCtrl.active = 0;
            hotelCtrl.url = 'www.hotelcortez.com';
            hotelCtrl.slides = [
                {
                    id: 0,
                    title: 'Hotel Cortez',
                    text: '',
                    image: 'images/hotel/fachada.jpg'
                },
                {
                    id: 1,
                    title: 'Hotel Cortez',
                    text: '',
                    image: 'images/hotel/vista.jpg'
                },
                {
                    id: 2,
                    title: 'Habitacion',
                    text: '',
                    image: 'images/hotel/tripe.jpg'
                },
                {
                    id: 3,
                    title: 'Salon de Reuniones',
                    text: '',
                    image: 'images/hotel/salon1.jpg'
                },
                {
                    id: 4,
                    title: 'Habitacion',
                    text: '',
                    image: 'images/hotel/doble.jpg'
                },
            ];
        }

        hotelCtrl.$onInit = $onInit;
    }

    var hotelSection = {
        controller: HotelController,
        controllerAs: 'hotelCtrl',
        templateUrl: 'hotel/hotel.tpl.html'
    };

    angular.module('ElacApp')
        .component('hotelSection', hotelSection);
})();
