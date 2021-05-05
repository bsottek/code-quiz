var timerEl = document.getElementById('timer');
var mainEl = document.getElementById('game');
var startBtn = document.getElementById('start');
var iterator = 0;
var score = 0;
var answer = "";
var timeLeft = 60;

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

//timer in header
var countdown = function() {
    quiz();
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        document.getElementById('timer').innerHTML = '00:' + timeLeft;
        timerEl.textContent = `${timeLeft} seconds remaining`;
        timeLeft--;
        if (timeLeft < 0 || iterator == questionsArray.length) {
            clearInterval(timeInterval);
            endGame();
        }
    }, 1000);
}


var quiz = function(){
    questionServer();

}

var questionServer = function(){
    //replace sub-text with question text
    document.getElementById("sub-text").textContent = questionsArray[iterator].question;
    //hide start button
    document.getElementById("start").style.visibility = "hidden";

    //clear old info
    if(document.getElementById('buttons')){
        var el = document.getElementById('buttons');
        el.parentNode.removeChild(el);
    };

    // assign element vars and create button div
    var interface = document.getElementById("interface");
    let btnDiv = document.createElement("div");
    btnDiv.id = "buttons";
    interface.appendChild(btnDiv);

    //create buttons, fill with answers, append to button div, listen for click, run answer handler
    let btn1 = document.createElement("button");
    btn1.textContent = questionsArray[iterator].a1;
    btn1.id = "answer-button-1";
    btn1.className = "answer-button";
    btnDiv.appendChild(btn1);
    let btn1El = document.querySelector('#answer-button-1')
    btn1El.addEventListener('click', function () {
        answer = this.textContent;
        answerHandler();
    });

    let btn2 = document.createElement("button");
    btn2.textContent = questionsArray[iterator].a2;
    btn2.id = "answer-button-2";
    btn2.className = "answer-button";
    btnDiv.appendChild(btn2);
    let btn2El = document.querySelector('#answer-button-2')
    btn2El.addEventListener('click', function () {
        answer = this.textContent;
        answerHandler();
    });

    let btn3 = document.createElement("button");
    btn3.textContent = questionsArray[iterator].a3;
    btn3.id = "answer-button-3";
    btn3.className = "answer-button";
    btnDiv.appendChild(btn3);
    let btn3El = document.querySelector('#answer-button-3')
    btn3El.addEventListener('click', function () {
        answer = this.textContent;
        answerHandler();
    });

    let btn4 = document.createElement("button");
    btn4.textContent = questionsArray[iterator].a4;
    btn4.id = "answer-button-4";
    btn4.className = "answer-button";
    btnDiv.appendChild(btn4);
    let btn4El = document.querySelector('#answer-button-4')
    btn4El.addEventListener('click', function () {
        answer = this.textContent;
        answerHandler();
    });
}

var answerHandler = function(){
    document.getElementById('answers-title').style.visibility = 'visible';
    if (answer === questionsArray[iterator].correct) {
        score += 20;
        console.log(score);
        answerEl = document.createElement('li');
        answerEl.className = 'answerEl'
        answerEl.textContent = 'Correct';
        document.getElementById('answer-list').appendChild(answerEl);
    } else {
        timeLeft -= 10;
        console.log(score);
        answerEl = document.createElement('li');
        answerEl.className = 'answerEl'
        answerEl.textContent = 'Incorrect';
        document.getElementById('answer-list').appendChild(answerEl);
    };

    iterator++;
    console.log("iterator = " + iterator);

    if (iterator < questionsArray.length+1){
        questionServer();
    }else{
        endGame;
    }
}

var iterationHandler = function(){
    if (iterator < questionsArray.length & timeLeft > 0) {
        iterator++;
        questionServer();
    } else {
        endGame();
    }
}

var endGame = function() {
    score = score + timeLeft;
    console.log(score);
    document.getElementById("timer").style.visibility = "hidden";
    document.getElementById("sub-text").textContent = "That's it! The quiz is over and here's your score:"

    //clear buttons and answers
    if (document.getElementById('buttons')) {
        var el = document.getElementById('buttons');
        el.parentNode.removeChild(el);
    };

    //print score to screen
    scoreDiv = document.createElement('div');
    scoreDiv.id = "score";
    scoreDiv.className = 'box';
    interface.appendChild(scoreDiv);
    scoreEl = document.createElement("h2");
    scoreEl.id = "score";
    scoreEl.textContent = score;
    scoreDiv.appendChild(scoreEl);

    //compare to high score
    scoreMsg = document.createElement('p');
    scoreMsg.id = 'score-message';
    scoreDiv.appendChild(scoreMsg);

    var highScore = localStorage.getItem('highScore');

    if(!highScore || highScore < score){
        scoreMsg.textContent = "Congratulations! You hold the new high score!";
        localStorage.setItem('highScore', score);
    }else{
        scoreMsg.textContent = "You did not beat the high score of " + highScore;
    }

    saveBtnEl = document.createElement('button');
    saveBtnEl.id = 'save';
    saveBtnEl.textContent = 'Save Score?'
    saveBtnEl.setAttribute('onClick','leaderboard(score)');
    scoreDiv.appendChild(saveBtnEl);
    // saveBtnEl.addEventListener('click',leaderboard(score));

    restartBtnEl = document.createElement('button');
    restartBtnEl.id = 'restart';
    restartBtnEl.textContent = 'Restart';
    restartBtnEl.setAttribute('onClick','window.location.reload()');
    scoreDiv.appendChild(restartBtnEl);

}


