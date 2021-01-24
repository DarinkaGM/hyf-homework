/*Age-ify 
(A future age calculator)*/

const yearOfBirth = 1995;
var yearFuture = 2033;
var age = yearFuture - yearOfBirth ;

console.log ("You will be " + age + " in" + yearFuture + ".");


/*Goodboy-Oldboy 
(A dog age calculator)*/


var dogYearOfBirth = 2018;
var dogYearFuture = 2023;
var humanAge = dogYearFuture - dogYearOfBirth;
var dogYear = humanAge * 7;
var shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears){dogYear;
console.log("Your dog will be " + dogYear + " dogs year-old in" + dogYearFuture);}
else {console.log("Your dog will be " + humanAge + " human years-old in" + dogYearFuture)}


/* Housey pricey 
(A house price estimator)*/

//House 1 (Peter)//
var depth= 8;
var width= 10;
var height= 10;
var volumeInMeters = depth * width * height;
var gardenSizeInM2 = 100;
var realPrice = 2500000;
var housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

//House 2 (Julia)//
var depth= 5;
var width= 11;
var height= 8;
var volumeInMeters = depth * width * height;
var gardenSizeInM2= 70;
var realPrice = 1000000;
var housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

if (housePrice > realPrice) {
    console.log ("You are overpaying for this house.");
    
} else { ("You are underpaying for this house.");}
