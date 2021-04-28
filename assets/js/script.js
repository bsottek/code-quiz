var timerEl = document.getElementById('timer');
var mainEl = document.getElementById('heading');
var startBtn = document.getElementById('start');

var questionsArray = [
    {
        question: 'What command should be entered into terminal to create a new git branch?',
        a1: 'git push',
        a2: 'git checkout -b "branchname"',
        a3: 'git ignore',
        a4: 'git is cool',
        correct: 'git checkout -b "branchname"'
    },
    {
        question: 'What language is used to style the elements on a page?',
        a1: 'JavaScript',
        a2: 'Node.js',
        a3: 'CSS',
        a4: 'HTML',
        correct: 'CSS'
    },
    {
        question: 'What is the correct syntax for initializing a JavaScript variable?',
        a1: 'var <varname> = <value>',
        a2: 'function <varname>() {<value>}',
        a3: 'for(var <varname> = <value>)',
        a4: 'What is a variable?',
        correct: 'var <varname> = <value>'
    },
    {
        question: 'What do you call the practice of outlining a function in common termed comments before writing functioning code?',
        a1: 'Bad Coding',
        a2: 'Outlining',
        a3: 'Psudocoding',
        a4: 'Pointless',
        correct: 'Psudocoding'
    },
];

var score = 0;

//timer in header
var countdown = function() {
    var timeLeft = 60;
    questions();
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        document.getElementById('timer').innerHTML = '00:' + timeLeft;
        timerEl.textContent = `${timeLeft} seconds remaining`;
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(timeInterval);
        }
    }, 1000);
}


var questions = function(){
        var i = 0;
        var answer = "";
        //replace sub-text with question text
        document.getElementById("sub-text").textContent = questionsArray[i].question;
        //hide start button
        document.getElementById("start").style.visibility = "hidden";

        //create, fill, and append answers
        var heading = document.getElementById("heading");

        let btn1 = document.createElement("button");
        btn1.textContent = questionsArray[i].a1;
        btn1.id = "answer-button-1";
        heading.appendChild(btn1);
        let btn1El = document.querySelector('#answer-button-1')
        btn1El.addEventListener('click',function(){
            answer = this.textContent;
            console.log(answer);
        });

        let btn2 = document.createElement("button");
        btn2.textContent = questionsArray[i].a2;
        btn2.id = "answer-button-2";
        heading.appendChild(btn2);
        let btn2El = document.querySelector('#answer-button-2')
        btn2El.addEventListener('click', function () {
            answer = this.textContent;
            console.log(answer);
        });

        let btn3 = document.createElement("button");
        btn3.textContent = questionsArray[i].a3;
        btn3.id = "answer-button-3";
        heading.appendChild(btn3);
        let btn3El = document.querySelector('#answer-button-3')
        btn3El.addEventListener('click', function () {
            answer = this.textContent;
            console.log(answer);
        });

        let btn4 = document.createElement("button");
        btn4.textContent = questionsArray[i].a4;
        btn4.id = "answer-button-4";
        heading.appendChild(btn4);
        let btn4El = document.querySelector('#answer-button-4')
        btn4El.addEventListener('click', function () {
            answer = this.textContent;
            console.log(answer);
        });


        // var answerBtn = document.querySelector('.answer-button');
        // answerBtn.addEventListener('click', function() {
        //     answer = this.textContent;
        //     console.log(answer);
        // })

}

startBtn.onclick = countdown;