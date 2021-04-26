var timerEl = document.getElementById('timer');
var mainEl = document.getElementById('heading');
var startBtn = document.getElementById('start');

var questions = [
    {
        question: 'What command should be entered into terminal to create a new git branch?',
        a1: 'git push',
        a2: 'git checkout -b "branchname"',
        a3: 'git ignore',
        a4: 'git is cool',
        correct: this.a2
    },
    {
        question: 'What language is used to style the elements on a page?',
        a1: 'JavaScript',
        a2: 'Node.js',
        a3: 'CSS',
        a4: 'HTML',
        correct: this.a3
    },
    {
        question: 'What is the correct syntax for initializing a JavaScript variable?',
        a1: 'var <varname> = <value>',
        a2: 'function <varname>() {<value>}',
        a3: 'for(var <varname> = <value>)',
        a4: 'What is a variable?',
        correct: this.a1
    },
    {
        question: 'What do you call the practice of outlining a function in common termed comments before writing functioning code?',
        a1: 'Bad Coding',
        a2: 'Outlining',
        a3: 'Psudocoding',
        a4: 'Pointless',
        correct: this.a3
    },
]

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