var leaderboard = function(score) {

    let subTextEl = document.getElementById('sub-text');
    subTextEl.parentNode.removeChild(subTextEl);
    let scoreEl = document.getElementById('score');
    scoreEl.parentNode.removeChild(scoreEl);
    let answerEl = document.getElementById('answer-container');
    answerEl.parentNode.removeChild(answerEl);

    //store user score and initials
    scoreBoardEl = document.createElement('div');
    scoreBoardEl.className = 'box'
    scoreBoardEl.id = 'score-board-div';
    game.appendChild(scoreBoardEl);

    //create and append form with input and label
    formEl = document.createElement('form');
    scoreBoardEl.appendChild(formEl);

    labelEl = document.createElement('label');
    labelEl.setAttribute('for', 'initials');
    labelEl.innerHTML = 'Enter initials:';
    formEl.appendChild(labelEl);

    inputEl = document.createElement('input');
    inputEl.id = 'input';
    inputEl.setAttribute('type', 'text');
    formEl.appendChild(inputEl);

    submitEl = document.createElement('input');
    submitEl.id = 'submit';
    submitEl.setAttribute('type', 'submit');
    submitEl.setAttribute('value', 'Submit');
    formEl.appendChild(submitEl);

    //create table for score standings
    listEl = document.createElement('table');
    listEl.id = 'leaderboard';
    scoreBoardEl.appendChild(listEl);

    listHeaderEl = document.createElement('tr');
    listHeaderEl.id = 'table-header';
    listEl.appendChild(listHeaderEl);

    initialsHeaderEl = document.createElement('th');
    initialsHeaderEl.textContent = 'User';
    listHeaderEl.appendChild(initialsHeaderEl);

    scoreHeaderEl = document.createElement('th');
    scoreHeaderEl.textContent = 'Score';
    listHeaderEl.appendChild(scoreHeaderEl);

    loadScores();

    submitEl.addEventListener('click', function(event){
        event.preventDefault();

        var initial = document.querySelector('#input').value;

        if (initial === ''){
            alert( "Everyone's got initials. Please enter yours.");
        }else{
            //need to change this portion to save as object in score array
            if(scoreArray){
                scoreArray[scoreArray.length] = {
                    initials: initial,
                    score: score,
                    id: scoreArray.length + 1
                }
                localStorage.setItem('scores', JSON.stringify(scoreArray));

                document.getElementById("start").style.visibility = "visible";
                document.getElementById("start").textContent = "Restart";
                document.getElementById("start").setAttribute('onClick', 'window.location.reload()');
            }else{
                scoreArray[0] = {
                    initials: initial,
                    score: score,
                    id: 1
                }
                localStorage.setItem('scores', JSON.stringify(scoreArray));

                document.getElementById("start").style.visibility = "visible";
                document.getElementById("start").textContent = "Restart";
                document.getElementById("start").setAttribute('onClick', 'window.location.reload()');
            }
        }
    })


}

var loadScores = function(){
    //get leaderboard array from localstorage
    scoreArray = localStorage.getItem('scores');

    //check if null (no scores saved)
    if (!scoreArray) {
        scoreArray = [];
        return (false);
    };

    //parse into object array
    scoreArray = JSON.parse(scoreArray);
    scoreArray = scoreArray.sort((a, b) => b.score - a.score);

    //print score objects to table
    for (var i=0; i<scoreArray.length; i++){
        var tableRowEl = document.createElement('tr');
        tableRowEl.id = 'table-row-'+i;
        listEl.appendChild(tableRowEl);

        var tableUserEl = document.createElement('th');
        tableUserEl.className = 'table-entry';
        tableUserEl.textContent = scoreArray[i].initials;
        tableRowEl.appendChild(tableUserEl);

        var tableScoreEl = document.createElement('th');
        tableScoreEl.className = 'table-entry';
        tableScoreEl.textContent = scoreArray[i].score;
        tableRowEl.appendChild(tableScoreEl);
    }
}

startBtn.onclick = countdown;