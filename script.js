const words = [
  'HELLO',
  'WORLD',
  'RHYTHM'
]

let wordToGuess
let lettersGuessedSoFar

const startButton = document.getElementById('start-button')
const guess = document.getElementById('guess')
guess.hidden = true
startButton.onclick = startGame
guess.onkeydown = makeGuess

function makeGuess(e) {
  const guessedLetter = e.key
  console.log(guessedLetter)
  guess.value = ''
}

function startGame() {
  console.log('GAME ON')
  const indexOfWord = Math.floor(Math.random() * words.length)
  wordToGuess = words[indexOfWord]
  lettersGuessedSoFar = []
  guess.hidden = false
  startButton.hidden = true
}

