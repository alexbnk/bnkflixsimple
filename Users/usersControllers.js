
app.controller('usersCtrl', function($scope, usersFactory , moviesFactory){
$scope.credits = usersFactory.users.credits;
$scope.user = usersFactory.users.fName +" "+ usersFactory.users.lName ;
$scope.fName = usersFactory.users.fName ;
$scope.lName = usersFactory.users.lName ;

//$scope.collectionCount=usersFactory.collectionCount;
$scope.clearCollection = usersFactory.clearCollection;

$scope.userObj = usersFactory ;

// $scope.collection = usersFactory.users.collection;
// console.log(usersFactory.users.collection);
});
