    const startGame = document.getElementById("start-bttn");
    const setSeconds = document.getElementById("set-seconds-input");
    let timesClickS = document.getElementById("s-count");
    let timesClickL = document.getElementById("l-count");
    let sCount = 0;
    let lCount = 0;
  function confetti(canvasId) {
    var confettiSettings = { target: `${canvasId}`, start_from_edge: false, };
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
}
    startGame.addEventListener("click", gameSeconds)
    function gameSeconds() { 
      
        if (setSeconds.value === "") {
            alert("Enter a valid number.");
            return;
        }
        if (setSeconds.value >= 1) {
            let timeInMilliseconds = setSeconds.value ;
            window.addEventListener("keydown", counter)
            setTimeout(function () { result() }, timeInMilliseconds)
        } 
    }
    //for some reason the number of clicks is not displayed when I use Safari
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
        document.getElementById("#player-one h2").innerHTML = "WINNER! 🏆"
        confetti("canvas-one")
    }
    else if (lCount < sCount) {
        document.getElementById("#player-one h2").innerHTML = "WINNER! 🏆"
        confetti("canvas-two")
    }
    else if (sCount === lCount) {
        document.getElementById("#player-one h2").innerHTML = "WINNER! 🏆"
        document.getElementById("#player-two h2").innerHTML = "WINNER! 🏆"
        confetti("canvas-one")
        confetti("canvas-two")
    }
}


    

