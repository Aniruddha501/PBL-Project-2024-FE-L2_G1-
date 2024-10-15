var timersCount = 1;

function addTimer() 
{
    var timerDiv = document.createElement("div");
    timerDiv.id = "timer" + timersCount;

    var timerHeading = document.createElement("h2");
    timerHeading.textContent = "Timer " + timersCount;
    timerDiv.appendChild(timerHeading);

    var inputLabel = document.createElement("lable");
    inputLabel.textContent = "Set timer duration (HH:MM:SS): ";
    var inputHours = document.createElement("input");
    inputHours.type = "number";
    inputHours.min = "0";
    inputHours.max = "23";
    inputHours.value = "0";
    var inputMinutes = document.createElement("input");
    inputMinutes.type = "number";
    inputMinutes.min = "0";
    inputMinutes.max = "59";
    inputMinutes.value = "0";
    var inputSeconds = document.createElement("input");
    inputSeconds.type = "number";
    inputSeconds.min = "0";
    inputSeconds.max = "59";
    inputSeconds.value = "0";
    var startButton = document.createElement("button");
    startButton.textContent = "Start";
    var stopButton = document.createElement("button");
    stopButton.textContent = "Stop";

    let intervalId;

    startButton.addEventListener("click", function() {
        var hours = parseInt(inputHours.value, 10);
        var minutes = parseInt(inputMinutes.value, 10);
        var seconds = parseInt(inputSeconds.value, 10);
        var totalSeconds = hours * 3600 + minutes * 60 + seconds;
        if (totalSeconds > 0) {
            intervalId = startTimer(timerDiv.id, totalSeconds);
        } else {
            alert("Please enter a valid duration for the timer input .");
        }
    });

    stopButton.addEventListener("click", function() {
        clearInterval(intervalId);
    });

    timerDiv.appendChild(inputLabel);
    timerDiv.appendChild(inputHours);
    timerDiv.appendChild(document.createTextNode(":"));
    timerDiv.appendChild(inputMinutes);
    timerDiv.appendChild(document.createTextNode(":"));
    timerDiv.appendChild(inputSeconds);
    timerDiv.appendChild(startButton);
    timerDiv.appendChild(stopButton);

    document.getElementById("timer_container").appendChild(timerDiv);
    
    timersCount++;
}

function startTimer(timerId, duration) 
{
    var timerElement = document.getElementById(timerId);
    var startTime = Date.now();
    
    function updateTimer() {
        var currentTime = Date.now();
        var elapsedTime = Math.floor((currentTime - startTime) / 1000);
        var remainingTime = duration - elapsedTime;
        
        if (remainingTime <= 0) {
            clearInterval(intervalId);
            timerElement.textContent = "Time's up !!! ";
        }
        else
	    {
            var hours = Math.floor(remainingTime / 3600);
            var minutes = Math.floor((remainingTime % 3600) / 60);
            var seconds = remainingTime % 60;
            timerElement.textContent = `Time Remaining: ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
    }
    
    updateTimer();
    var intervalId = setInterval(updateTimer, 1000);
    return intervalId;
}

window.onload = function(){
    for (let i = 0; i < 5; i++) {
        addTimer();
    }
};