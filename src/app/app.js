(function () {
    'use strict';
    var app = angular.module('eliteAdmin', [
        // Angular modules
        //'ngRoute',
        'ngSanitize',



        // 3rd Party Modules
        'ui.bootstrap',
        'ui.router',
        'ui.calendar',
        'uiGmapgoogle-maps',
        'ui.ace',
        'ui.grid',
        'ui.grid.importer',
        'ui.grid.resizeColumns',
        'ui.grid.edit',
        'ui.select',
        'ui.alias'
    ]);

    //app.config(['$routeProvider', configRoutes]);
    app.config(['$stateProvider','$urlRouterProvider','uiGmapGoogleMapApiProvider', configRoutes]);

    function configRoutes($stateProvider,$urlRouterProvider,uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            v:"3.17"
        })

        $stateProvider
            .state('home', {
                url:'/',
                templateUrl: 'app/home/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'vm',
                data:{
                    prop1:'fu',
                    prop2:'knt'
                }
            })
            .state('locations', {
                url: '/locations',
                templateUrl: 'app/locations/locations.html',
                controller: 'LocationsCtrl',
                controllerAs: 'vm',
                resolve: {
                }
            })
            .state('location', {
                url: '/location/:id',
                templateUrl: 'app/locations/edit-location.html',
                controller: 'EditLocationCtrl',
                controllerAs: 'vm',
                resolve: {
                    maps: ['uiGmapGoogleMapApi', function(uiGmapGoogleMapApi){
                        return uiGmapGoogleMapApi;
                    }],
                    currentPosition: ['$q', function($q){
                        var deferred = $q.defer();
                        navigator.geolocation.getCurrentPosition(function(position){
                            deferred.resolve(position);
                        });
                        return deferred.promise;
                    }]
                }
            })
            .state('leagues', {
                url:'/leagues',
                templateUrl: 'app/leagues/leagues.html',
                controller: 'LeaguesCtrl',
                controllerAs: 'vm'
            })
            .state('league', {
                url:'/leagues/:leagueId',
                abstract:true,
                templateUrl: 'app/layout/league-shell.html',
                controller: 'LeagueShellCtrl',
                controllerAs:'vm'
            })
            .state('league.teams', {
                url: '/teams',
                views: {
                    'tabContent': {
                        templateUrl: 'app/teams/teams.html',
                        controller: 'TeamsCtrl',
                        controllerAs: 'vm'
                    },
                    'view1': {
                        template: '<div>This is View 1</div>'
                    },
                    'view2': {
                        template: '<div>This is View 2</div>'
                    },
                    'view3': {
                        template: '<div>This is View 3</div>'
                    }

                }
            })
            .state('league.games', {
                url: '/games',
                views: {
                    'tabContent': {
                        templateUrl: 'app/games/games.html',
                        controller: 'GamesCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('league.games-calendar', {
                url: '/games-calendar',
                views: {
                    'tabContent': {
                        templateUrl: 'app/games/games-calendar.html',
                        controller: 'GamesCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('league.home', {
                url: '/league-home',
                views: {
                    'tabContent': {
                        templateUrl: 'app/league-home/league-home.html',
                        controller: 'LeagueHomeCtrl',
                        controllerAs: 'vm'
                    }
                }
            })


        $urlRouterProvider.otherwise('/');
    }

    app.run(['$state', 'stateWatcherService', function ($state, stateWatcherService) {
        // Include $route to kick start the router.
    }]);

})();
