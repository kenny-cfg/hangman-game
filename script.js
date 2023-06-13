const words = [
  'HELLO',
  'WORLD',
  'RHYTHM'
]

let wordToGuess

const startButton = document.getElementById('start-button')
startButton.onclick = startGame

function startGame() {
  console.log('GAME ON')
  const indexOfWord = Math.floor(Math.random() * words.length)
  wordToGuess = words[indexOfWord]
  console.log(indexOfWord)
}

