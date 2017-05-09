(function () {
    'use strict';
    /* @ngInject */
    function AsistantController(_, RegService) {
        var asistantCtrl = this;
        function loadAsistants(response) {
            function addImage(asistant) {
                asistant.image = '//graph.facebook.com/' + asistant.userId + '/picture?type=large';
                return asistant;
            }

            var id = -1;
            function addIds(item) {
                id++;
                return {
                    rows: item,
                    id: id
                };
            }
            asistantCtrl.carouselItems = _.map(_.chunk(_.map(response, addImage), 3), addIds);
        }

        function $onInit() {
            asistantCtrl.myInterval = 5000;
            asistantCtrl.noWrapSlides = false;
            asistantCtrl.active = 0;
            RegService.getElacUsers().then(loadAsistants);
        }

        asistantCtrl.$onInit = $onInit;
    }

    var asistantSection = {
        controller: AsistantController,
        controllerAs: 'asistantCtrl',
        templateUrl: 'asistant/asistant.tpl.html'
    };

    angular.module('ElacApp')
        .component('asistantSection', asistantSection);
})();
