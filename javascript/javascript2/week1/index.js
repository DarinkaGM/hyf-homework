//DANSKE ORD

let danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function getShortestWord(word){
     const lengthOfWords = [];
     word.forEach(word => {
         lengthOfWords.push(word.length)
         });
     
     let shortestWord= Math.min.apply(Math, lengthOfWords);
     danishWords.forEach(word=> {
         if (word.length == shortestWord){
          console.log("The shortest word is: " + word);  
         }

         
     });

     };
getShortestWord(danishWords);

function getLongestWord(word){
    const lengthOfWords = [];
    word.forEach(word => {
        lengthOfWords.push(word.length)
        });
    
    let longestWord= Math.max.apply(Math, lengthOfWords);
    danishWords.forEach(word=> {
        if (word.length == longestWord){
         console.log("The longest word is: " + word);  
        }

        
    });

    };
getLongestWord(danishWords);

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