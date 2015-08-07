(function () {
    'use strict';

    angular.module('eliteAdmin').controller('LeagueHomeCtrl', LeagueHomeCtrl);

    LeagueHomeCtrl.$inject = [];

    /* @ngInject */
    function LeagueHomeCtrl() {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.league = '';
        vm.reset = reset;
        vm.save = save;

        activate();

        ////////////////

        function activate() {
        }

        function reset(){
            vm.homeContent = '';
        }

        function save(){

        }



    }
})();