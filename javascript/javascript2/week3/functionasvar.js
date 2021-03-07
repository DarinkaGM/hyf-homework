let arrayWithItems = [
    function () { 
    console.log("1st function") 
}, function () { console.log("2nd function") 
}, function () { console.log("3rd function") 
}]
arrayWithItems.forEach(item => item());

const functionA = function(){
    console.log("I am a function as a const.")
}
function functionB(){
    console.log("I am a regular function.")
}
functionA();
functionB();

const object = {
  keyfunction: function() {
      console.log("I am a key with a function as value")
    }
}

object.keyfunction();
