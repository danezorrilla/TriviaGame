// Global Variables

var questions = [
    {q: 'What is the largest freshwater lake in the world?',
    o:['Baikal', 'Superior', 'Tanganyika', 'Victoria'],
    a: 'Baikal'},
    {q: 'Invented in Holyoke, Massachusetts, in 1895, by YMCA phys-ed director William Morgan, which game was originally called Mintonette?',
    o:['Football', 'Hockey', 'Table Tennis', 'Vollyball'],
    a:'Vollyball'},
    {q: 'Which Nobel Prize winner once wrote lyrics for French pop star Françoise Hardy, contributing to the songs ‘Etonnez moi, Benoit’ and ‘San Salvador’?',
    o:['Louis de Broglie', 'Irene Joliot-Curie', 'Leon Jouhaux', 'Patrick Modiano'],
    a: 'Patrick Modiano'},
    {q: 'What is the tallest mountain in South America?',
    o: ['Aconcagua', 'Alpamayo', 'Cotopaxi', 'Illimani'],
    a: 'Aconcagua'},
    {q: 'Who is the only former heavyweight boxing champ to be buried in Arlington National Cemetery?',
    o:['Muhammad Ali', 'Joe Frazier', 'Joe Louis', 'Rocky Marciano'],
    a: 'Joe Louis'},
    {q: "The world's fastest growing plant is a species of what?",
    o: ['Aloe', 'Bamboo', 'Nepenthes', 'Utricularia'],
    a: 'Bamboo'}
];

// set our count to 60
var count = 60;

// holds the amount of user's answer correctly
var Correct_Answered = 0;

// holds the amount of question
var Number_Of_Question = 6;

// variable to hold the setInterval when the game starts
var timer;

// display the questions on the screeen
for(var i = 0; i < questions.length; i++){
    // create a variable that will hold a <div> tag
    var questionDiv = $('<div>');
    questionDiv.text(questions[i].q);
    // appends the questions to the div game id tag
    $('#game').append(questionDiv);
    // display the options on the screen beneath its associated question
    for(var j = 0; j < questions[i].o.length; j++){
        // create a variable tha will hold a <div> tag
        var optionDiv = $('<div>');
        // create a varible that will hold a <input> tag
        var Input_Opt = $('<input>');
        // store a class attribute and set it equal to  its corresponding question
        Input_Opt.attr('class', 'option-' +i);
        // store a name attribute
        Input_Opt.attr('name', 'option-' + i);
        // sets the type to a radio
        Input_Opt.attr('type', 'radio');
        // sets the value to its option value
        Input_Opt.attr('value', questions[i].o[j]);
        // writes the options on the div
        optionDiv.text(questions[i].o[j]);
        // prepends the input tags to the option div
        optionDiv.prepend(Input_Opt);
        // appends the option div to the question div
        questionDiv.append(optionDiv)
    }
}

// Function

// counts down the timer
function countDown(){
    // jquery to display the remaining time
    $('#clock').text(count);
    // use timer to hold setTimeout to run every second
    timer = setTimeout(countDown,1000);
    // decrement
    count --
    console.log(count);
    // if the timer reaches 0
    if(count < 0){
        // stops the time
        clearInterval(timer);
        // checks all of the answer
        checkAnswer();
        // show the user their results
        gameResult();
        // restarts the game
        startGame();
    }
    
}

// starts the game, resets
function startGame(){
    count = 60;
    $('#clock').text(count);

    Correct_Answered = 0;

    // unchecks all of the radio buttons
    $('input').prop('checked', false);

    countDown();
}

// checks if the users answers matches the defined answers
function checkAnswer(){
    for(var i = 0; i < questions.length; i++){
        var userAnswer = $('.option-' + i +':checked').val();
        console.log(userAnswer)
        if(userAnswer == questions[i].a){
            Correct_Answered++;
        }
    }
}

// shows the users their results
function gameResult(){
    alert("You've answered " + Correct_Answered + " out of " + Number_Of_Question + " questions, correctly");
}

startGame();

// jquery on click event function which will run when the button is clicked
$('button').on('click', function(){

    checkAnswer();

    gameResult();

    startGame();

    // stops the timer
    clearInterval(timer);

});