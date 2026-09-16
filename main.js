// Write your code below
//Create the function with key and object
function addValue(myObj, myValue){
  //Set the key to myValue
    myObj['myValue']= myValue;
}
//Assign variable for myObj
var myObj = {};

//Make the argument value
addValue(myObj, true);

console.log(myObj['myValue']);
