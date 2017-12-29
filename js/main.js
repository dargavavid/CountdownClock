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