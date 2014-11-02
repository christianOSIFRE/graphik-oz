angular.module('headMenu', [])

        .directive('headMenu', [function(){
            return {
                restrict: 'A',
                scope: {
                    model: '=model'
                },
                templateUrl: 'app/components/headMenu.html',
                link: function (scope, element) {
                    scope.showMenu = false;
                    scope.headMenu = [
                    {
                        id: 0,
                        label: 'Accueil',
                        icon: 'accueil.png',
                        url: '#'
                    },
                    {
                        id: 1,
                        label: 'Projet',
                        url: '/projet.html',
                        icon: '',
                        element: [
                            {
                                id: 0,
                                label: 'Geymnna',
                                url: '/geymnna.html'
                            },
                            {
                                id: 1,
                                label: 'Tapage Nocturne',
                                url: '/tapage-nocturne'
                            }
                        ]
                    },
                    {
                        id: 0,
                        label: 'CV',
                        icon: 'cv.png',
                        url: '/cv'
                    }]; 
                
             
                }
                
                
                
              };     
        }])

