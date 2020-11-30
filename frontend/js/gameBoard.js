class GameBoard {
  static currentPlayer = 1

  static ventureFund = [
    {
      id: 1,
      desc: 'Advance To Go; Collect $200.'
    },
    {
      id: 2,
      desc: 'Bank error in your favor. Collect $200.'
    },
    {
      id: 3,
      desc: "Doctor's fees. Pay $50."
    },
    {
      id: 4,
      desc: 'From sale of stock you get $50.'
    },
    {
      id: 5,
      desc: "Get out of jail free. This card may be kept until used."
    },
    {
      id: 6,
      desc: 'Go to jail. Do not pass GO. Do not collect $200.'
    },
    {
      id: 7,
      desc: 'Grand Opera Night. Collect $50 from every player for opening seats.'
    },
    {
      id: 8,
      desc: 'Holiday Funds Mature. Receive $100.'
    },
    {
      id: 9,
      desc: 'Income tax refund. Collect $20.'
    },
    {
      id: 10,
      desc: "It's your birthday! Collect $10 from every player."
    },
    {
      id: 11,
      desc: 'Life insurance matures. Collect $100.'
    },
    {
      id: 12,
      desc: 'Hospital Fees. Pay $50.'
    },
    {
      id: 13,
      desc: 'School fees. Pay $50.'
    },
    {
      id: 14,
      desc: 'Receive $25 consultancy fee.'
    },
    {
      id: 15,
      desc: 'You have won second prize in a beauty contest. Collect $10.'
    },
    {
      id: 16,
      desc: 'You inherit $100'
    }
  ]

  static sharkTank = [
    {
      id: 1,
      desc: 'Advance To Go; Collect $200.'
    },
    {
      id: 2,
      desc: 'Advance to illinoisAve. If you pass GO collect $200.'
    },
    {
      id: 3,
      desc: "Advance to stCharlesPlace. If you pass GO collect $200."
    },
    {
      id: 4,
      desc: 'Advance token to nearest utility. If owned, roll dice again and pay owner 10 times amount shown.'
    },
    {
      id: 5,
      desc: "Advance token to nearest railRoad. If owned, pay owner twice as much rent."
    },
    {
      id: 6,
      desc: 'Banks pays you dividend of $50.'
    },
    {
      id: 7,
      desc: 'Get out of jail free.'
    },
    {
      id: 8,
      desc: 'Go back three spaces.'
    },
    {
      id: 9,
      desc: 'Go to Jail. Do not pass GO. Do not collect $200.'
    },
    {
      id: 10,
      desc: "Make general repairs on all your properties. For each house pay $25. For each hotel pay $100."
    },
    {
      id: 11,
      desc: 'Pay poort tax of $15.'
    },
    {
      id: 12,
      desc: 'Take a trip to reading railRoad. If you pass go, collect $200.'
    },
    {
      id: 13,
      desc: 'Take a walk on the boardWalk.'
    },
    {
      id: 14,
      desc: 'You have been elected chairman of the board. Pay each player $50.'
    },
    {
      id: 15,
      desc: 'Your building loan matures. Receive $150.'
    },
    {
      id: 16,
      desc: 'You have won a crossword competition. Collect $100.'
    }
  ]

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
  //add house
  //add hotel
}

const dice = document.getElementById('dice')
dice.addEventListener('click', GameBoard.rollDice)