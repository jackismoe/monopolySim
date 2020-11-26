class GameBoard {
  constructor() {

  }

  static rollDice() {
    console.log('yes')
    let firstDie = document.getElementById('firstDie')
    let secondDie = document.getElementById('secondDie')

    let firstNumber = Math.floor((Math.random() * 6) + 1)
    let secondNumber = Math.floor((Math.random() * 6) + 1)

    firstDie.innerText = firstNumber
    secondDie.innerText = secondNumber
  }
}

const dice = document.getElementById('dice')
dice.addEventListener('click', GameBoard.rollDice)

// community chest
// chance