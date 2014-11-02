angular.module('global',[])
    .directive('clickOutside', function($document){
        return {
          link: function postLink(scope, element, attr) {

            var elsewhere = true;

            element.on('click', function(e) {
              elsewhere = false
              $document.off('click', clickOutside);
              $document.on('click', clickOutside);
            });

            var clickOutside = function() {
              if (elsewhere) {
                scope.$apply(attr.clickOutside);
                $document.off('click', clickOutside);
              }
              elsewhere = true;
            };

          }
        }
    })



