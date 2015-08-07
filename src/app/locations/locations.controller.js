(function () {
    'use strict';

    angular.module('eliteAdmin').controller('LocationsCtrl', LocationsCtrl);

    LocationsCtrl.$inject = ['$http', 'dialogsService', 'eliteApi'];

    /* @ngInject */
    function LocationsCtrl($http, dialogs, eliteApi) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.deleteItem = deleteItem;
        $http.get("app/setup/data-locations.json")
            .success(function(response) {
                vm.locations = response;
            });

        activate();

        ////////////////

        function activate() {
        }

        function deleteItem(id) {
            dialogs.confirm('Are you sure you want to Delete this item?', 'Delete?', ['OK', 'Cancel'])
                .then(function(){
                    eliteApi.deleteLocation(id).then(function(data){
                        _.remove(vm.locations, { 'id': id });
                    });
                });
        }
    }
})();