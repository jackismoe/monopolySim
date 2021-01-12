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
    playerOneState = params[:currentGame][:players][0]
    playerTwoState = params[:currentGame][:players][1]
    playerThreeState = params[:currentGame][:players][2]
    playerFourState = params[:currentGame][:players][3]

    playerOneData = Player.find_by(name: playerOneState[:name])
    playerTwoData = Player.find_by(name: playerTwoState[:name])
    playerThreeData = Player.find_by(name: playerThreeState[:name])
    playerFourData = Player.find_by(name: playerFourState[:name])

    playerOneData.update(currentPosition: playerOneState[:currentPosition], isTurn: playerOneState[:isTurn], cash: playerOneState)
    playerTwoData.update(currentPosition: playerTwoState[:currentPosition], isTurn: playerTwoState[:isTurn], cash: playerTwoState)
    playerThreeData.update(currentPosition: playerThreeState[:currentPosition], isTurn: playerThreeState[:isTurn], cash: playerThreeState)
    playerFourData.update(currentPosition: playerFourState[:currentPosition], isTurn: playerFourState[:isTurn], cash: playerFourState)

    byebug
  end
end
