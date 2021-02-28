//Voice assistant
const todoList = ["JS homework", "Css homework", "HTML homework"];
let userName = "Benjamin";

function getReply(command) {
    let sentence = command.split(" ");

    //HELLO
    if (command.includes("Hello my name is ")) {
        return ("Nice to meet you " + userName)
    }
    //WHAT IS MY NAME
    else if (command.includes("What is my name?")) {
        return ("Your name is " + userName);
    }

    //ADD TO LIST
    else if (command.includes("Add") && ("to my to do")) {
        sentence.splice(0, 1);
        sentence.splice(sentence.length - 3);
        todoList.push(sentence.join(" "));
        return ((sentence.join(" ")) + " was added to the list.");

    }
    //REMOVE FROM LIST
    else if (command.includes("Remove") && ("to my to do")) {
        sentence.splice(sentence.length - 2);
        todoList.push(sentence.pop(""));

        return ((sentence.pop(" ")) + " was removed from the list.");
    } 
    //WHAT'S ON MY TODO - I couldn't make this work
    else if (command === ("What is on my to do?")) {
        return "You have " + todoList.length + " things to do. Including: " + todoList;
    
    
    //DATE
   
    } else if (command.includes("What day") && ("today")) {
        let day = new Date();
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "December"];
        return day.getDate() + "/" + months[day.getMonth()] + "/" + day.getFullYear();
    }

    //TIMER
    else if (command.includes("Set a timer for") && ("minutes")) {
        let time = command.substr(16, 2);
        timeInMiliseconds = time * 60000;
        setTimeout(
            function() {
                return ("Timer done");
            }, timeInMiliseconds
        );
        return ("Timer set for " + time + " minutes.")
    }

    //MATH - I couldn't figure this out either
    else if (command.includes ("+") || ("-") || ("*")) {
        
        function math (a, operator, b) {  
        if (operator ==
            "+") {
            result = a + b;
        } else if (operator == "-") {
            return a - b;
        } else if (operator == "*") {
            return a * b;
        }
    } 

    }

}




console.log(getReply("Hello my name is Benjamin")); // 
console.log(getReply("What is my name?")); // 
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo")); //
console.log(getReply("Remove fishing to my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("What is 3 + 3?"));
console.log(getReply("What is 4 * 12?"));
console.log(getReply("Set a timer for 4 minutes"));