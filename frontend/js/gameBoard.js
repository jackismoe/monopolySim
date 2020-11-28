class GameBoard {
  static currentPlayer = 1

  static rollDice() {
    let firstDie = document.getElementById('firstDie')
    let secondDie = document.getElementById('secondDie')

    let firstNumber = Math.floor((Math.random() * 6) + 1)
    let secondNumber = Math.floor((Math.random() * 6) + 1)

    firstDie.innerText = firstNumber
    secondDie.innerText = secondNumber

    let total = firstNumber + secondNumber

    let player 
    for (let i = 0; i < Player.currentPlayers.length; i++) {
      if (GameBoard.currentPlayer == Player.currentPlayers[i].id) {
        player = Player.currentPlayers[i]
      }
    }
    player.move(total)
  }
  //cc
  //sharks
  //add house
  //add hotel
}

const dice = document.getElementById('dice')
dice.addEventListener('click', GameBoard.rollDice)