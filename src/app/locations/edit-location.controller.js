(function () {
    'use strict';

    angular.module('eliteAdmin').controller('EditLocationCtrl', EditLocationCtrl);

    EditLocationCtrl.$inject = ['$timeout', '$stateParams', '$state', '$http', 'maps', 'currentPosition', 'eliteApi'];

    /* @ngInject */
    function EditLocationCtrl($timeout, $stateParams, $state, $http, maps, currentPosition, eliteApi) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        $http.get("app/setup/data-locations.json")
            .success(function(response) {
                vm.locations = response;
                activate();
            });
        vm.refreshMap = refreshMap;
        vm.save = save;
        vm.title = ($stateParams.id ? 'Edit Location': 'Add Location');

        vm.map = {
            center: {
                latitude: currentPosition.coords.latitude,
                longitude: currentPosition.coords.longitude
            },
            zoom: 12
        };

        vm.marker = {
            id: 1,
            coords: currentPosition.coords
        };



        ////////////////

        function activate() {
            if (vm.location.address){
                refreshMap();
            }
        }

        function refreshMap(){
            var geocoder = new maps.Geocoder();
            geocoder.geocode({ address: vm.location.address }, function(result){
                if (result.length > 0) {
                    var addrLocation = result[0].geometry.location;

                    $timeout(function(){
                        vm.map.center = {
                            latitude: addrLocation.lat(),
                            longitude: addrLocation.lng()
                        };

                        vm.marker = {
                            id: 1,
                            coords: {
                                latitude: vm.map.center.latitude,
                                longitude: vm.map.center.longitude
                            },
                            options: {
                                title: vm.location.name
                            }
                        };
                    }, 0);
                }
            });
        }


        function save(){
            eliteApi.saveLocation(vm.location).then(function(){
                $state.go('locations');
            });
        }
    }
})();