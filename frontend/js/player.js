let playerIcon1 = document.createElement('div')
let playerIcon2 = document.createElement('div')
let playerIcon3 = document.createElement('div')
let playerIcon4 = document.createElement('div')
let keyIcon = document.createElement('img')
keyIcon.className = 'keyIcon'
keyIcon.src = `./images/pieces/key.png`

class Player {
  static currentPlayers = []
  constructor(id, name, cash) {
    this.id = id
    this.name = name
    this.cash = cash
    this.propertiesOwned = []
    this.position = 1
    this.inJail = false
    this.hasJailCard = false
    this.hasCollectedGo = true
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
    
    let number = 1
    for (let x of Player.currentPlayers) {
      let player = document.createElement('div')
      player.className = 'player'
      player.id = `player${number}`
      number+=1
      player.innerHTML = `
                        <h3>${x.name}</h3>
                        <p>$${x.cash}</p>`
      playerContainer.appendChild(player)
      if (!document.querySelector(`#playerIcon${x.id}`)) {
        let iconImg = document.createElement('img')
        let go = document.getElementsByName('1')[0]
        iconImg.id = `playerIcon${x.id}`
        iconImg.src = `./images/pieces/p${x.id}.png`
        go.appendChild(iconImg)
      }
    }
    game.appendChild(playerContainer)
  }


  move(spaces) {
    let myIcon = document.querySelector(`img#playerIcon${this.id}`)
    let timesToMove = Array(spaces)
    for (let x of timesToMove) {
      this.position++
      this.turns++

      if (this.position > 40) {
        this.position = 1
        this.hasCollectedGo = false
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
    setTimeout(() => {
      this.handleMove()      
    }, 150);
  }
  
  handleMove() {
    let space = GameSquare.gameSquares.find(space => this.position == space.id)

    console.log(space)
    if (space.name.includes('ventureFund')) {
      this.drawVenture()
    } else if (space.name.includes('sharkTank')) {
      this.drawShark()
    } else if ((space.name == 'Go' || this.position >= 1) && (this.hasCollectedGo == false)) {
      alert("Congratulations! You recived $200!")
      this.hasCollectedGo = true
      this.cash += 200
      this.updateCard()
    } else if ((space.buyable == true) && (space.owned == false)) {
      let buy = confirm(`${space.name} is available for $${space.price}. Would you like to buy it?`)
      if (buy) {
        this.cash -= space.price
        this.propertiesOwned.push(space)
        space.owned = true
        this.updateCard()
      }
    }

    if (GameBoard.currentPlayer < 4) {
      GameBoard.currentPlayer ++ 
    } else {
      GameBoard.currentPlayer = 1
    }
    
    document.querySelector(`div#player${GameBoard.currentPlayer}`).style.backgroundColor = 'rgb(181,222,183)'

    if (GameBoard.currentPlayer > 1) {
      document.querySelector(`div#player${GameBoard.currentPlayer - 1}`).style.backgroundColor = 'white'
    } else {
      document.querySelector(`div#player4`).style.backgroundColor = 'white'
    }
  }

  updateCard() {
    let card = document.querySelector(`#player${this.id}`)
    if (this.propertiesOwned.length == undefined) {
      card.innerHTML = `
        <h3>${this.name}</h3>
        <p>$${this.cash}</p>`
    } else {
      card.innerHTML = `
        <h3>${this.name}</h3>
        <p>$${this.cash}</p>
        <button class='view'>viewProperties</button>`
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

