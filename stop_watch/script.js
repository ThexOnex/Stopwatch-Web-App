let seconds = document.getElementById("second");
let minute = document.getElementById("minute");
let hour = document.getElementById("hour");

let secondsVar = 0;
let minuteVar = 0;
let hourVar = 0;
continueTimer = true;

let startBtn = document.getElementById("start");
let pauseBtn = document.getElementById("pause");
let resetBtn = document.getElementById("reset");

let recordBtn = document.getElementById("lap");
let delRecordBtn = document.getElementById("restart_laps");


startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

recordBtn.addEventListener("click", recordLap);
delRecordBtn.addEventListener("click", clearLaps);

function startTimer() {
    console.log("clicked start");
    continueTimer = true
    const countInterval = setInterval(function() {
        if (secondsVar == 60) {
            secondsVar = 0;
            addMinute()
        }
        if (continueTimer == false){
            clearInterval(countInterval)
        } else {
            secondsVar++;
            if (secondsVar < 10){
                seconds.innerText = "0" + secondsVar;
            } else {
                seconds.innerText = secondsVar;
            }
        }
    }, 1000);
}


function stopTimer() {
    console.log("clicked stop");
    continueTimer = false;
}

function resetTimer() {
    secondsVar = 0;
    minuteVar = 0;
    hourVar = 0;
    console.log(minuteVar);

    seconds.innerText = secondsVar + "0";
    minute.innerText = minuteVar + "0";
    hour.innerText = hourVar + "0";
    stopTimer();
}

const addMinute = function (){
    minuteVar++;
    if (minuteVar < 10){
        minute.innerText = "0" + minuteVar;
    } else {
        minute.innerText = minuteVar;
    }
    if (minuteVar == 60){
        minuteVar = 0;
        secondsVar = 0;
        addHour();
    }
}

const addHour = function () {
    hourVar++;
    hour.innerText = hourVar;
    if (hourVar < 10){
        hour.innerText = "0" + hourVar;
    } else {
        hour.innerText = hourVar;
    }
    if (hourVar == 24) {
        hourVar = 0;
        minuteVar = 0;
        secondsVar = 0;
    }
}

let data_box = document.getElementById("laps_data");
let app_data_string = "";

function recordLap () {
    str_sec = "";
    str_min = "";
    str_hour = "";

    secondsVar < 10 ? str_sec = "0" + secondsVar : str_sec = secondsVar;
    minuteVar < 10 ? str_min = "0" + minuteVar : str_min = minuteVar;
    hourVar < 10 ? str_hour = "0" + hourVar : str_hour = hourVar;

    let current_str = str_hour+":"+str_min+":"+str_sec;
    console.log(current_str);
    app_data_string += current_str + "<br>";

    data_box.innerHTML = app_data_string;
}

function clearLaps() {
    app_data_string = "";
    data_box.innerHTML = "";
}