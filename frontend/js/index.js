const topRowContainer = document.querySelector('.topRow')
const middleNineContainer = document.querySelector('.middleNine')
const bottomRowContainer = document.querySelector('.bottomRow')

const game = document.querySelector('.game')
const gameBoard = document.querySelector('.gameBoard')
const setup = document.querySelector('.setup')
const showCard = document.createElement('div')
const body = document.querySelector('body')

showCard.className = 'showCard'



//initialize game
// move to function later after setup is created
document.addEventListener('DOMContentLoaded', () => {

  for (let x in GameSquare.squareData) {
    for (let y of GameSquare.squareData[x]) {
      new GameSquare(y.id, y.name, y.buyable, y.price, y.owned, y.buildable, y.builtOn, y.funds, y.pricePerHouse, y.rent, y.oneHouse, y.twoHouse, y.threeHouse, y.fourHouse, y.hotel)
    }
  }

  for (let i = 0; i < GameSquare.gameSquares.length; i++) {
    let div
    if (i < 11) {
      div = topRowContainer
    } else if (i >= 11 && i < 29) {
      div = middleNineContainer
    } else {
      div = bottomRowContainer
    }
    GameSquare.gameSquares[i].createSquare(div)
  }
  new GameBoard
  getSetUpValues()
})

function getSetUpValues() {
  let setup = document.createElement('form')
  setup.className = 'setup'
  
  let playerSelect = document.createElement('div')
  let cashSelect = document.createElement('div')
  let welcome = document.createElement('h1')
  welcome.className = 'welcome'
  welcome.innerText = 'monopolySim'
  playerSelect.className = 'playerSelect'
  cashSelect.className = 'cashSelect'
  playerSelect.innerHTML = `<h2>Player Names</h2>
                            <label>Player 1</label><br>
                            <input placeholder='Jack'></input><br>
                            <label>Player 2</label><br>
                            <input placeholder='Blue'></input><br>
                            <label>Player 3</label><br>
                            <input placeholder='Ruby'></input><br>
                            <label>Player 4</label><br>
                            <input placeholder='Smudge'></input>`

  cashSelect.innerHTML = `<div>
                            <h2>Starting Cash</h2>
                            <select>
                              <option value="0"></option>
                              <option value="1">1500</option>
                              <option value="2">2500</option>
                              <option value="3">5000</option>
                              <option value="4">10,000</option>
                            </select>
                          </div>`

  let submit = document.createElement('button')
  submit.type = 'submit'
  submit.innerText = 'Start Game!'
  setup.appendChild(playerSelect)
  setup.appendChild(cashSelect)
  setup.appendChild(submit)
  body.appendChild(welcome)
  body.appendChild(setup)

  submit.addEventListener('click', (e) => {
    e.preventDefault()
    let playerOne = e.target.parentElement[0].value
    let playerTwo = e.target.parentElement[1].value
    let playerThree = e.target.parentElement[2].value
    let playerFour = e.target.parentElement[3].value
    let startingCash = e.target.parentElement[4].value
    if (startingCash == 0) {
      alert('You must select a starting cash value to proceed.')
    } else {
      Player.create(playerOne, playerTwo, playerThree, playerFour, startingCash)
      setup.remove()
      welcome.remove()
      game.style.visibility = 'visible'
    }
  })
}