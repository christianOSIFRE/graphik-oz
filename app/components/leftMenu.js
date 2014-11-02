angular.module('leftMenu', [])

        .directive('leftMenu', [function(){
            return {
                restrict: 'A',
                scope: {
                    model: '=model'
                },
                templateUrl: 'app/components/leftMenu.html',
                link: function (scope, element) {
                    scope.showMenu = false;
                    scope.menu = [
                    {
                        id: 0,
                        label: 'Accueil',
                        url: '#'
                    },
                    {
                        id: 1,
                        label: 'Geymnna',
                        url: '/geymnna.html',
                        icon: 'geymnna.png',
                        element: [
                            {
                                id: 0,
                                label: 'Règles',
                                url: '#'
                            },
                            {
                                id: 0,
                                label: 'PJ',
                                url: '#'
                            }
                        ]
                    },
                    {
                        id: 2,
                        label: 'Tapage Nocturne',
                        url: '/tapageur.html',
                        icon: 'tapage.png',
                        element: [
                            {
                                id: 0,
                                label: 'Cours',
                                url: 'apage-nocturne/cours'
                            },
                            {
                                id: 0,
                                label: 'Scène ouverte',
                                url: 'tapage-nocturne/scène-ouverte'
                            }
                        ]
                    }]; 
                
                scope.openAccordeon = function(id){
                    for(var i=0; i<scope.menu.length;i++){
                        scope.menu[i].selected = false;
                    }
                    scope.menu[id].selected = true;
                };
                }
                
                
                
              };     
        }])

