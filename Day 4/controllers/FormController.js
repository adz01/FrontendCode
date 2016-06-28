hrApp.controller('FormController', function($scope){
$scope.submitted = function ()
    {
    if($scope.myForm.input.$valid == true)
        {
        alert("Succes !");
         }
    };
});