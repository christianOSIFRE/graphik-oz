angular.module('app', ['global','headMenu','leftMenu'])
  
.controller("MainCtrl", ['$scope', function ($scope) {    
        
        $scope.model= {
            images:[
                {
                    id: 0,
                    alt: 'tapage-nocturne',
                    title: 'tapage-nocturne',
                    url: '/Tapage-Nocturne',
                    img: 'piaf.jpg',
                    text: 'Ce site propose les différentes activitées de cette association',
                    selected: true
                },
                {
                    id: 1,
                    alt: 'Geymnna',
                    title: 'Geymnna',
                    img: 'jdr.jpg',
                    text: 'Mon jeu à moi !!!',
                    selected: true
                },
                {
                    id: 2,
                    alt: '',
                    title: '',
                    img: '01.jpg',
                    selected: true
                },
                {
                    id: 3,
                    alt: '',
                    title: '',
                    img: '01.jpg',
                    selected: true
                },
                {
                    id: 4,
                    alt: '',
                    title: '',
                    img: '01.jpg',
                    selected: true
                },
                {
                    id: 5,
                    alt: '',
                    title: '',
                    img: '01.jpg',
                    selected: true
                }
            ]
        };
        
        $scope.show = false;
        
        $scope.closeText = function(){
             for(var i=0; i<$scope.model.images.length;i++){
                $scope.model.images[i].show=false;
            } 
        }        
        $scope.showText = function(id){
            $scope.closeText();
            $scope.model.images[id].show=true;
        };
        
        
        
     
        
    }])

 

;

