
app.controller('listMoviewsCtrl', function($scope,moviesFactory,usersFactory){

$scope.movies=moviesFactory.movies;
$scope.buyMovie = moviesFactory.buyMovie;
// $scope.change = todoFactory.change;
// $scope.delete = todoFactory.delete;
// $scope.add = todoFactory.add;
// $scope.done = todoFactory.done;

$scope.showMovie = function(index) {
alert("Show movie #:"+index);

};

$scope.buyMovie = function(index,price) {
alert("Buy movie #:"+index+"\n"+"Price: $"+price);
usersFactory.buy(index,price);
}

//$scope.usercollection = usersFactory.users.collection;
//for (i=0 ; i< usersFactory.users.collection.length ; i++) {

  // $scope.usercollection.push(moviesFactory.movies[usersFactory.users.collection[i]]) ;
//  console.log(moviesFactory.movies[usersFactory.users.collection[i]]) ;

var show


// closes controller

});
