(function () {
    'use strict';

    function RegistrationController($rootScope, $state, _) {
        var regCtrl = this;
        regCtrl.selectedCountry = {};
        regCtrl.options = [
            {
                selected: true,
                value: 'Leo'
            },
            {
                selected: false,
                value: 'Leon'
            },
            {
                selected: false,
                value: 'Dama Leo'
            }
        ];

        regCtrl.tallas = [
            {
                selected: false,
                value: 'S'
            },
            {
                selected: false,
                value: 'M'
            },
            {
                selected: false,
                value: 'L'
            },
            {
                selected: false,
                value: 'XL'
            }
        ];

        regCtrl.dateOptions = {
            formatYear: 'yy',
            maxDate: new Date(2020, 5, 22),
            minDate: new Date(),
            startingDay: 1
        };

        regCtrl.currentDate = new Date();
        regCtrl.currentTime = regCtrl.currentDate.getTime();

        function filterDate(date) {
            return moment(date).date() % 2 == 0;
        }

        regCtrl.arriveOpened = false;
        regCtrl.departureOpened = false;

        function openArraive() {
            regCtrl.arriveOpened = true;
        }

        function openDeparture() {
            regCtrl.departureOpened = true;
        }
        function optionSelectionChange(option, array) {
            _.forEach(array, function (element) {
                element.selected = element.value === option.value;
            });
        }

        regCtrl.optionSelectionChange = optionSelectionChange;
        regCtrl.openArraive = openArraive;
        regCtrl.openDeparture = openDeparture;
        regCtrl.filterDate = filterDate;
    }

    angular.module('ElacApp')
        .controller('RegistrationController', RegistrationController);
})();
