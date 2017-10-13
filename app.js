var app = angular.module('sportsApp', []);
app.controller('sportsCtrl', function($scope) {
    $scope.showName = false;
    $scope.showAddress = false;
    $scope.showTeam = false;
    
    $scope.teams =[{
        id:1,
        name:''
    }]
    
    $scope.add = function(id){
        
        $scope.teams.push({
           id:id,
           name:''
        });
        
    }
});