class Player {
// money
  // need to be able to subrtract or add to based on value of the square landed on
// game piece
  // need to be able to keep track of where a player is on the board
// properties owned
  // has a price
  // has a mortgage

  constructor(name) {
    this.name = name
    this.money = 1500
    this.propertiesOwned = {}
    this.position = 1

    if (this.position > 40) {
      this.position = 1
    }
  }

  
}