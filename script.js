const words = [
  'HELLO',
  'WORLD',
  'RHYTHM'
]

let wordToGuess
let lettersGuessedSoFar
let countDown

const startButton = document.getElementById('start-button')
const guess = document.getElementById('guess')
const countdownElement = document.getElementById('countdown')
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
  countDown = 10
  startCountdown()
}

function startCountdown() {
  const timer = setInterval(function() {
    countdownElement.innerText = countDown
    countDown = countDown - 1
    if (countDown < 0) {
      countdownElement.innerText = 'OUT OF TIME'
      clearInterval(timer)
    }
  }, 1000)
}

