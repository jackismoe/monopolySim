class GameSquare {
  static squareData = [
    [
      {
        id: 21,
        name: 'freeParking',
        funds: 0
      },
      {
        id: 22,
        name: 'kentuckyAve',
        buyable: true,
        price: 220,
        owned: false,
        buildable: true,
        builtOn: false
      },
      {
        id: 23,
        name: 'sharkTank'
      },
      {
        id: 24,
        name: 'indianaAve',
        buyable: true,
        price: 240,
        owned: false,
        buildable: true,
        builtOn: false
      },
      {
        id: 25,
        name: 'illinoisAve',
        buyable: true,
        price: 240,
        owned: false,
        buildable: true,
        builtOn: false
      },
      {
        id: 26,
        name: 'boRailroad',
        buyable: true,
        price: 200,
        owned: false,
        buildable: false
      },
      {
        id: 27,
        name: 'atlanticAve',
        buyable: true,
        price: 260,
        owned: false,
        buildable: true,
        builtOn: false
      },
      {
        id: 28,
        name: 'ventnorAve',
        buyable: true,
        price: 260,
        owned: false,
        buildable: true,
        builtOn: false
      },
      {
        id: 29,
        name: 'waterWorks',
        buyable: true,
        price: 150,
        owned: false,
        buildable: false,
      },
      {
        id: 30,
        name: 'marvinGardens',
        buyable: true,
        price: 280,
        owned: false,
        buildable: true,
        builtOn: false
      },
      {
        id: 31,
        name: 'goToJail'
      }
    ],
    [
      {
        id: 20,
        name: 'newYorkAve',
        buyable: true,
        price: 200,
        owned: false,
        buildable: true,
        builtOn: false
      },
      {
        id: 32,
        name: 'pacificAve',
        buyable: true,
        price: 300,
        owned: false,
        buildable: true,
        builtOn: false
      },
      {
        id: 19,
        name: 'tennesseeAve',
        buyable: true,
        price: 180,
        owned: false,
        buildable: true,
        builtOn: false
      },
      {
        id: 33,
        name: 'northCarolinaAve',
        buyable: true,
        price: 300,
        owned: false,
        buildable: true,
        builtOn: false
      },
      {
        id: 18,
        name: 'ventureFund'
      },
      {
        id: 34,
        name: 'ventureFund',
      },
      {
        id: 17,
        name: 'stJamesPlace',
        buyable: true,
        price: 180,
        owned: false,
        buildable: true,
        builtOn: false
      },
      {
        id: 35,
        name: 'pennAve',
        buyable: true,
        price: 320,
        owned: false,
        buildable: true,
        builtOn: false
      },
      {
        id: 16,
        name: 'pennRailroad',
        buyable: true,
        price: 200,
        owned: false,
        buildable: false,
      },
      {
        id: 36,
        name: 'shortLineRailroad',
        buyable: true,
        price: 200,
        owned: false,
        buildable: false
      },
      {
        id: 15,
        name: 'virginiaAve',
        buyable: true,
        price: 160,
        owned: false,
        buildable: true,
        builtOn: false
      },
      {
        id: 37,
        name: 'sharkTank'
      },
      {
        id: 14,
        name: 'statesAve',
        buyable: true,
        price: 140,
        owned: false,
        buildable: true,
        builtOn: false
      },
      {
        id: 38,
        name: 'parkPlace',
        buyable: true,
        price: 350,
        owned: false,
        buildable: true,
        builtOn: false
      },
      {
        id: 13,
        name: 'electricCompany',
        buyable: true,
        price: 150,
        owned: false,
        buildable: false,
      },
      {
        id: 39,
        name: 'luxuryTax',
        price: -200
      },
      {
        id: 12,
        name: 'stCharlesPlace',
        buyable: true,
        price: 140,
        owned: false,
        buildable: true,
        builtOn: false
      },
      {
        id: 40,
        name: 'boardWalk',
        buyable: true,
        price: 400,
        owned: false,
        buildable: true,
        builtOn: false
      }
    ],
    [
      {
        id: 11,
        name: 'inJail'
      },
      {
        id: 10,
        name: 'connecticutAve',
        buyable: true,
        price: 120,
        owned: false,
        buildable: true,
        builtOn: false
      },
      {
        id: 9,
        name: 'vermontAve',
        buyable: true,
        price: 100,
        owned: false,
        buildable: true,
        builtOn: false
      },
      {
        id: 8,
        name: 'sharkTank'
      },
      {
        id: 7,
        name: 'orientalAve',
        buyable: true,
        price: 100,
        owned: false,
        buildable: true,
        builtOn: false
      },
      {
        id: 6,
        name: 'readingRailroad',
        buyable: true,
        price: 200,
        owned: false,
        buildable: false,
      },
      {
        id: 5,
        name: 'incomeTax',
        price: -200
      },
      {
        id: 4,
        name: 'balticAve',
        buyable: true,
        price: 60,
        owned: false,
        buildable: true,
        builtOn: false
      },
      {
        id: 3,
        name: 'ventureFund'
      },
      {
        id: 2,
        name: 'mediterraneanAve',
        buyable: true,
        price: 60,
        owned: false,
        buildable: true,
        builtOn: false
      },
      {
        id: 1,
        name: 'Go',
      }
    ]
  ]
  static gameSquares = []
  constructor(id, name, buyable, price, owned, buildable, builtOn, funds) {
    this.id = id
    this.name = name
    this.buyable = buyable
    this.price = price
    this.owned = owned
    this.buildable = buildable
    this.builtOn = builtOn
    this.funds = funds
    GameSquare.gameSquares.push(this)
  }

  createSquare(desiredDiv) {
    let currentSquare = document.createElement('div')
    if ((this.name == 'incomeTax') || (this.name == 'electricCompany') || (this.name == 'goToJail') || (this.name == 'sharkTank') || (this.name == 'ventureFund') || (this.name == 'luxuryTax') || (this.name == 'freeParking') || (this.name == 'inJail') || (this.name == 'boRailroad')|| (this.name == 'readingRailroad')||(this.name == 'shortLineRailroad') || (this.name == 'pennRailroad') || (this.name == 'Go')) {
      currentSquare.innerHTML = ``
    } else if (this.price !== undefined) {
      currentSquare.innerHTML = `<span>${this.name}<p>$${this.price}</p><span>`
    } else {
      currentSquare.innerHTML = `${this.name}`
    }
    currentSquare.id = this.name
    desiredDiv.appendChild(currentSquare)
  }
}