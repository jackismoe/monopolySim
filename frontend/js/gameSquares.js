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
        builtOn: false,
        pricePerHouse: 150,
        rent: 18,
        oneHouse: 90,
        twoHouse: 250,
        threeHouse: 700,
        fourHouse: 875,
        hotel: 1050
      },
      {
        id: 23,
        name: 'sharkTank2'
      },
      {
        id: 24,
        name: 'indianaAve',
        buyable: true,
        price: 240,
        owned: false,
        buildable: true,
        builtOn: false,
        pricePerHouse: 150,
        rent: 18,
        oneHouse: 90,
        twoHouse: 250,
        threeHouse: 700,
        fourHouse: 875,
        hotel: 1050
      },
      {
        id: 25,
        name: 'illinoisAve',
        buyable: true,
        price: 240,
        owned: false,
        buildable: true,
        builtOn: false,
        pricePerHouse: 150,
        rent: 20,
        oneHouse: 100,
        twoHouse: 300,
        threeHouse: 750,
        fourHouse: 925,
        hotel: 1100

      },
      {
        id: 26,
        name: 'boRailroad',
        buyable: true,
        price: 200,
        owned: false,
        buildable: false,
        rent: 25
      },
      {
        id: 27,
        name: 'atlanticAve',
        buyable: true,
        price: 260,
        owned: false,
        buildable: true,
        builtOn: false,
        pricePerHouse: 150,
        rent: 22,
        oneHouse: 110,
        twoHouse: 330,
        threeHouse: 800,
        fourHouse: 975,
        hotel: 1150
      },
      {
        id: 28,
        name: 'ventnorAve',
        buyable: true,
        price: 260,
        owned: false,
        buildable: true,
        builtOn: false,
        pricePerHouse: 150,
        rent: 22,
        oneHouse: 110,
        twoHouse: 330,
        threeHouse: 800,
        fourHouse: 975,
        hotel: 1150
      },
      {
        id: 29,
        name: 'waterWorks',
        buyable: true,
        price: 150,
        owned: false,
        buildable: false,
        rent: 'If a player owns either, rent is equal to the amount shown on the dice times 4. If a player owns both, rent is equal to the amount shown on the dice times 10.'
      },
      {
        id: 30,
        name: 'marvinGardens',
        buyable: true,
        price: 280,
        owned: false,
        buildable: true,
        builtOn: false,
        pricePerHouse: 150,
        rent: 24,
        oneHouse: 120,
        twoHouse: 360,
        threeHouse: 850,
        fourHouse: 1025,
        hotel: 1200       
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
        builtOn: false,
        pricePerHouse: 100,
        rent: 16,
        oneHouse: 80,
        twoHouse: 220,
        threeHouse: 600,
        fourHouse: 800,
        hotel: 1000
      },
      {
        id: 32,
        name: 'pacificAve',
        buyable: true,
        price: 300,
        owned: false,
        buildable: true,
        builtOn: false,
        pricePerHouse: 200,
        rent: 26,
        oneHouse: 130,
        twoHouse: 390,
        threeHouse: 900,
        fourHouse: 1100,
        hotel: 1275
      },
      {
        id: 19,
        name: 'tennesseeAve',
        buyable: true,
        price: 180,
        owned: false,
        buildable: true,
        builtOn: false,
        pricePerHouse: 100,
        rent: 14,
        oneHouse: 70,
        twoHouse: 200,
        threeHouse: 550,
        fourHouse: 750,
        hotel: 950
      },
      {
        id: 33,
        name: 'northCarolinaAve',
        buyable: true,
        price: 300,
        owned: false,
        buildable: true,
        builtOn: false,
        pricePerHouse: 200,
        rent: 26,
        oneHouse: 130,
        twoHouse: 390,
        threeHouse: 900,
        fourHouse: 1100,
        hotel: 1275
      },
      {
        id: 18,
        name: 'ventureFund2'
      },
      {
        id: 34,
        name: 'ventureFund3',
      },
      {
        id: 17,
        name: 'stJamesPlace',
        buyable: true,
        price: 180,
        owned: false,
        buildable: true,
        builtOn: false,
        pricePerHouse: 100,
        rent: 14,
        oneHouse: 70,
        twoHouse: 200,
        threeHouse: 550,
        fourHouse: 750,
        hotel: 950
      },
      {
        id: 35,
        name: 'pennAve',
        buyable: true,
        price: 320,
        owned: false,
        buildable: true,
        builtOn: false,
        pricePerHouse: 200,
        rent: 28,
        oneHouse: 150,
        twoHouse: 450,
        threeHouse: 100,
        fourHouse: 1200,
        hotel: 1400
      },
      {
        id: 16,
        name: 'pennRailroad',
        buyable: true,
        price: 200,
        owned: false,
        buildable: false,
        rent: 25
      },
      {
        id: 36,
        name: 'shortLineRailroad',
        buyable: true,
        price: 200,
        owned: false,
        buildable: false,
        rent: 25
      },
      {
        id: 15,
        name: 'virginiaAve',
        buyable: true,
        price: 160,
        owned: false,
        buildable: true,
        builtOn: false,
        pricePerHouse: 100,
        rent: 12,
        oneHouse: 60,
        twoHouse: 180,
        threeHouse: 500,
        fourHouse: 700,
        hotel: 900
      },
      {
        id: 37,
        name: 'sharkTank3'
      },
      {
        id: 14,
        name: 'statesAve',
        buyable: true,
        price: 140,
        owned: false,
        buildable: true,
        builtOn: false,
        pricePerHouse: 100,
        rent: 10,
        oneHouse: 50,
        twoHouse: 150,
        threeHouse: 450,
        fourHouse: 625,
        hotel: 750
      },
      {
        id: 38,
        name: 'parkPlace',
        buyable: true,
        price: 350,
        owned: false,
        buildable: true,
        builtOn: false,
        pricePerHouse: 200,
        rent: 35,
        oneHouse: 275,
        twoHouse: 500,
        threeHouse: 1100,
        fourHouse: 1300,
        hotel: 1500
      },
      {
        id: 13,
        name: 'electricCompany',
        buyable: true,
        price: 150,
        owned: false,
        buildable: false,
        rent: 'If a player owns either, rent is equal to the amount shown on the dice times 4. If a player owns both, rent is equal to the amount shown on the dice times 10.'
      },
      {
        id: 39,
        name: 'luxuryTax',
        price: -200,
        desc: 'Pay $75.'
      },
      {
        id: 12,
        name: 'stCharlesPlace',
        buyable: true,
        price: 140,
        owned: false,
        buildable: true,
        builtOn: false,
        pricePerHouse: 100,
        rent: 10,
        oneHouse: 50,
        twoHouse: 150,
        threeHouse: 450,
        fourHouse: 625,
        hotel: 750
      },
      {
        id: 40,
        name: 'boardWalk',
        buyable: true,
        price: 400,
        owned: false,
        buildable: true,
        builtOn: false,
        pricePerHouse: 200,
        rent: 50,
        oneHouse: 200,
        twoHouse: 600,
        threeHouse: 1400,
        fourHouse: 1700,
        hotel: 2000
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
        builtOn: false,
        pricePerHouse: 50,
        rent: 8,
        oneHouse: 40,
        twoHouse: 100,
        threeHouse: 300,
        fourHouse: 450,
        hotel: 600
      },
      {
        id: 9,
        name: 'vermontAve',
        buyable: true,
        price: 100,
        owned: false,
        buildable: true,
        builtOn: false,
        pricePerHouse: 50,
        rent: 6,
        oneHouse: 30,
        twoHouse: 90,
        threeHouse: 270,
        fourHouse: 400,
        hotel: 550
      },
      {
        id: 8,
        name: 'sharkTank1'
      },
      {
        id: 7,
        name: 'orientalAve',
        buyable: true,
        price: 100,
        owned: false,
        buildable: true,
        builtOn: false,
        pricePerHouse: 50,
        rent: 6,
        oneHouse: 30,
        twoHouse: 90,
        threeHouse: 270,
        fourHouse: 400,
        hotel: 550
      },
      {
        id: 6,
        name: 'readingRailroad',
        buyable: true,
        price: 200,
        owned: false,
        buildable: false,
        rent: 25
      },
      {
        id: 5,
        name: 'incomeTax',
        price: -200,
        desc: 'Pay 10% or $200, whichever is higher.'
      },
      {
        id: 4,
        name: 'balticAve',
        buyable: true,
        price: 60,
        owned: false,
        buildable: true,
        builtOn: false,
        pricePerHouse: 50,
        rent: 4,
        oneHouse: 20,
        twoHouse: 60,
        threeHouse: 180,
        fourHouse: 320,
        hotel: 450
      },
      {
        id: 3,
        name: 'ventureFund1'
      },
      {
        id: 2,
        name: 'mediterraneanAve',
        buyable: true,
        price: 60,
        owned: false,
        buildable: true,
        builtOn: false,
        pricePerHouse: 50,
        rent: 2,
        oneHouse: 10,
        twoHouse: 30,
        threeHouse: 90,
        fourHouse: 160,
        hotel: 250
      },
      {
        id: 1,
        name: 'Go',
      }
    ]
  ]
  static gameSquares = []
  constructor(id, name, buyable, price, owned, buildable, builtOn, funds, pricePerHouse, rent, oneHouse, twoHouse, threeHouse, fourHouse, hotel, desc) {
    this.id = id
    this.eleName = id
    this.name = name
    this.buyable = buyable
    this.price = price
    this.owned = owned
    this.buildable = buildable
    this.builtOn = builtOn
    this.funds = funds
    this.pricePerHouse = pricePerHouse
    this.rent = rent
    this.oneHouse = oneHouse
    this.twoHouse = twoHouse
    this.threeHouse = threeHouse
    this.fourHouse = fourHouse
    this.hotel = hotel
    this.desc = desc
    GameSquare.gameSquares.push(this)
  }
  
  createSquare(desiredDiv) {
    let currentSquare = document.createElement('div')
    currentSquare.id = this.name
    currentSquare.setAttribute('name', this.eleName)
    currentSquare.className = 'space'

    if ((this.price !== undefined) && (this.name !== 'electricCompany') && (this.name !== 'waterWorks') && (this.name !== 'incomeTax') && (this.name !== "luxuryTax") && (!this.name.includes('Railroad'))) {
      currentSquare.innerHTML = `<span>${this.name}<span>`
      currentSquare.addEventListener('click', () => {
        this.showSquare()
      })
    } else if ((this.name == 'electricCompany') || (this.name == 'waterWorks') || (this.name == 'incomeTax') || (this.name == "luxuryTax") || (this.name.includes('Railroad'))) {
      currentSquare.addEventListener('click', () => {
        this.showSquare()
      })
    }
    

    if ((this.name == 'newYorkAve') || (this.name == 'tennesseeAve') || (this.name == 'stJamesPlace') || (this.name == 'virginiaAve') || (this.name == 'statesAve') || (this.name == 'stCharlesPlace') || (this.name == 'pennRailroad') || (this.name == 'electricCompany')) {
      currentSquare.addEventListener('mouseenter', () => {
        currentSquare.style.left = '+15px'
        currentSquare.style.cursor = 'pointer'
      })      
      currentSquare.addEventListener('mouseleave', () => {
        currentSquare.style.left = '0px'
        currentSquare.style.cursor = 'default'
      })
    } else if ((this.name == 'pacificAve') || (this.name == 'northCarolinaAve') || (this.name == 'pennAve') || (this.name == 'parkPlace') || (this.name == 'boardWalk') || (this.name == 'shortLineRailroad') || (this.name == 'luxuryTax')) {
      currentSquare.addEventListener('mouseenter', () => {
        currentSquare.style.left = '-15px'
        currentSquare.style.cursor = 'pointer'
      })      
      currentSquare.addEventListener('mouseleave', () => {
        currentSquare.style.left = '0px'
        currentSquare.style.cursor = 'default'
      })
    } else if ((this.name == 'kentuckyAve') || (this.name == 'indianaAve') || (this.name == 'illinoisAve') || (this.name == 'atlanticAve') || (this.name == 'ventnorAve') || (this.name == 'marvinGardens') || (this.name == 'boRailroad') || (this.name == 'waterWorks')) {
      currentSquare.addEventListener('mouseenter', () => {
        currentSquare.style.bottom = '-10px'
        currentSquare.style.cursor = 'pointer'
      })
      currentSquare.addEventListener('mouseleave', () => {
        currentSquare.style.bottom = '0px'
        currentSquare.style.cursor = 'default'
      })
    } else if ((this.name == 'mediterraneanAve') || (this.name == 'balticAve') || (this.name == 'incomeTax') || (this.name == 'readingRailroad') || (this.name == 'orientalAve') || (this.name == 'vermontAve') || (this.name == 'connecticutAve')) {
      currentSquare.addEventListener('mouseenter', () => {
        currentSquare.style.top = '-10px'
        currentSquare.style.cursor = 'pointer'
      })
      currentSquare.addEventListener('mouseleave', () => {
        currentSquare.style.top = '0px'
        currentSquare.style.cursor = 'default'
      })      
    }
    desiredDiv.appendChild(currentSquare)
  }

  showSquare() {
    if (this.buildable) {
      showCard.innerHTML = `
        <h2>${this.name} <a class='close' href="javascript:void(0)">ⓧ<a></h2>
        <h4>Price: $${this.price}</h4>
        <h4>Owned: ${this.owned}</h4>
        <h4>Price perHouse: $${this.pricePerHouse}</h4>
        <h4>Rent: $${this.rent}</h4>
        <h4>Rent with oneHouse: $${this.oneHouse}</h4>
        <h4>Rent with twoHouse: $${this.twoHouse}</h4>
        <h4>Rent with threeHouse: $${this.threeHouse}</h4>
        <h4>Rent with fourHouse: $${this.fourHouse}</h4>
        <h4>Rent with hotel: $${this.hotel}</h4>
      `
    } else if (this.name.includes('Tax')) {
      showCard.innerHTML = `
                            <h2>${this.name}</h2>
                            <h4>${this.desc}</h4>`
    } else if ((this.name.includes('electricCompany')) || (this.name.includes('waterWorks'))) {
      showCard.innerHTML = `
                            <h2>${this.name}</h2>
                            <h4>Price: $${this.price}</h4>
                            <h4>Owned: ${this.owned}</h4>
                            <h4>${this.rent}</h4>`
    } else {
      showCard.innerHTML = `
        <h2>${this.name} <a class='close' href="javascript:void(0)">ⓧ<a></h2>
        <h4>Price: $${this.price}</h4>
        <h4>Owned: ${this.owned}</h4>
        <h4>Rent: $${this.rent}</h4>`
    }
    gameBoard.appendChild(showCard)
  }

  findOwner() {
    for (let x of Player.currentPlayers) {
      for (let y of x.propertiesOwned) {
        if (y.id == this.id) {
          owner = x
        }
      }
    }
  }
}