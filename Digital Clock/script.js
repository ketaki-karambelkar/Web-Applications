let hrDots = document.getElementById('hrDots');
let minDots = document.getElementById('minDots');
let secDots = document.getElementById('secDots');

function clock(){
    var currentTime = new Date();
    var hours = currentTime.getHours() % 12;
    hours = (hours===0?12:hours);
    var amPm = currentTime.getHours()>=12?'PM':'AM';
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var hoursDots = '';
    for(var i = 1; i < 13; i++){
        var rotation = i*30;
        if(i===hours){
            hoursDots += '<div class="dot active" style="transform: rotate('+rotation+'deg)"></div>';
        }
        else{
            hoursDots += '<div class="dot" style="transform: rotate('+rotation+'deg)"></div>';
        }
    }

    var minutesDots = '';
    for(var i = 1; i < 61; i++){
        var rotation = i*6;
        if(i===minutes){
            minutesDots += '<div class="dot active" style="transform: rotate('+rotation+'deg)"></div>';
        }
        else{
            minutesDots += '<div class="dot" style="transform: rotate('+rotation+'deg)"></div>';
        }
    }

    var secondsDots = '';
    for(var i = 1; i < 61; i++){
        var rotation = i*6;
        if(i===seconds){
            secondsDots += '<div class="dot active" style="transform: rotate('+ rotation +'deg)"></div>';
        }
        else{
            secondsDots += '<div class="dot" style="transform: rotate('+rotation+'deg)"></div>';
        }
    }

    hrDots.innerHTML = hoursDots + '<h2>' + zero(hours) + '<br><span>Hours</span></h2>';
    minDots.innerHTML = minutesDots + '<h2>' + zero(minutes) + '<br><span>Minutes</span></h2>';
    secDots.innerHTML = secondsDots + '<b>' + amPm + '</b>' + '<h2>' + zero(seconds) + '<br><span>Seconds</span></h2>';

}

setInterval(clock,1000);

function zero(number){
    if(number < 10){
        return '0' + number;
    }
    return number;
}
