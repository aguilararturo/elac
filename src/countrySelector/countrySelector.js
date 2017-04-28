(function () {
    'use strict';
    /* @ngInject */
    function SelectedCountryController($http) {
        var selCountryCtrl = this;
        function mapData(item) {
            item.alpha2 = _.lowerCase(item.alpha2);
            return item;
        }

        function $onInit() {
            selCountryCtrl.countries = [];
            function loadGeo(data) {
                var countryName = _.lowerCase(data.data.country);
                _.forEach(selCountryCtrl.countries, function search(country) {
                    if (country.alpha2 === countryName) {
                        selCountryCtrl.selectedCountry = country;
                        return;
                    }
                });
            }
            $http.get('src/utils/slim-2.txt')
                .then(function (results) {
                    selCountryCtrl.countries = _.map(results.data, mapData);
                    selCountryCtrl.selectedCountry = selCountryCtrl.countries[0];

                    $http.get('http://ipinfo.io/json')
                        .then(loadGeo);
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

