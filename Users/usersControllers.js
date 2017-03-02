
app.controller('usersCtrl', function($scope,usersFactory){
$scope.credits = usersFactory.users.credits;
$scope.user = usersFactory.users.fName +" "+ usersFactory.users.lName ;
$scope.fName = usersFactory.users.fName ;
$scope.lName = usersFactory.users.lName ;




$scope.userObj = usersFactory ;


});
