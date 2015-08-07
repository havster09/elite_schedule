(function () {
    'use strict';

    angular.module('eliteAdmin').controller('HomeCtrl', HomeCtrl);

    /* @ngInject */
    function HomeCtrl($state) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.notesCollapsed = true;
        vm.navigate = navigate;

        activate();

        ////////////////

        function activate() {
            console.log('current state data',$state.current.data);
        }

        function navigate(){
            $state.go('leagues');
        }


    }
})();