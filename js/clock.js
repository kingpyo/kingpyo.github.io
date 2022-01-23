const clock = document.querySelector("#clock");
const thisDate = document.querySelector("#thisDate")

function getClock() {
    const date = new Date()
    const hours = String(date.getHours()).padStart(2, "0")
    const minutes = String(date.getMinutes()).padStart(2, "0")
    const seconds = String(date.getSeconds()).padStart(2, "0")
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function getWeek(days) {
    const week = ["일", "월", "화", "수", "목", "금", "토"];
    return week[days];
}

const now = new Date();
const months = (now.getMonth() + 1) ;
const dates = now.getDate();
const days = now.getDay();
const weeks = getWeek(days);

thisDate.innerText = `${months}월 ${dates}일 ${weeks}요일`;

getClock();
setInterval(getClock, 1000);