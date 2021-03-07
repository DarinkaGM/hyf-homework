
console.log("script loaded");
setTimeout(() => {
    console.log("Called after 2.5 seconds");
}, 2500);


function delayedLogout(delay, stringToLog) {
    setTimeout(() => { console.log(stringToLog); }, delay);
}
delayedLogout(3000, "This string logged after 3 seconds");
delayedLogout(5000, "This string logged after 3 seconds");


const delayButton = document.getElementById("delay-button");

function delayedCall() {
    delayedLogout(5000, "Called after 5 sec");
}
delayButton.addEventListener('click', delayedCall);

const earthLogger = function () {
    console.log("earth");
  };
  const saturnLogger = function () {
    console.log("saturn");
  };

const planetLogFunction = (callPlanet) => {
    console.log (callPlanet);
}

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

const navButton = document.getElementById("log-location-bttn");
const locationStatus = document.getElementById("location-status");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPosition)
    } 
}
function getPosition(position) {locationStatus.innerHTML =
    "Y: " +
    position.coords.latitude +
    " X: " +
    position.coords.longitude;
}
navButton.addEventListener("click", getLocation);

function runAfterDelay(delay, callback) {
    setTimeout(() => callback(), delay * 1000);
}

runAfterDelay(3, function () {
    console.log("Logged out after 3 seconds.");
})

const funnyJoke = function () {
    console.log("Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.")
};
const badJoke = function () {
    console.log("A user interface is like a joke. If you have to explain it then it's not that good!")
};
function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    if (shouldTellFunnyJoke) {
        logFunnyJoke.call();
    } else {
        logBadJoke.call();
    }
}
jokeCreator(true, funnyJoke, badJoke);
jokeCreator(false, funnyJoke, badJoke);