
app.factory('usersFactory', function () {

var getFromLocalStorage = function() {
  var retrievedObject = JSON.parse(localStorage.getItem('users'));

return retrievedObject;

} ;




var users = getFromLocalStorage() || [

{
  fName: "Alex",
  lName: "Benedek",
  credits:100,
  collection : []
}
];

var buy = function (id,price) {

  users[0].credits = users[0].credits - price;
  users[0].collection.push(id);
  console.log(users[0].credits, users[0].collection)
  saveToStorage();

};

var saveToStorage = function () {

localStorage.setItem('users', JSON.stringify(users));

};

var clearCollection = function() {

  var itemsInCollection = users[0].collection.length;
    console.log("Cleaning: " + itemsInCollection +" items")
    users[0].collection=[];
    console.log("Cleaned, collection has:"+users[0].collection.length+ " items now")
      saveToStorage()
};


var load = function (option) {
  console.log("User credits:"+users[0].credits)
  console.log("User clicked purchase option #" +option);


  switch (option) {
    case 1:
      users[0].credits = users[0].credits + 10;
      break;
    case 2:
      users[0].credits = users[0].credits + 20;
      break;
    case 3:
      users[0].credits = users[0].credits + 50;
      break;
      case 4:
        users[0].credits = users[0].credits + 100;
        break;

  }
console.log("User credits after purchase:"+users[0].credits);
saveToStorage();



};

//var collectionCount = users[0].collection.length;


  // var collection = [];

  var userObj = {
      users: users[0],
      buy : buy,
      load : load,
      clearCollection: clearCollection,
      //collectionCount: users[0].collection.length;
    }



return userObj


});
