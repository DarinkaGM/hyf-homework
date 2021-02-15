//Flight booking fullname function
function getFullname(firstname, surname, useFormalName = true) {

    if (useFormalName) {
        return 'Lord ' + firstname + " " + surname
    } else {
        return firstname + " " + surname;
    }
}
getFullname("Benjamin", "Hughes", true); // returns "Benjamin Hughes"
let fullname1 = getFullname("Alex", "Lopez");
let fullname2 = getFullname("Steven", "Wilson", true);
console.log(fullname1);
console.log(fullname2);



//Event application: I particulartly struggled with finding the logic behind this excercise and I havent been able to come up with a solution to it. I'll keep working on it

//Weather wear
function clothing(temperature) {
    if (temperature <= 0) {
        return ("Wear warm winter clothes. Negative temperature today.")
    } else if (temperature > 0 && temperature <= 10) {
        return ("Wear a coat and another layer today. Cold temperature outside. ")
    } else if (temperature > 10 && temperature <= 20) {
        return ("Wear a jacket, no need for extra-layers today.")
    } else if (temperature > 20 && temperature <= 30) {
        return ("Wear fresh clothes today.")
    }
};


//Student manager

const class07Students = [];

function addStudentToClass(studentName) {
    if (class07Students.length > 6) {
        return ("The class is full. No more students can be added.")

    } else if (studentName === "Dronning Margrethe") {
        class07Students.push(studentName)

    } else if (studentName == " ") {
        return ("Empty field.");
    } else if (class07Students.includes(studentName)) {
        console.log("You are already registered");


    } else {

        return class07Students.push(studentName);

    }
}

function getNumberOfStudents() {
    return "There are" + class07Students.length + "students in the class."
}
addStudentToClass("Dronning Margrethe")
addStudentToClass("Alice")
addStudentToClass("Ben")
addStudentToClass("Claes")
addStudentToClass("Diana")
addStudentToClass("Emil")
addStudentToClass("Frank")
addStudentToClass("George")
addStudentToClass("Hannah")
addStudentToClass("Ingrid")
addStudentToClass("Jay")