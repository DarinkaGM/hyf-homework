//Item array removal :)

const names = [
    'Peter',
    'Ahmad',
    'Yana',
    'kristina',
    'Rasmus',
    'Samuel',
    'katrine',
    'Tala',
];
const nameToRemove = "Ahmad";

for (let i = 0; i < names.length; i++) {
    if (names[i] === nameToRemove) {
        return names.splice(i, 1);
    }
}

console.log(names);



//When will we be there?
const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};

function trip() {

    var time = travelInformation.destinationDistance / travelInformation.speed;
    var hours = parseInt(Number(time));
    var minutes = Math.round((Number(time) - hours) * 60);
    console.log("The total duration of the trip is: " + hours + " hours and " + minutes + " minutes.")
}
const travelTime = trip();
console.log(travelTime);




//Series :D
const seriesDurations = [{
        title: "Community",
        totalInMinutes: 2420,
    },
    {
        title: "The office",
        totalInMinutes: 4290,
    },
    {
        title: "The Handmaid's tale",
        totalInMinutes: 1800,
    },
];

var life = (42048000);

function logOutSeriesText() {
    for (let i = 0; i < seriesDurations.length; i++) {
        let percentage = (seriesDurations[i].totalInMinutes / life * 100);
        console.log("You've spent " + percentage + "%" + " of your life watching: " + (seriesDurations[i].title) + ".");
    }
}

logOutSeriesText()




// NOnoN0nOYes (Note taking app)
const notes = [];

function saveNote(task, id) {
    const newNote = [("Content: " + task), ("id: " + id)]
    notes.push(newNote);
}

saveNote("Call my brother", 1);
saveNote("Fix the bike", 2);

console.log(notes);

function getNote(id) {
    for (var i = 0; i < notes.length; i++) {
        if (id === notes[i].id) {
            return notes[i];
        }
    }
}
const thirdNote = getNote(3);
console.log(thirdNote);