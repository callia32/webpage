let startbtn = document.querySelector('#start');
let resetbtn = document.querySelector('#reset');
let timeElpased = 0;

let stopwatchFunction = function(){
    timeElpased += 1;    
    let minute = Math.floor(timeElpased / 60);
    let second = timeElpased % 60;
    
    if (minute < 10) minute = '0' + minute;
    if (second < 10) second = '0' + second;
    
    let timenow = minute + ':' + second;
    
    let timeshown = document.querySelector('#w_stopwatch h1');
    timeshown.textContent = timenow;
}

var a;
startbtn.onclick = function(){
    let curState = document.querySelector('#start').textContent;
    if(curState === 'start'){
        document.querySelector('#start').textContent = 'stop';
        a = setInterval(stopwatchFunction,1000);
    } else {
        document.querySelector('#start').textContent = 'start';
        clearInterval(a);
    }
}

resetbtn.onclick = function(){
    timeElpased = 0;
    let timeshown = document.querySelector('#w_stopwatch h1');
    timeshown.textContent = '00:00';
}