class Player {
  static currentPlayers = []
  constructor(name, cash) {
    this.name = name
    this.cash = cash
    this.propertiesOwned = {}
    this.position = 1

    if (this.position > 40) {
      this.position = 1
    }
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

    new Player(one, cash)
    new Player(two, cash)
    new Player(three, cash)
    new Player(four, cash)

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
    }
    game.appendChild(playerContainer)
  }
}