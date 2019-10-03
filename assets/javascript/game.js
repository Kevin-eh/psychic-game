var lives = 10;
var wins = 0;
var losses = 0;

var livesText = document.getElementById("lives");
livesText.textContent = "lives: " + lives;
var winstext = document.getElementById("wins");
winstext.textContent = "wins: " + wins;
var lossestext = document.getElementById("losses");
lossestext.textContent = "losses: " + losses;

var guessed = [];
var guessedtext = document.getElementById("guesses");
guessedtext.textContent = "guesses: " + guessed;

var letter = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

var finalletter = letter[Math.floor(Math.random() * letter.length)];
console.log(finalletter);

function checktarget(letter) {}
document.onkeyup = function(event) {
  checktarget(event.key);
  var userGuess = event.key;
  if (userGuess === finalletter) {
    wins++;
    lives = 10;
    guessed = [];
    guessedtext.textContent = "guesses: " + guessed;
    livesText.textContent = "lives: " + lives;
    winstext.textContent = "wins: " + wins;
    finalletter = letter[Math.floor(Math.random() * letter.length)];
    console.log(finalletter);
  } else if (userGuess !== finalletter) {
    lives--;
    guessed.push(userGuess);
    guessedtext.textContent = "guesses: " + guessed;

    livesText.textContent = "lives: " + lives;
    if (lives < 1) {
      losses++;
      lives = 10;
      guessed = [];
      guessedtext.textContent = "guesses: " + guessed;
      livesText.textContent = "lives: " + lives;
      lossestext.textContent = "losses:" + losses;
      finalletter = letter[Math.floor(Math.random() * letter.length)];
      console.log(finalletter);
    }
  }
};
