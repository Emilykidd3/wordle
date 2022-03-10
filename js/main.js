document.addEventListener("DOMContentLoaded", () => {
    createSquares();
    let word;
    
    const wordsArr = ["abuse", "adios", "admit", "adopt", "adult", "agent", "agree", "alcon", "allow", "alter", "anger", "apple", "apply", "argue", "arise", "artsy", "aught", "avoid", "award", "basis", "beach", "begin", "birth", "blame", "block", "blood", "board", "brain", "brake", "bread", "break", "bring", "brown", "build", "burst", "buyer", "carry", "catch", "cause", "chain", "chair", "check", "chest", "chief", "child", "china", "claim", "class", "clean", "clear", "climb", "clock", "close", "coach", "coast", "count", "court", "cover", "crash", "cream", "crime", "cross", "crowd", "crown", "cycle", "dance", "death", "depth", "doubt", "draft", "drama", "dread", "dream", "dress", "drink", "drive", "earth", "enemy", "entry", "error", "event", "faith", "fault", "field", "fight", "final", "floor", "focus", "force", "frame", "frank", "freak", "front", "fruit", "glass", "grant", "grass", "green", "group", "guide", "heart", "hella", "henry", "horse", "hotel", "house", "image", "index", "input", "issue", "japan", "jones", "judge", "knife", "layer", "leads", "level", "lewis", "light", "limit", "lunch", "major", "march", "match", "metal", "model", "money", "month", "motor", "mouth", "music", "night", "noise", "north", "novel", "nurse", "offer", "order", "other", "ought", "owner", "panel", "paper", "party", "peace", "peter", "phase", "phone", "piece", "pilot", "pinch", "pitch", "place", "plane", "plate", "plead", "pleat", "point", "pound", "power", "press", "price", "pride", "prize", "proof", "queen", "quiet", "radio", "range", "ratio", "reply", "right", "river", "round", "route", "rugby", "scale", "scene", "scope", "score", "sense", "shape", "share", "sheep", "sheet", "shift", "shirt", "shock", "sight", "simon", "skill", "sleep", "smile", "smith", "smoke", "sound", "south", "space", "speed", "spite", "sport", "squad", "staff", "stage", "start", "state", "steam", "steel", "stock", "stone", "store", "study", "stuff", "style", "sugar", "table", "taste", "terry", "thame", "their", "theme", "there", "thine", "thing", "title", "total", "touch", "tower", "track", "trade", "train", "trend", "trial", "trust", "truth", "uncle", "union", "unity", "value", "video", "visit", "voice", "waste", "watch", "water", "where", "which", "while", "white", "whole", "whose", "whoso", "woman", "world", "yours", "youth" ]; 
    
    getNewWord();

    let guessedWords = [[]]
    let availableSpace = 1;

    // let word;
    let guessedWordCount = 0;

    const keys = document.querySelectorAll('.keyboard-row button')

    function getNewWord() {
        let randomNumer = Math.floor(Math.random() * wordsArr.length);
        word = wordsArr[randomNumer];
        console.log(word);
        return wordsArr[randomNumer];
    }

    function getCurrentWordArr() {
        const numberOfGuessedWords = guessedWords.length;
        return guessedWords[numberOfGuessedWords - 1]
    }

    function updateGuessedWords(letter){
        const currentWordArr = getCurrentWordArr();

        if (currentWordArr && currentWordArr.length < 5) {
            currentWordArr.push(letter)

            const availableSpaceEl = document.getElementById(String(availableSpace))
            availableSpace = availableSpace + 1;

            availableSpaceEl.textContent = letter;
        }
    }

    function getTileColor(letter, index) {
        const isCorrectLetter = word.includes(letter)

        if (!isCorrectLetter) {
            return "rgb(58, 58, 60)"
        }

        const letterInThatPosition = word.charAt(index);
        const isCorrectPosition = letter === letterInThatPosition

        if (isCorrectPosition) {
            return "rgb(83, 141, 78)"
        }

        return "rgb(181, 159, 59)"
    }

    function handleSubmitWord() {
        const currentWordArr = getCurrentWordArr();
        if (currentWordArr.length !== 5) {
            window.alert("word must be 5 letters");
        }

        const currentWord = currentWordArr.join('');

        if (wordsArr.includes(currentWord)){
            const firstLetterId = guessedWordCount * 5 + 1;
            const interval = 200;
            currentWordArr.forEach((letter, index) => {
                setTimeout(() => {
                    const tileColor = getTileColor(letter, index);
    
                    const letterId = firstLetterId + index;
                    const letterEl = document.getElementById(letterId)
                    letterEl.classList.add("animate__flipInX");
                    letterEl.style = `background-color:${tileColor}; border-color:${tileColor}`
    
                }, interval * index);
            })
    
            guessedWordCount += 1;
    
            if (currentWord === word) {
                // window.alert("Congratulations!")
            }
    
            if (guessedWords.length === 6) {
                window.alert(`Sorry, you have no more guesses! the words is ${word}`)
            }
    
            guessedWords.push([]);
        } else {
            window.alert("that's not a word!")
            return;
        }


    }

    function createSquares() {
        const gameBoard = document.getElementById("board")

        for (let i = 0; i < 30; i++){
            let square = document.createElement("div");
            square.classList.add("square");
            square.classList.add("animate__animated");
            square.setAttribute("id", i + 1)
            gameBoard.appendChild(square);
        }
    }

    function handleDeleteLetter() {
        const currentWordArr = getCurrentWordArr();
        const removedLetter = currentWordArr.pop();

        guessedWords[guessedWords.length - 1] = currentWordArr;

        const lastLetterEl = document.getElementById(String(availableSpace - 1))

        lastLetterEl.textContent = ''
        availableSpace -=1;
    }

    for (let i = 0; i <keys.length; i++) {
        keys[i].onclick = ({ target }) => {
            const letter = target.getAttribute("data-key");

            if (letter === "enter"){
                handleSubmitWord();
                return;
            }

            if (letter === "del"){
                handleDeleteLetter();
                return;
            }

            updateGuessedWords(letter);
        }
    }
})