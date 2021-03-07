console.log("script loaded");

function confetti(canvasId) {
    var confettiSettings = { target: `${canvasId}`, start_from_edge: false, };
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
}

const startGame = document.getElementById("start-bttn");
const setSeconds = document.getElementById("set-seconds-input");

startGame.addEventListener("click", playGame)
function playGame() { 
    if (setSeconds.value > 0) {
        let timeInMilliseconds = setSeconds.value * 1000;
        window.addEventListener("keydown", counter)
        setTimeout(timeInMilliseconds);
    } 
}
    let timesClickS = document.getElementById("s-count");
    let timesClickL = document.getElementById("l-count");
    let sCount = 0;
    let lCount = 0;
    document.addEventListener("keypress",counter);
function counter(event) {
  
    if (event.key === "s") {
        sCount++;
        timesClickS.innerHTML = sCount;
    }
    else if (event.key === "l") {
        lCount++;
        timesClickL.innerHTML = lCount;
    }
};

function result() {
    if (sCount > lCount) {
        document.getElementById("#player-one").innerHTML = "WINNER! 🏆"
        confetti("#canvas-one")
    }
    else if (lCount < sCount) {
        document.getElementById("#player-one").innerHTML = "WINNER! 🏆"
        confetti("#canvas-two")
    }
    else if (sCount === lCount) {
        document.getElementById("#player-one").innerHTML = "WINNER! 🏆"
        document.getElementById("#player-two").innerHTML = "WINNER! 🏆"
        confetti("#canvas-one")
        confetti("#canvas-two")
    }
}
    