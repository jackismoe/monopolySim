let playerIcon1 = document.createElement('div')
let playerIcon2 = document.createElement('div')
let playerIcon3 = document.createElement('div')
let playerIcon4 = document.createElement('div')
let playerContainer = document.createElement('div')
let keyIcon = document.createElement('img')
keyIcon.className = 'keyIcon'
keyIcon.src = `./images/pieces/key.png`

class Player {
  static currentPlayers = []
  constructor(id, name, cash) {
    this.id = id
    this.name = name
    this.cash = cash
    this.propertiesOwned = {}
    this.position = 1
    this.inJail = false
    this.hasJailCard = false
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
    playerContainer.className = 'playerInfoContainer'
    playerContainer.id = 'playerInfoContainer'
    
    let number = 1
    for (let x of Player.currentPlayers) {
      let player = document.createElement('div')
      player.className = 'player'
      player.id = `player${number}`
      number+=1

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
    if (this.position == 3 || this.position == 18 || this.position == 34) {
      this.drawVenture()
    } else if (this.position == 8 || this.position == 23 || this.position == 37) {
      this.drawShark()
    }
  }

  drawVenture() {
    let number = Math.floor((Math.random() * 16) + 1)
    let card = GameBoard.ventureFund[number-1]
    drawnCard.innerHTML = `<h1>ventureFund</h1><h2>${card.desc}</h2>`
    gameBoard.appendChild(drawnCard)

    let currentContainer = document.querySelector(`#player${this.id}`)
    if (number == 5) {
      let keyIcon = document.createElement('img')
      keyIcon.className = 'keyIcon'
      keyIcon.src = `./images/pieces/key.png`
      currentContainer.appendChild(keyIcon)
    }
  }

  drawShark() {
    let number = Math.floor((Math.random() * 16) + 1)
    let card = GameBoard.sharkTank[number-1]
    drawnCard.innerHTML = `<h1>sharkTank</h1><h2>${card.desc}</h2>`
    gameBoard.appendChild(drawnCard)

    let currentContainer = document.querySelector(`#player${this.id}`)
    if (number == 7) {
      if (document.querySelector('.keyIcon')) {
        document.querySelector('.keyIcon').remove()
      }
      let keyIcon = document.createElement('img')
      keyIcon.className = 'keyIcon'
      keyIcon.src = `./images/pieces/key.png`
      currentContainer.appendChild(keyIcon)
    }
  }
}

