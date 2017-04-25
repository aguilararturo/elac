(function () {
    'use strict'

    function SelectedCountryController($http) {
        var selCountryCtrl = this;
        function mapData(item) {
            item.alpha2 = _.lowerCase(item.alpha2);
            return item;
        }

        function $onInit() {
            selCountryCtrl.countries = [];
            selCountryCtrl.selectedCountry2 = {};
            $http.get('/src/utils/slim-2.json')
                .then(function (results) {
                    selCountryCtrl.countries = _.map(results.data, mapData);
                    selCountryCtrl.selectedCountry = selCountryCtrl.countries[0];
                    console.log('countries', selCountryCtrl.countries);
                    console.log('selected', selCountryCtrl.selectedCountry);
                });

        }
        function selectCountry(country) {
            selCountryCtrl.selectedCountry = country;
        }

        selCountryCtrl.$onInit = $onInit;
        selCountryCtrl.selectCountry = selectCountry;
    }

    var countrySelector = {
        bindings: {
            selectedCountry: '='
        },
        controller: SelectedCountryController,
        controllerAs: 'selCountryCtrl',
        templateUrl: 'countrySelector/countrySelector.tpl.html'
    };
    angular
        .module('ElacApp')
        .component('countrySelector', countrySelector);
})();

