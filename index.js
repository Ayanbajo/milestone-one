const startButton = document.getElementById('startButton');
// const nextQuestionButton = document.getElementById('next');
const questionContainerElement = document.getElementById('question-container');
// const submitElement = document.getElementById('submit');
const display = document.getElementById('question');
const optionContainer = document.getElementById('option-container');
const disclaimer = document.getElementById('disclaimer');
const disclaimertwo = document.getElementById('disclaimerTwo');


const question = [
    {
        question: "Which of the Following Character Dies First in The Ring",
        answers: [ 'Becca', 'Katie', 'Rachel', 'Ruth' ],
        correctAnswer: 'Katie'
    },

    {
        question: "On the first Friday the 13th film, how many people does Jason murder?",
        answers: ['3', '5', '4', 'None'],
        correctAnswer: 'None'
        
    },
       
    {
        question: "Which horror film`s tagline is “We dare you to say his name five times“?",
        answers: ['Slender Man', 'A Nightmare on Elm Street', 'The Ring', 'Candyman'],
        correctAnswer: 'Candyman'

    },

    {
        question: "What Is The Exorcist`s Demon`s Name?",
        answers: ['Aamon', 'Loki', 'Natsu', 'Pazuzu'],
        correctAnswer: 'Pazuzu'
    },
        

    {
        question: "What arms does Leatherface prefer?",
        answers: ['Chainsaw', 'Axe', 'Knives', 'Guns'],
        correctAnswer: 'Chainsaw'
    },
        

    {
        question: "What was Jason`s original name on Friday the 13th?",
        answers: ['Jeff', 'Damon', 'David', 'Josh'],
        correctAnswer: 'Josh'
    },
        
    {
        question: "What TV series is based on a concept for an unproduced episode of The X-Files?",
        answers: ['Final Destination', 'Awake', 'Invasion', 'UFO'],
        correctAnswer: 'Final Destination'
    },
        

    {
        question: "What horror film used the following tagline? “In space, no one can hear you scream.”",
        answers: ['The Cloverfield Paradox', 'Life', 'Alien', 'Color Out of Space'],
        correctAnswer: 'Alien'
    },
        

    {
        question: "In which film did Annabelle the doll make her debut?",
        answers: ['Conjuring', 'Annabelle', 'Annabelle Come Home', 'The Nun'],
        correctAnswer: 'Conjuring'
    },
        

    {
        question: "In the original A Nightmare on Elm Street, what is Nancy`s address?",
        answers: ['1321 Elm Street', '1288 Elm Street', '1428 Elm Street', '1531 Elm Street'],
        correctAnswer: '1428 Elm Street'
    },
        

    {
        question: "What is the actual name of “Chucky” in Child`s Play?",
        answers: ['Charles Levi Ray', 'Charles Lee Ray', 'Charles Louis Ray', 'Charles Liam Ray'],
        correctAnswer: 'Charles Lee Ray'
    },
        

    {
        question: "What heinous beast was the subject of 2007`s `Rogue`?",
        answers: ['Crocodile', 'Gorilla', 'Anaconda', 'Bear'],
        correctAnswer: 'Crocodile'
    },
        

    {
        question: "What iconic horror film was dubbed The Babysitter Murders at one point?",
        answers: ['Rosemary`s Baby', 'Chid`s Play', 'Friday, The 13th', 'Halloween'],
        correctAnswer: 'Halloween'
    },
        

    {
        question: "In which horror film does the phrase “the power of Christ compels you.” appear?",
        answers: ['Drag me to Hell', 'The Exorcist', 'The Conjuring', 'The Nun'],
        correctAnswer: 'The Exorcist'
    },

    {
        question: "What was Jason`s original name on Friday the 13th?",
        answers: ['Jeremiah', 'Josh', 'Joe', 'Jeff'],
        correctAnswer: 'Josh'
    },
        

    {
        question: "Which horror film franchise is the longest-running?",
        answers: ['Friday the 13th', 'I Know What You Did Last Summer', 'Halloween', 'Final Destination'],
        correctAnswer: 'Friday the 13th'
    },
        

    {
        question: "What was the twentieth century`s first American horror film?",
        answers: ['Frankenstein', 'Horror of Dracula', 'Tarantula', 'Freaks'],
        correctAnswer: 'Frankenstein'
    },
        

    {
        question: "What color is Freddy Krueger's iconic sweater?",
        answers: ['Red and Green', 'Red and Black', 'Red and Yellow', 'Red and White'],
        correctAnswer: 'Red and Black'
    },
        

    {
        question: "'The Texas Chainsaw Massacre' franchise encompasses how many different movies?",
        answers: ['3', '5', '7', '9'],
        correctAnswer: '9'
    },
        

    {
        question: " “Do you like scary movies?” is a quote made famous by which of the following films?",
        answers: ['Psycho', 'Scream', 'The Shining', 'Halloween'],
        correctAnswer: 'Scream'
    },

]

let counter = 0;
let currentQuestion = question[counter];
let currentAnswer = question[counter].correctAnswer;
// console.log(currentAnswer, 'line 151');




//-- To display questions and options

function displayQuestion() {
    // console.log(display)
    display.innerText = currentQuestion.question;
    // console.log(optionContainer.children);
    for (let i = 0; i < optionContainer.children.length; i++) {
      optionContainer.children[i].children[1].textContent = question[counter].answers[i]
      optionContainer.children[i].addEventListener('click', event => {
          // console.log(event.target.textContent);
          collectResponse(event.target.textContent);

      })
    }
} 

//-- For next button

let currentResponse = '';
let response = '';

let btn = document.getElementById('next');
btn.style.visibility = "hidden";
// console.log(btn);
btn.addEventListener('click', ()=>{
    getScore(currentResponse);
    counter++;
    currentQuestion = question[counter]
    // console.log(currentQuestion.question)
    displayQuestion()
    btn.style.visibility = "hidden"
    console.log(currentResponse, 'Next Button');
 })


displayQuestion()

// -- To collect response

function collectResponse(response) {
    if(response !== '')
    currentResponse = response
    if(counter == 19)
    subBtn.style.visibility = "visible";
    else
    btn.style.visibility = "visible"
    // console.log('New response is', currentResponse);    
}


// -- To calculate score from response

let score = 0;

function getScore(response) {
   // console.log(currentResponse, 'testing score')
    if (response == question[counter].correctAnswer) { 
        score ++;
        console.log(score);
    }
}


// -- Submit button

let subBtn = document.getElementById('submit');
subBtn.style.visibility = "hidden";

subBtn.addEventListener('click', ()=>{
        getScore(currentResponse);

    if (score >= 11 ) {
        document.getElementById('disclaimerTwo').textContent = 'Thank You for playing. I don`t know what the hell I am doing.'
        console.log ('Congratulation');
    }
    else {
        document.getElementById('disclaimer').textContent = 'Thank You for playing. view your score below.'
        console.log ('Try Again');
    }
        
    
})

// document.getElementById('disclaimerTwo').textContent = 'Thank You for playing. I don`t know what the hell I am doing.'
// document.getElementById('disclaimer').textContent = 'Thank You for playing. view your score below.'