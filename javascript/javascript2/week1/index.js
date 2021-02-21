//DANSKE ORD

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function getShortestWord(danishWords){
     let shortestWord = danishWords [0];
     danishWords.forEach(element => {
         if (shortestWord.length > element.length){
             shortestWord = element;
         }
     });
     return shortestWord;

}; 
console.log (getShortestWord(danishWords)); 

function getLongestWord(danishWords){
    let longestWord = danishWords [0];
    danishWords.forEach(element => {
        if (longestWord.length < element.length){
            longestWord = element;
        }
    });
    return longestWord;
}; 
console.log (getLongestWord(danishWords));

//
var danishString = "Jeg har en blå bil";
var danishString2 = "Blå grød med røde bær"; 

function getOccurrence(str){
    let å = (str.match(/å/) || []).length;
    let æ = (str.match(/æ/) || []).length;
    let ø = (str.match(/ø/) || []).length;
    let danishCharacters = {å, æ, ø};
    return (danishCharacters);
};
console.log (getOccurrence(danishString));
console.log (getOccurrence(danishString2));




// SPIRIT ANIMAL NAME GENERATOR

let spiritAnimals = ["A sleepy koala", "A slow sloth", "A playful monkey", "A fun seahorse", "A wise owl"];
let input = document.querySelector("#user");
let button = document.querySelector ("#submit");
let output = document.getElementById("output");
button.addEventListener("click", spiritAnimalButton);

function spiritAnimalButton(){
    let userName = input.value;
    let animalSelector = spiritAnimals [Math.floor(Math.random() * spiritAnimals.length)];
    if (!input.value) {
        output.innerHTML = "Don't forget to write your name!"

        
    }
    else {output.innerHTML = userName + " your spirit animal is: " + animalSelector};
    
};