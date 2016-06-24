/**
 * Created by user on 24-Jun-16.
 */
hrApp.controller('DescriptionController',function($rootScope,$scope) {
    $scope.title = 'Two Way Binding Demo';
    $scope.childtemplate = 'templates/childscope.html';
    $scope.resetFirstVariable = function () {
        $scope.firstVariable = undefined;
    };
    $scope.setFirstVariable = function (val) {
        $scope.firstVariable = val;
    }
   
    $scope.descriptionShow = true;
    
    
});
