let time = 0;
let interval;
let display = document.querySelector("#display");
let altBtns = document.querySelector("#alt-btns");
let resetBtn = document.querySelector("#reset");
let HH;
let MM;
let SS;

function startWatch() {
  alert("Watch has Started !");
  altBtns.innerText = "Stop";
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => {
    time += 1;
    HH = Math.floor(time / 3600).toString().padStart(2, "0")
    MM = Math.floor((time % 3600) / 60).toString().padStart(2, "0")
    SS = Math.floor(time % 60).toString().padStart(2, "0")

    display.innerText = `${HH} : ${MM} : ${SS}`;
  }, 1000);
}

function stopWatch() {
  altBtns.innerText = "Start";
  clearInterval(interval);
  interval = null;
  alert("Watch has Stopped !");
}

function resetWatch() {
  altBtns.innerText = "Start";
  clearInterval(interval);
  interval = null;
  time = 0;
  display.innerText = "00 : 00 : 00";
}

altBtns.addEventListener ('click', () => {
  if (interval) {
    stopWatch();
  } else {
    startWatch();
  }
});

resetBtn.addEventListener ('click', () => {
  resetWatch();
});