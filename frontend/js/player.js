let playerIcon1 = document.createElement('div')
let playerIcon2 = document.createElement('div')
let playerIcon3 = document.createElement('div')
let playerIcon4 = document.createElement('div')
class Player {
  static currentPlayers = []
  constructor(id, name, cash) {
    this.id = id
    this.name = name
    this.cash = cash
    this.propertiesOwned = {}
    this.position = 1
    Player.currentPlayers.push(this)
  }

  static create(playerOne, playerTwo, playerThree, playerFour, startingCash) {
    let cash
    let one
    let two
    let three
    let four

    if (startingCash == 1) {
      cash = 1500
    } else if (startingCash == 2) {
      cash = 2500
    } else if (startingCash == 3) {
      cash = 5000
    } else if (startingCash == 4) {
      cash = 10000
    }

    playerOne == '' ? one = 'jack' : one = playerOne
    playerTwo == '' ? two = 'blue' : two = playerTwo
    playerThree == '' ?  three = 'ruby' : three = playerThree
    playerFour == '' ? four = 'smudge' : four = playerFour

    new Player(1, one, cash)
    new Player(2, two, cash)
    new Player(3, three, cash)
    new Player(4, four, cash)

    Player.buildPlayerCards()
  }

  static buildPlayerCards() {
    let playerContainer = document.createElement('div')
    playerContainer.className = 'playerInfoContainer'
    playerContainer.id = 'playerInfoContainer'
    for (let x of Player.currentPlayers) {
      let player = document.createElement('div')
      player.className = 'player'

      if (x.propertiesOwned.length == undefined) {
        player.innerHTML = `
        <h3>${x.name}</h3>
        <p>$${x.cash}</p>`
      } else {
        player.innerHTML = `
        <h3>${x.name}</h3>
        <p>$${x.cash}</p>
        <p>${x.propertiesOwned.length}</p>`
      }
      playerContainer.appendChild(player)
      let iconImg = document.createElement('img')
      let go = document.getElementsByName('1')[0]
      iconImg.id = `playerIcon${x.id}`
      iconImg.src = `./images/pieces/p${x.id}.png`
      go.appendChild(iconImg)
    }
    game.appendChild(playerContainer)
  }


  move(spaces) {
    let myIcon = document.querySelector(`img#playerIcon${this.id}`)
    let timesToMove = Array(spaces)
    for (let x of timesToMove) {
      this.position++
      if (this.position > 40) {
        this.position = 1
      }
      let square = document.getElementsByName(this.position)[0]    
      if ((this.position > 11 && this.position <= 20) || (this.position > 31 && this.position <= 40)) {
        myIcon.style.top = '35px'
      } else {
        myIcon.style.top = '85px'
      }
      myIcon.remove()
      square.appendChild(myIcon)
    }
  }
}