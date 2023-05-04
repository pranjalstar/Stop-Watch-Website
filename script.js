//These lines declare variables using const. The stopwatch variable references the DOM element with the ID of
// "stopwatch", and the hours, minutes,
// and seconds variables reference the DOM elements with the class names of "hours", "minutes", and "seconds", respectively

const stopwatch = document.getElementById("stopwatch");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");


//These lines declare variables using let. The intervalId variable is used to store the ID of the interval returned 
// by setInterval(), and the time variable is used to store the number of seconds elapsed since the timer was started.
let intervalId;
let time = 0;


//This function takes a time value in seconds and returns a formatted string representing the time in hours, minutes, and seconds. 
//The padStart() method is used to ensure that each time unit is represented by at least two characters (i.e., with a leading zero if necessary).


function formatTime(time) {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}



//This function starts the timer by setting an interval that increments the time variable every second and updates the 
//text content of the stopwatch element with the formatted time value.


function startTimer() {
    intervalId = setInterval(() => {
        time++;
        stopwatch.textContent = formatTime(time);
    }, 1000);
}


//This function stops the timer by clearing the interval identified by intervalId

function stopTimer() {
    clearInterval(intervalId);
}


//This function resets the timer by clearing the interval identified by intervalId, resetting the time variable to zero,
//and updating the text content of the stopwatch element with the formatted time value.
function resetTimer() {
    clearInterval(intervalId);
    time = 0;
    stopwatch.textContent = formatTime(time);
}

// Add event listeners
//These lines add event listeners to the "Start", "Stop", and "Reset" buttons that call the startTimer(), 
//stopTimer(), and resetTimer() functions, respectively, when the buttons are clicked.

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
