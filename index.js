Main()
const question = [
    {
        question1: "In The Matrix, does Neo take the blue pill or the red pill?",
        answers: {
            a: "Green",
            b: "Red",
            c: "Yellow",
            d: "Blue",
        },
        correctAnswer: "b"
    },

    {
        question2: "On the first Friday the 13th film, how many people does Jason murder?",
        answers: {
            a: "3",
            b: "5",
            c: "4",
            d: "None",
        },
        correctAnswer: "b"
    },

    {
        question3: "Which horror film`s tagline is “We dare you to say his name five times“?",
        answers: {
            a: "Slender Man",
            b: "A Nightmare on Elm Street",
            c: "The Ring",
            d: "Candyman",
        },
        correctAnswer: "d"
    },

    {
        question4: "What Is The Exorcist`s Demon`s Name?",
        answers: {
            a: "Aamon",
            b: "Loki",
            c: "Natsu",
            d: "Pazuzu",
        },
        correctAnswer: "d"
    },

    {
        question5: "What arms does Leatherface prefer?",
        answers: {
            a: "Chainsaw",
            b: "Axe",
            c: "Knives",
            d: "Guns",
        },
        correctAnswer: "a"
    },

    {
        question6: "What was Jason`s original name on Friday the 13th?",
        answers: {
            a: "Jeff",
            b: "Damon",
            c: "David",
            d: "Josh",
        },
        correctAnswer: "d"
    },
    {
        question7: "What television series is based on a concept for an unproduced episode of The X-Files?",
        answers: {
            a: "Final Destination",
            b: "Awake",
            c: "Invasion",
            d: "UFO",
        },
        correctAnswer: "a"
    },

    {
        question8: "What horror film used the following tagline? “In space, no one can hear you scream.”",
        answers: {
            a: "The Cloverfield Paradox",
            b: "Life",
            c: "Alien",
            d: "Color Out Of SPace",
        },
        correctAnswer: "c"
    },

    {
        question9: "In which film did Annabelle the doll make her debut?",
        answers: {
            a: "Conjuring",
            b: "Annabelle",
            c: "Annabelle Comes Home",
            d: "The Nun",
        },
        correctAnswer: "a"
    },

    {
        question10: "In the original A Nightmare on Elm Street, what is Nancy`s address?",
        answers: {
            a: "1321 Elm Street",
            b: "1288 Elm Street",
            c: "1428 Elm Street",
            d: "1531 Elm Street",
        },
        correctAnswer: "c"
    },

    {
        question11: "What is the actual name of “Chucky” in Child`s Play?",
        answers: {
            a: "Charles Levi Ray",
            b: "Charles Lee Ray",
            c: "Charles Louis Ray",
            d: "Charles Liam Ray",
        },
        correctAnswer: "b"
    },

    {
        question12: "What heinous beast was the subject of 2007`s `Rogue`?",
        answers: {
            a: "Crocodile",
            b: "Gorilla",
            c: "Anaconda",
            d: "Bear",
        },
        correctAnswer: "a"
    },

    {
        question13: "What iconic horror film was dubbed The Babysitter Murders at one point?",
        answers: {
            a: "Rosemary`s Baby",
            b: "Chid`s Play",
            c: "Friday, The 13th",
            d: "Halloween",
        },
        correctAnswer: "d"
    },

    {
        question14: "In which horror film does the phrase “the power of Christ compels you.” appear?",
        answers: {
            a: "Drag me to Hell",
            b: "The Exorcist",
            c: "The Conjuring",
            d: "The Nun",
        },
        correctAnswer: "b"
    },

    {
        question15: "What was Jason`s original name on Friday the 13th?",
        answers: {
            a: "Jeremiah",
            b: "Josh",
            c: "Joe",
            d: "Jeff",
        },
        correctAnswer: "b"
    },

    {
        question16: "Which horror film franchise is the longest-running?",
        answers: {
            a: "Friday the 13th",
            b: "I Know What You Did Last Summer",
            c: "Halloween",
            d: "Final Destination",
        },
        correctAnswer: "a"
    },

    {
        question17: "What was the twentieth century`s first American horror film?",
        answers: {
            a: "Frankenstein",
            b: "Horror of Dracula",
            c: "Tarantula",
            d: "Freaks",
        },
        correctAnswer: "a"
    },

    {
        question18: "What color is Freddy Krueger's iconic sweater?",
        answers: {
            a: "Red and Green",
            b: "Red and Black",
            c: "RRed and Yellow",
            d: "Red and White",
        },
        correctAnswer: "b"
    },

    {
        question19: "'The Texas Chainsaw Massacre' franchise encompasses how many different movies?",
        answers: {
            a: "3",
            b: "5",
            c: "7",
            d: "9",
        },
        correctAnswer: "d"
    },

    {
        question20: " “Do you like scary movies?” is a quote made famous by which of the following films?",
        answers: {
            a: "Psycho",
            b: "Scream",
            c: "The Shining",
            d: "Halloween",
        },
        correctAnswer: "b"
    },


]
let counter = 0;
let display = document.querySelector('h1');
display.innerText = question[counter]
let btn = document.getElementById('next');

btn.addEventListener('click', ()=>{
    counter++;
    display.innerText = question[counter]
 })
