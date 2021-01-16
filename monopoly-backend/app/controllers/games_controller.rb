class GamesController < ApplicationController
  def index
    playerOne = Player.find_by(gameId: Game.last.id, name: Game.last.playerOne)
    playerTwo = Player.find_by(gameId: Game.last.id, name: Game.last.playerTwo)
    playerThree = Player.find_by(gameId: Game.last.id, name: Game.last.playerThree)
    playerFour = Player.find_by(gameId: Game.last.id, name: Game.last.playerFour)

    game = {
      :playerOne => playerOne,
      :playerTwo => playerTwo,
      :playerThree => playerThree,
      :playerFour => playerFour
    }
    render json: game
  end

  def create
    newGame = Game.create

    playerOne = Player.create(playerId: 1, gameId: newGame.id, name: params[:settings][:player][0], currentPosition: 1, vfJailCard: false, stJailCard: false, turnsToSkip: 0, isTurn: true, cash: params[:settings][:cash])
    playerTwo = Player.create(playerId: 2, gameId: newGame.id, name: params[:settings][:player][1], currentPosition: 1, vfJailCard: false, stJailCard: false, turnsToSkip: 0, isTurn: false, cash: params[:settings][:cash])
    playerThree = Player.create(playerId: 3, gameId: newGame.id, name: params[:settings][:player][2], currentPosition: 1, vfJailCard: false, stJailCard: false, turnsToSkip: 0, isTurn: false, cash: params[:settings][:cash])
    playerFour = Player.create(playerId: 4, gameId: newGame.id, name: params[:settings][:player][3], currentPosition: 1, vfJailCard: false, stJailCard: false, turnsToSkip: 0, isTurn: false, cash: params[:settings][:cash])

    newGame.playerOne = playerOne.name
    newGame.playerTwo = playerTwo.name
    newGame.playerThree = playerThree.name
    newGame.playerFour = playerFour.name
    newGame.startingCash = params[:settings][:cash]
    newGame.save

    render json: newGame
  end 

  def update
    # players
    allPlayersState = params[:currentGame][:players]
    allPlayersState.each do |playerState|
      playerData = Player.find_by(name: playerState[:name], gameId: playerState[:gameId])
      playerData.update(currentPosition: playerState[:currentPosition], isTurn: playerState[:isTurn], cash: playerState[:cash])
      playerData.save
    end
    
    # squares
    allSquaresState = params[:currentGame][:squares]
    allSquaresState.each do |squareState|
      squareData = GameSquare.find_by(name: squareState[:name])
      squareData.update(owned: squareState[:owned], builtOn: squareState[:builtOn], funds: squareState[:funds], houses: squareData[:houses], hotels: squareData[:hotels])
      squareData.save
    end

    playerOne = Player.find_by(gameId: Game.last.id, name: Game.last.playerOne)
    playerTwo = Player.find_by(gameId: Game.last.id, name: Game.last.playerTwo)
    playerThree = Player.find_by(gameId: Game.last.id, name: Game.last.playerThree)
    playerFour = Player.find_by(gameId: Game.last.id, name: Game.last.playerFour)
    
    game = {
      :playerOne => playerOne,
      :playerTwo => playerTwo,
      :playerThree => playerThree,
      :playerFour => playerFour,
      :squares => GameSquare.all,
      :gameId => Game.last.id
    }

    render json: game
  end
end
