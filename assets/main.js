const wordToGuessElement = document.querySelector("#word-to-guess")
const letterInputElement = document.querySelector("#letter-input")
const letterSubmitButton = document.querySelector("#letter-submit-button")
const lettersAttemptedElement = document.querySelector("#letters-attempted")
const guessesRemainingElement = document.querySelector("#guesses-remaining")
const letters = /^[A-Za-z]+$/
const guessesAllowed = 6
guessesRemainingElement.innerText = " " + guessesAllowed

let currentWord = "+".repeat(targetWord.length)
wordToGuessElement.innerText = currentWord

let wrongLetterCount = 0
let gameOver = false

// console.log(targetWord)

letterSubmitButton.addEventListener("click", function () {
    if (!gameOver) {
        if (letterInputElement.value.match(letters)) {
            let lettersGuessed = lettersAttemptedElement.innerText
            let inputLetter = letterInputElement.value.toUpperCase()
            if (!lettersGuessed.includes(inputLetter)) {
                lettersAttemptedElement.innerText += inputLetter
                if (targetWord.includes(inputLetter)) {
                    for (let i = 0; i < targetWord.length; i++) {
                        if (targetWord[i] === inputLetter) {
                            currentWord =
                                currentWord.substr(0, i) +
                                inputLetter +
                                currentWord.substr(i + 1)
                        }
                    }
                    wordToGuessElement.innerText = currentWord
                } else {
                    wrongLetterCount++
                    let newGuessCount = guessesAllowed - wrongLetterCount
                    guessesRemainingElement.innerText = " " + newGuessCount
                }
            }
            if (currentWord === targetWord) {
                gameOver = true
                alert("You Win!  Reload page to play again.")
            }
            if (wrongLetterCount === guessesAllowed) {
                gameOver = true
                alert("You lose.  Reload page to play again.")
            }
        }else {
            alert("Please input a letter.")
        }
        letterInputElement.value = null
    }
})
