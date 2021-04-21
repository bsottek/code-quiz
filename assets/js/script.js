var timerEl = document.getElementById('timer');
var mainEl = document.getElementById('heading');
var startBtn = document.getElementById('start');

//timer in header
function countdown(){
    var timeLeft = 60;

    //call function to be executed every 1000 ms
    var timeInterval = setInterval(function() {
        document.getElementById('timer').innerHTML ='00:' + timeLeft;
        timerEl.textContent = `${timeLeft} seconds remaining`;
        timeLeft --;
        if (timeLeft < 0){
            clearInterval(timeInterval);
            displayScore();
        }
    },1000);
}


startBtn.onclick = countdown;