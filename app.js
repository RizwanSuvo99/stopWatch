const seconds = document.getElementById("stopwatch-sec");
const miliSeconds = document.getElementById("stopwatch-ms");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn3");

let i = 0;
let j = 0;
const target = 100;

function MiliSeconds() {
  i++;
  miliSeconds.innerHTML = i < 10 ? "0" + i : `${i}`;
  if (i == target) {
    i = 0;
  }
}

function Seconds() {
    j++;
    seconds.innerHTML = j < 10 ? "0" + j : `${j}`;
}

startBtn.addEventListener("click", () => {
  let interval = setInterval(MiliSeconds, 10);
  let interval2 = setInterval(Seconds, 1000);
  stopBtn.addEventListener("click", () => {
    clearInterval(interval);
    clearInterval(interval2);
  });
  resetBtn.addEventListener("click",function (){
    clearInterval(interval);
    clearInterval(interval2);
    miliSeconds.innerText = "00";
    seconds.innerText = "00";
  })
});
