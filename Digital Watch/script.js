let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let period = document.getElementById("am-pm");

let month = document.getElementById("month");
let day = document.getElementById("day");
let date = document.getElementById("date");
let year = document.getElementById("year");

setInterval(() => {
    let currentTime = new Date();
    let amPm = currentTime.getHours()>=12?'PM':'AM';
    let cTimeHours = currentTime.getHours()%12;
    cTimeHours = (cTimeHours===0?12:cTimeHours);
    
    hrs.innerHTML = (cTimeHours<10?"0":"") + cTimeHours;
    min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
    period.innerHTML= amPm;
    date.innerHTML = currentTime.getDate();
    year.innerHTML = currentTime.getFullYear();
    day.innerHTML = currentTime.toLocaleString("default", {weekday: "long"})+" ,";
    month.innerHTML = currentTime.toLocaleString("default", {month: "long"});
}, 1000)
