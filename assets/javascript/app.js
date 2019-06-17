var questionsArr = [

    {
        question: 'What have I got in my pocket?',

        answers: {
            a: 'Elf Bread',

            b: 'A Pen',

            c: 'The Ring',
        },
        correctAnswer: 'c'
    },

    {
        question: 'What has roots as nobody sees, Is taller than trees, Up, up it goes, And yet never grows?',

        answers: {
            a: 'The Sky',

            b: 'A Mountain',

            c: 'A Skyscraper',
        },
        correctAnswer: 'b'
    },

    {
        question: 'Thirty white horses on a red hill, First they champ, Then they stamp, Then they stand still?',

        answers: {
            a: 'A Calvary Charge',

            b: 'Teeth',

            c: 'Bones',
        },
        correctAnswer: 'b'
    },

    {
        question: 'Voiceless it cries, Wingless flutters, Toothless bites, Mouthless mutters?',

        answers: {
            a: 'The Wind',

            b: 'A Ghost',

            c: 'An Echo',
        },
        correctAnswer: 'a'
    },

    {
        question: 'An eye in a blue face Saw an eye in a green face. "That eye is like to this eye" Said the first eye, "But in low place, Not in high place."?',

        answers: {
            a: 'A Cyclops',

            b: 'The Earth',

            c: 'The Sun Shining on a Daisy',
        },
        correctAnswer: 'c'
    },

    {
        question: 'It cannot be seen, cannot be felt, Cannot be heard, cannot be smelt. It lies behind stars and under hills, And empty holes it fills. It comes first and follows after, Ends life, kills laughter?',

        answers: {
            a: 'Gas',

            b: 'Darkness',

            c: 'Time',
        },
        correctAnswer: 'b'
    },

    {
        question: 'A box without hinges, key, or lid, Yet golden treasure inside is hid?',

        answers: {
            a: 'An Egg',

            b: 'A Heart with Love',

            c: 'A Person',
        },
        correctAnswer: 'a'
    },

    {
        question: 'Alive without breath, as cold as death, never thirsty, ever drinking, all in mail never clinking?',

        answers: {
            a: 'A Suit of Armor',

            b: 'A Zombie',

            c: 'A Fish',
        },
        correctAnswer: 'c'
    },

    {
        question: 'No-legs lay on one-leg, two legs sat near on three legs, four legs got some?',

        answers: {
            a: 'Fish on a Table, Man on a Stool, Cat gets the scraps',

            b: 'Baby on a Table, Toddler on a lap, Old Man on a Walker',

            c: 'Sack of Seed on a Table, Kid on a Tricycle, Bird in a Cage on a Table',
        },
        correctAnswer: 'a'
    },

    {
        question: 'This thing all things devours: birds, beasts, trees, flowers; gnaws iron, bites steel; grinds hard stones to meal; slays king, ruins town, and beats high mountain down?',

        answers: {
            a: 'Time',

            b: 'Fire',

            c: 'Wind',
        },
        correctAnswer: 'a'
    },

];
var questionGenerator = [];
var score = 0;

quizStart()

function quizStart() {


    var answers = [];

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

        $("#questions").append(quesMaker);
        console.log(questionGenerator[i].question)
    }


}











