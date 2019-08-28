var words = ["one", "two", "three", "four", "five", "six", "seven"]
// Collection of strings stored in an array
// array is the collection / bucket []
// [item1, item2, item3, ...]  --> ["","",""..]
var wins = 0;
var guesses = 9;
var letters = [];

function randomWord(){
    var random = Math.floor(Math.random() * words.length); // 0-6 e.g. 5
    //words[4] --> "five"
    var  word = words[random];
    return word; 
}

function startGame() {
    var word = randomWord();
    // Display underscores to represent the word
    showUnderScores(word);
}

function showUnderScores(word) {
    var div = document.getElementsByClassName("underScores")[0];
    // Using a loop construct a string with the correct number of underscores
    //e.g. "_  _  _  _"
    var numberOfLetters = word.length;
    var underscoreString = "";
    for(var i = 0; i < numberOfLetters; i++){
        underscoreString += " _ "
    }
    div.innerHTML = underscoreString;
}

startGame();

//int = 35454544 , string --> "string", arrays --> [,,]
