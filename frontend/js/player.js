let playerIcon1 = document.createElement('div')
let playerIcon2 = document.createElement('div')
let playerIcon3 = document.createElement('div')
let playerIcon4 = document.createElement('div')
let keyIcon = document.createElement('img')
keyIcon.className = 'keyIcon'
keyIcon.src = `./frontend/images/pieces/key.png`

class Player {
  constructor(id, name, cash) {
    this.id = id
    this.name = name
    this.cash = cash
    this.propertiesOwned = []
    this.position = 1
    this.inJail = false
    this.hasJailCard = false
    this.hasCollectedGo = true
    this.inJailTurns = 0
    this.currentPlayers = []
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
        iconImg.src = `./frontend/images/pieces/p${x.id}.png`
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
    // draw cards
    if (space.name.includes('ventureFund')) {
      this.drawVenture()
    } else if (space.name.includes('sharkTank')) {
      this.drawShark()
    } else if ((space.name == 'Go' || this.position >= 1) && (this.hasCollectedGo == false)) {
      // get money from go
      alert("Congratulations! You recived $200!")
      this.hasCollectedGo = true
      this.cash += 200
      this.updateCard()
      this.handleMove()
    } else if ((space.buyable == true) && (space.owned == false)) {
      // all property spaces
      let buy = confirm(`${space.name} is available for $${space.price}. Would you like to buy it?`)
      if (buy) {
        this.cash -= space.price
        this.propertiesOwned.push(space)
        space.owned = this.id

        let square = document.querySelector(`#${space.name}`)
        let ownedDiv = document.createElement('div')
        ownedDiv.className = 'ownedDiv'
        ownedDiv.innerHTML = `<img src='./frontend/images/pieces/owned${this.id}.png'/>`
        square.appendChild(ownedDiv)

        this.updateCard()
      }  
    } else if (space.owned) {
        space.findOwner()
        alert(`${owner.name} owns this space. You owe them $${space.rent}.`)
        this.cash -= space.rent
        owner.cash += space.rent
        owner.updateCard()
        this.updateCard()
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
    card.innerHTML = `
      <h3>${this.name}</h3>
      <p>$${this.cash}</p>`
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

    this.handleVentureDraw(number)
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
    this.handleSharkDraw(number)
  }

  handleVentureDraw(id) {
    let otherThree = Player.currentPlayers.filter(player => player.id != this.id)
    let freeParking = GameSquare.gameSquares.find(square => square.name.includes('freeParking'))

    if (id == 1) {
      this.position = 1
    } else if (id == 2) {
      this.cash += 200
    } else if (id == 3) {
      this.cash -= 50
      freeParking.funds += 50
    } else if (id == 4) {
      this.cash += 50
    } else if (id == 5) {
      this.hasJailCard = true
    } else if (id == 6) {
      this.position = 11
      this.inJailTurns = 5
    } else if (id == 7) {
      this.cash += 150
      for (let x of otherThree) {
        x.cash -= 50
        x.updateCard()
      }
    } else if (id == 8) {
      this.cash += 100
    } else if (id == 9) {
      this.cash += 20
    } else if (id == 10) {
      this.cash += 30
      for (let x of otherThree) {
        x.cash -= 10
        x.updateCard()
      }
    } else if (id == 11) {
      this.cash += 100
    } else if (id == 12) {
      this.cash -= 50
      freeParking.funds += 50
    } else if (id == 13) {
      this.cash -= 50
      freeParking.funds += 50
    } else if (id == 14) {
      this.cash += 25
    } else if (id == 15) {
      this.cash += 10
    } else if (id == 16) {
      this.cash += 100
    }
    this.updateCard()
  }

  handleSharkDraw(id) {
    let otherThree = Player.currentPlayers.filter(player => player.id != this.id)
    let freeParking = GameSquare.gameSquares.find(square => square.name.includes('freeParking'))

    if (id == 1) {
      this.position = 1
    } else if (id == 2) {
      this.position = 25
    } else if (id == 3) {
      this.position = 12
    } else if (id == 4) {
      let utility
      if (this.position < 13) {
        utility = GameSquare.gameSquares.find(square => square.name.includes('electricCompany'))
        this.position = 13
      } else {
        utility = GameSquare.gameSquares.find(square => square.name.includes('waterWorks'))
        this.position = 29
      }
      if (!!utility.owned) {
        utility.findOwner()
        owner.cash += (utility.rent * 2)
        this.cash -= (utility.rent * 2)
      }
    } else if (id == 5) {
      let railroad
      if (this.position < 6) {
        railroad = GameSquare.gameSquares.find(square => square.name.includes('readingRailroad'))
        this.position = 6
      } else if (this.position < 16) {
        railroad = GameSquare.gameSquares.find(square => square.name.includes('pennRailroad'))
        this.position = 16
      } else if (this.position < 26) {
        railroad = GameSquare.gameSquares.find(square => square.name.includes('boRailroad'))
        this.position = 26
      } else if (this.position < 36) {
        railroad = GameSquare.gameSquares.find(square => square.name.includes('shortLineRailroad'))
        this.position = 36
      }
      if (!!railroad.owned) {
        railroad.findOwner()
        owner.cash += (railroad.rent * 2)
        this.cash -= (railroad.rent * 2)
      }
    } else if (id == 6) {
      this.cash += 50
    } else if (id == 7) {
      this.hasJailCard = true
    } else if (id == 8) {
      if (this.position == 1) {
        this.position = 38
      } else if (this.position == 2) {
        this.position = 39
      } else if (this.position == 3) {
        this.position = 40
      } else {
        this.position -= 3
      }
    } else if (id == 9) {
      this.position = 11
      this.inJailTurns = 5
    } else if (id == 10) {
      let numberHouses = 0
      let numberHotels = 0
      for (let x of Player.currentPlayers) {
        for (let y of x.propertiesOwned) {
          if (y.builtOn) {
            numberHouses = y.builtOn.houses
            numberHotels = y.builtOn.hotels
          }
        }
      }
      this.cash -= (numberHouses * 25 + numberHotels * 100)
      freeParking.funds += (numberHouses * 25 + numberHotels * 100)
    } else if (id == 11) {
      this.cash -= 15
      freeParking.funds += 15
    } else if (id == 12) {
      let reading = GameSquare.gameSquares.find(square => square.name.includes('readingRailroad'))
      this.position = 6
      if (reading.owned) {
        reading.findOwner()
        owner.cash += reading.rent
        this.cash -= reading.rent
      }
    } else if (id == 13) {
      let boardWalk = GameSquare.gameSquares.find(square => square.name.includes('boardWalk'))
      this.position = 40
      if (boardWalk.owned) {
        boardWalk.findOwner()
        owner.cash += boardWalk.rent
        this.cash -= boardWalk.rent
      }
    } else if (id == 14) {
      this.cash -= 150
      for (let x of otherThree) {
        x.cash += 50
        x.updateCard()
      }
    } else if (id == 15) {
      this.cash += 150
    } else if (id == 16) {
      this.cash += 100
    }
    this.updateCard()
  }
}

