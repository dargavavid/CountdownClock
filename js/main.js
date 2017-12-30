const clockDiv = document.querySelector(".clock");
const daysDiv = clockDiv.querySelector(".days");
const hoursDiv = clockDiv.querySelector(".hours");
const minutesDiv = clockDiv.querySelector(".minutes");
const secondsDiv = clockDiv.querySelector(".seconds");

function setCountdownStart() {
    const now = Date.now();
    window.localStorage.setItem("countdown-start", now);
}

function getCountdownStart() {
    return parseInt(window.localStorage.getItem("countdown-start"));
}

function setCountdownInterval(interval) {
    window.localStorage.setItem("countdown-interval", interval);
}

function getCountdownInterval() {
    return parseInt(window.localStorage.getItem("countdown-interval"));
}

function formatTime(num) {
    return num > 9 ? "" + num : num > 0 ? "0" + num : "00";
}

function updateClock(start, interval) {
    const now = Date.now();
    const remaining = interval - (now - start);

    const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(remaining / (1000 * 60 * 60)) % 24;
    const minutes = Math.floor(remaining / (1000 * 60)) % 60;
    const seconds = Math.floor(remaining / 1000) % 60;

    daysDiv.innerText = formatTime(days);
    hoursDiv.innerText = formatTime(hours);
    minutesDiv.innerText = formatTime(minutes);
    secondsDiv.innerText = formatTime(seconds);
}

function initClock() {
    setInterval(function () {
        let countdownStart = getCountdownStart(), countdownInterval = getCountdownInterval();
        updateClock(countdownStart, 10000000);
    }, 1000);
}
