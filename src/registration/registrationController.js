(function () {
    'use strict';

    function RegistrationController($rootScope, $state, _, Facebook, $window, RegService, $filter) {
        var regCtrl = this;

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

        function findSelected(item) {
            return item.selected;
        }

        function registrationComplete() {
            regCtrl.loadingMessage = '';
            regCtrl.isLoading = false;
            regCtrl.regComplete = true;
            regCtrl.regMessage = 'Registro Completo';
        }

        function registrationFail() {
            regCtrl.regComplete = true;
            regCtrl.regMessage = 'Error en el registro intente mas tarde';
        }

        function register() {
            regCtrl.data.shirt = _.find(regCtrl.tallas, findSelected).value;
            regCtrl.data.type = _.find(regCtrl.options, findSelected).value;
            regCtrl.data.country = regCtrl.selectedCountry.name;
            var elacUser = _.clone(regCtrl.data);
            elacUser.departureDate = $filter('date')(regCtrl.data.departureDate, 'yyyy-MM-dd HH:mm:ss Z');
            elacUser.arriveDate = $filter('date')(regCtrl.data.arriveDate, 'yyyy-MM-dd HH:mm:ss Z');
            console.log('regData', elacUser);

            regCtrl.loadingMessage = 'Registro en proceso';
            regCtrl.isLoading = true;
            RegService.saveElacUser(elacUser)
                .then(registrationComplete)
                .catch(registrationFail);
        }

        function getDayClass(data) {
            var date = data.date,
                mode = data.mode;
            if (mode === 'day') {
                var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

                for (var i = 0; i < regCtrl.events.length; i++) {
                    var currentDay = new Date(regCtrl.events[i].date).setHours(0, 0, 0, 0);

                    if (dayToCheck === currentDay) {
                        return regCtrl.events[i].status;
                    }
                }
            }

            return '';
        }

        function $onInit() {
            regCtrl.regComplete = false;
            regCtrl.loadingMessage = '';
            regCtrl.isLoading = true;
            var tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            var afterTomorrow = new Date();
            afterTomorrow.setDate(tomorrow.getDate() + 1);
            regCtrl.events = [
                {
                    date: tomorrow,
                    status: 'full'
                },
                {
                    date: afterTomorrow,
                    status: 'partially'
                }
            ];
            regCtrl.selectedCountry = {};
            regCtrl.data = {};

            regCtrl.data.arriveDate =  new Date('2017-08-09 09:00:00 -0400');
            regCtrl.data.departureDate = new Date('2017-08-13 12:00:00 -0400');

            regCtrl.dateOptions = {
                showWeeks: true,
                maxDate: new Date(2018, 12, 31),
                minDate: new Date(2017, 5, 8),
                startingDay: 1
            };

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

            regCtrl.currentDate = new Date();
            regCtrl.currentTime = regCtrl.currentDate.getTime();
            regCtrl.user = {
                image: 'images/default-user.png'
            };

            function initFace() {
                Facebook.getUser().then(processLogin);
            }

            $rootScope.$on('faceInit', initFace);
            regCtrl.allowReg = false;

            if ($rootScope.facebookInitialized) {
                initFace();
            }
        }

        function processLogin(user) {
            console.log('login', user);
            regCtrl.user.image = '//graph.facebook.com/' + user.id + '/picture?type=large';
            regCtrl.data.firstName = user.first_name;
            regCtrl.data.lastName = user.last_name;
            regCtrl.data.userId = user.id;
            regCtrl.allowReg = true;
            regCtrl.isLoading = false;
        }

        function errorLoading() {
            regCtrl.isLoading = false;
        }

        function customLogin() {
            Facebook.login()
                .then(processLogin)
                .catch(errorLoading);
        }

        regCtrl.optionSelectionChange = optionSelectionChange;
        regCtrl.openArraive = openArraive;
        regCtrl.openDeparture = openDeparture;
        regCtrl.filterDate = filterDate;
        regCtrl.register = register;
        regCtrl.$onInit = $onInit;
        regCtrl.login = customLogin;
    }

    angular.module('ElacApp')
        .controller('RegistrationController', RegistrationController);
})();
