var questionsArr = [

    {
        question: 'What have I got in my pocket?',

        answers: [
            'Elf Bread',

            'A Pen',

            'The Ring',
        ],
        correctAnswer: 'c'
    },

    {
        question: 'What has roots as nobody sees, Is taller than trees, Up, up it goes, And yet never grows?',

        answers: [
            'The Sky',

            'A Mountain',

            'A Skyscraper',
        ],
        correctAnswer: 'b'
    },

    {
        question: 'Thirty white horses on a red hill, First they champ, Then they stamp, Then they stand still?',

        answers: [
            'A Calvary Charge',

            'Teeth',

            'Bones',
        ],
        correctAnswer: 'b'
    },

    {
        question: 'Voiceless it cries, Wingless flutters, Toothless bites, Mouthless mutters?',

        answers: [
            'The Wind',

            'A Ghost',

            'An Echo',
        ],
        correctAnswer: 'a'
    },

    {
        question: 'An eye in a blue face Saw an eye in a green face. "That eye is like to this eye" Said the first eye, "But in low place, Not in high place."?',

        answers: [
            'A Cyclops',

            'The Earth',

            'The Sun Shining on a Daisy',
        ],
        correctAnswer: 'c'
    },

    {
        question: 'It cannot be seen, cannot be felt, Cannot be heard, cannot be smelt. It lies behind stars and under hills, And empty holes it fills. It comes first and follows after, Ends life, kills laughter?',

        answers: [
            'Gas',

            'Darkness',

            'Time',
        ],
        correctAnswer: 'b'
    },

    {
        question: 'A box without hinges, key, or lid, Yet golden treasure inside is hid?',

        answers: [
            'An Egg',

            'A Heart with Love',

            'A Person',
        ],
        correctAnswer: 'a'
    },

    {
        question: 'Alive without breath, as cold as death, never thirsty, ever drinking, all in mail never clinking?',

        answers: [
            'A Suit of Armor',

            'A Zombie',

            'A Fish',
        ],
        correctAnswer: 'c'
    },

    {
        question: 'No-legs lay on one-leg, two legs sat near on three legs, four legs got some?',

        answers: [
            'Fish on a Table, Man on a Stool, Cat gets the scraps',

            'Baby on a Table, Toddler on a lap, Old Man on a Walker',

            'Sack of Seed on a Table, Kid on a Tricycle, Bird in a Cage on a Table',
        ],
        correctAnswer: 'a'
    },

    {
        question: 'This thing all things devours: birds, beasts, trees, flowers; gnaws iron, bites steel; grinds hard stones to meal; slays king, ruins town, and beats high mountain down?',

        answers: [
            'Time',

            'Fire',

            'Wind',
        ],
        correctAnswer: 'a'
    },

];
var questionGenerator = [];
var answers = [];
var score = 0;

var clockRunning = false;
var time = 60;

$('#submit').hide();
$('#restart').hide();

function quizStart() {

    $('#questions').show();
    $('#questions').empty();
    $('#quiz').show();
    timerReset();
    questionGenerator = [];
    
    // Picks 5 questions out of 9 and logs them to a var to hold for further use
    while (questionGenerator.length < 5) {

        var num = Math.floor(Math.random() * (questionsArr.length - 1) + 1);

        if (jQuery.inArray(questionsArr[num], questionGenerator) === -1) {
            questionGenerator.push(questionsArr[num])
        };
    }

    // Puts the last question into the array 
    questionGenerator.push(questionsArr[0]);
    console.log(questionGenerator);


    // Prints the question to the HTML
    for (var i = 0; i < questionGenerator.length; i++) {
        
        var k = i + 1;
        
        var quesMaker = $('<div class = "quiz"> ');
        var ques = $('<p>').text('Question ' + k + ': ' + questionGenerator[i].question);
        quesMaker.append(ques);

        var list = $('<ol type="a">')
        
        // Prints answers in a list with 
        for(var j = 0; j < 3; j++){
                
            var li = $('<li id="quiz" name="quiz">');
            var label = $('<label>');
            var input = $('<input type="radio">').attr({'id': 'gues' + i + '-' + j, 'name': 'gues' + i, 'value': j});

            label.text(questionGenerator[i].answers[j])

            label.prepend(input);

            li.append(label);

            list.append(li);
        }
        
        $(quesMaker).append(list);
       

        $("#questions").append(quesMaker);
        console.log(questionGenerator[i].question)
    }


}

$('#start').on('click', function(){
    $('#start').hide();
    $('#submit').show();
    quizStart();
});

$('#submit').on('click', function(){
    $('#submit').hide();
    $('#questions').hide();
    $('#timer').hide();
    $('#restart').show();
    
    for(var i=0; i<questionGenerator.length; i++){
        var userAnswer = $('input[name=gues'+i+']:checked').val();
        console.log(userAnswer);
        
    if(userAnswer === 0 && questionGenerator[i].correctAnswer === 'a' || userAnswer === 1 && questionGenerator[i].correctAnswer === 'b' || userAnswer===2 && questionGenerator[i].correctAnswer === 'c'){
            score++
        }
        console.log(questionGenerator[i].correctAnswer)
        console.log(score);
    } 

});

$('#restart').on('click', function(){
    $('#start').show();
    $('#restart').hide();

});



// Timer functions below
function timerReset(){
    $('#timer').text("01:00");
    $('#timer').show();
    start();

function start() {
   time = 60;
    if (!clockRunning) {
      intervalId = setInterval(count, 1000);
      clockRunning = true;
    }
  }

function count() {

    
    time--;

    var converted = timeConverter(time);
    //console.log(converted);

    if(time===0){
        clearInterval(intervalId);
        clockRunning = false;
        $('#questions').hide();
        $('#timer').hide();
    }
  
    
    $("#timer").text(converted);
  }

function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    return minutes + ":" + seconds;
  }
}






