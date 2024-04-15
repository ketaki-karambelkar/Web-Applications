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
    
    hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
    date.innerHTML = currentTime.getDate();
    year.innerHTML = currentTime.getFullYear();
    day.innerHTML = currentTime.toLocaleString("default", {weekday: "long"})+" ,";
    month.innerHTML = currentTime.toLocaleString("default", {month: "long"});

    if(currentTime.getHours() >= 12){
        period.innerHTML= 'PM';
        hrs.innerHTML = ((currentTime.getHours()-12)===12?"12":((currentTime.getHours()-12)<10?"0":"")+(currentTime.getHours()-12));
    }
}, 1000)




