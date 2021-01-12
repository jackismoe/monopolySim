class GamesController < ApplicationController
  def index
    game = {
      :gameId => Game.last.id,
      :players => {
        :playerOne => {
          :id => 1,
          :name => Game.last.playerOne,
          :currentPosition => 1,
          :isTurn => true,
          :cash => Game.last.startingCash
        },
        :playerTwo => {
          :id => 2,
          :name => Game.last.playerTwo,
          :currentPosition => 1,
          :isTurn => false,
          :cash => Game.last.startingCash
        },
        :playerThree => {
          :id => 3,
          :name => Game.last.playerThree,
          :currentPosition => 1,
          :isTurn => false,
          :cash => Game.last.startingCash
        },
        :playerFour => {
          :id => 4,
          :name => Game.last.playerFour,
          :currentPosition => 1,
          :isTurn => false,
          :cash => Game.last.startingCash
        }
      }
    }
    render json: game
  end

  def create
    newGame = Game.create(playerOne: Player.create(name: params[:settings][:player][0]).name, playerTwo: Player.create(name: params[:settings][:player][1]).name, playerThree: Player.create(name: params[:settings][:player][2]).name, playerFour: Player.create(name: params[:settings][:player][3]).name, startingCash: params[:settings][:cash])

    render json: newGame
  end 

  def update
    # players
    allPlayersState = params[:currentGame][:players]
    allPlayersState.each do |playerState|
      playerData = Player.find_by(name: playerState[:name])
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
  end
end
