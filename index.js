const startButton = document.getElementById('startButton');
const nextQuestionButton = document.getElementById('next');
const questionContainerElement = document.getElementById('question-container');
const submitElement = document.getElementById('submit');
const display = document.getElementById('question');

const question = [
    {
        question: "Which of the Following Character Dies First in The Ring",
        answers: [ 'Becca', 'Katie', 'Rachel', 'Ruth' ],
        correctAnswer: "b"
    },

    {
        question: "On the first Friday the 13th film, how many people does Jason murder?",
        answers: ['3', '5', '4', 'None'],
        correctAnswer: "d"
        
    },
       
    {
        question: "Which horror film`s tagline is “We dare you to say his name five times“?",
        answers: ['Slender Man', 'A Nightmare on Elm Street', 'The Ring', 'Candyman'],
        correctAnswer: "d"

    },

    {
        question: "What Is The Exorcist`s Demon`s Name?",
        answers: ['Aamon', 'Loki', 'Natsu', 'Pazuzu'],
        correctAnswer: "d"
    },
        

    {
        question: "What arms does Leatherface prefer?",
        answers: ['Chainsaw', 'Axe', 'Knives', 'Guns'],
        correctAnswer: "a"
    },
        

    {
        question: "What was Jason`s original name on Friday the 13th?",
        answers: ['Jeff', 'Damon', 'David', 'Josh'],
        correctAnswer: "d"
    },
        
    {
        question: "What TV series is based on a concept for an unproduced episode of The X-Files?",
        answers: ['Final Destination', 'Awake', 'Invasion', 'UFO'],
        correctAnswer: "a"
    },
        

    {
        question: "What horror film used the following tagline? “In space, no one can hear you scream.”",
        answers: ['The Cloverfield Paradx', 'Life', 'Alien', 'Color Out of Space'],
        correctAnswer: "c"
    },
        

    {
        question: "In which film did Annabelle the doll make her debut?",
        answers: ['Conjuring', 'Annabelle', 'Annabelle Come Home', 'The Nun'],
        correctAnswer: "a"
    },
        

    {
        question: "In the original A Nightmare on Elm Street, what is Nancy`s address?",
        answers: ['1321 Elm Street', '1288 Elm Street', '1428 Elm Street', '1531 Elm Street'],
        correctAnswer: "c"
    },
        

    {
        question: "What is the actual name of “Chucky” in Child`s Play?",
        answers: ['Charles Levi Ray', 'Charles Lee Ray', 'Charles Louis Ray', 'Charles Liam Ray'],
        correctAnswer: "b"
    },
        

    {
        question: "What heinous beast was the subject of 2007`s `Rogue`?",
        answers: ['Crocodile', 'Gorilla', 'Anaconda', 'Bear'],
        correctAnswer: "a"
    },
        

    {
        question: "What iconic horror film was dubbed The Babysitter Murders at one point?",
        answers: ['Rosemary`s Baby', 'Chid`s Play', 'Friday, The 13th', 'Halloween'],
        correctAnswer: "d"
    },
        

    {
        question: "In which horror film does the phrase “the power of Christ compels you.” appear?",
        answers: ['Drag me to Hell', 'The Exorcist', 'The Conjuring', 'The Nun'],
        correctAnswer: "b"
    },

    {
        question: "What was Jason`s original name on Friday the 13th?",
        answers: ['Jeremiah', 'Josh', 'Joe', 'Jeff'],
        correctAnswer: "b"
    },
        

    {
        question: "Which horror film franchise is the longest-running?",
        answers: ['Friday the 13th', 'I Know What You Did Last Summer', 'Halloween', 'Final Destination'],
        correctAnswer: "a"
    },
        

    {
        question: "What was the twentieth century`s first American horror film?",
        answers: ['Frankenstein', 'Horror of Dracula', 'Tarantula', 'Freaks'],
        correctAnswer: "a"
    },
        

    {
        question: "What color is Freddy Krueger's iconic sweater?",
        answers: ['Red and Green', 'Red and Black', 'Red and Yellow', 'Red and White'],
        correctAnswer: "b"
    },
        

    {
        question: "'The Texas Chainsaw Massacre' franchise encompasses how many different movies?",
        answers: ['3', '5', '7', '9'],
        correctAnswer: "d"
    },
        

    {
        question: " “Do you like scary movies?” is a quote made famous by which of the following films?",
        answers: ['Psycho', 'Scream', 'The Shining', 'Halloween'],
        correctAnswer: "b"
    },

]

let counter = 0;
let currentQuestion = question[counter];
// let response = 
// let score = 0

//-- To display question and option
function displayQuestion() {
    console.log(display)

    display.innerText = currentQuestion.question;
    console.log(optionContainer.children);
    for (let i = 0; i < optionContainer.children.length; i++) {
        optionContainer.children[i].children[1].textContent = question[counter].answers[i]
    }
} 
let optionContainer = document.getElementById('option-container');

//Activate Next button

let btn = document.getElementById('next');
btn.addEventListener('click', ()=>{
    counter++;
    currentQuestion = question[counter]
    // display.innerText = question[counter]
    console.log(currentQuestion.question)
    displayQuestion()
 })
//  question[0]
displayQuestion()

/// if (response == question.correctAnswer) { 
//     //     score ++
//     // }

// // -- reset options
// //optionContainer.children.checked = false

// // -- To get users answeers
// // let index = 0
// // let score = 0
// // function getanswer() {
// //     let ans = undefined;
    
// //     all_answer.forEach((el) => {
// //         if (el.checked) {
// //             ans = el.id
// //         }
// //     });
// //     return ans
// // }

// //--To disable submit button till all quiz questions are answered
// // document.getElementById('submit').disabled = !cansubmit;

// // --To enable submit button after all questions have been answered
// // let submitquiz = document.getElementById("submit")
// //         submitquiz.addEventListener("click", function() )
