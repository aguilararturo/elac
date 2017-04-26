(function () {
    'use strict';
    function TimePickerController($http, $filter) {
        var timeCtrl = this;

        function $onInit() {

        }

        timeCtrl.currentDate = new Date();

        timeCtrl.$onInit = $onInit;
    }

    var timePicker = {
        bindings: {
            data: '='
        },
        controller: TimePickerController,
        controllerAs: 'timeCtrl',
        templateUrl: 'timePicker/timePicker.tpl.html'
    };
    angular
        .module('ElacApp')
        .component('timePicker', timePicker);
})();

