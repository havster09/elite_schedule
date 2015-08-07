(function(){
    "use strict";
    angular.module('eliteAdmin').controller('LeaguesCtrl', LeaguesCtrl);

    LeaguesCtrl.$inject = ['dialogsService'];

    function LeaguesCtrl(dialogs){
        var vm = this;
        vm.showHelpAlert = true;
        vm.hideAlert = hideAlert;
        vm.deleteItem = deleteItem;

        function hideAlert(){
            vm.showHelpAlert = false;
        }

        function deleteItem(){
            dialogs.confirm('Are you sure you want to delete?','Delete?',['OK','Cancel'])
                .then(
                function () {
                    console.log('delete dat sht');
                },
                function () {
                    console.log('delete canceled');
                })
        }

        vm.leagues = [
            {
                "id": "038dfd06-0971-467d-80cb-2000cf3cf989",
                "name": "Cager Classic",
                "homeScreen": "**Welcome coaches, players, and parents!** \n\nThis site contains full schedule information for the tournament.",
                "rulesScreen": ""
            },
            {
                "id": "614b9998-e039-42da-8354-626b7b10a1cf",
                "name": "Holiday Hoops Challenge",
                "homeScreen": "**Welcome coaches, players, and parents!** \n\nThis site contains full schedule information for the tournament.",
                "rulesScreen": ""
            },
            {
                "id": "cabe8500-730c-4f99-b509-62c7a0401049",
                "name": "Thanksgiving Tip Off",
                "homeScreen": "**Welcome coaches, players, and parents!** \n\nThis site contains full schedule information for the tournament.",
                "rulesScreen": ""
            }
        ]
    }
}());