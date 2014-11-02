<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html ng-app="app">
    <head>
        <meta charset="UTF-8">
        <title>GraphikOZ</title>
        
        <link href="vendors/bootstrap3/css/bootstrap.min.css" rel="stylesheet">
        <link href="style/style.css" rel="stylesheet">
        
        <script src="vendors/angular/angular.js"></script>
        
        <script src="vendors/jquery-2.1.1/jquery-2.1.1.min.js"></script>
        <script src="vendors/bootstrap3/js/bootstrap.js"></script>
        
        <!-- 
        COMPONENTS
        -->
        <script src="app/components/global.js"></script>
        <script src="app/components/leftMenu.js"></script>
        <script src="app/components/headMenu.js"></script>
        
        <script src="app/config.js"></script>
            
    </head>
<body id="accueil" ng-controller="MainCtrl">
    
    
    <div head-menu></div>
    <div class="container">
        
         <div left-menu></div>
         
         <div class="row">             
             <div ng-repeat="i in model.images" class="bloc-image col-md-4" >
                 <image ng-src="images/{{i.img}}" ng-alt="{{i.alt}}" ng-title="{{i.title}}" 
                        ng-class="{opacityFifty: i.show === true}" ng-click="showText(i.id)"/>
                 <div ng-if="i.show" class="bloc-text" ng-click="i.show=false">
                     <p>{{i.text}}</p>
                     <a ng-href="{{i.url}}">{{i.title}}</a>
                 </div>
             </div>
         </div>
        
    </div>
   
</body>
</html>
