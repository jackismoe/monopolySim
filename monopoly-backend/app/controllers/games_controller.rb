class GamesController < ApplicationController

  def index
    players = {
      :playerOne => {
        :name => Game.last.playerOne,
        :currentPosition => 1,
        :cash => Game.last.startingCash
      },
      :playerTwo => {
        :name => Game.last.playerTwo,
        :currentPosition => 1,
        :cash => Game.last.startingCash
      },
      :playerThree => {
        :name => Game.last.playerThree,
        :currentPosition => 1,
        :cash => Game.last.startingCash
      },
      :playerFour => {
        :name => Game.last.playerFour,
        :currentPosition => 1,
        :cash => Game.last.startingCash
      }
    }

    render json: players
  end
  def create
    game = Game.create(playerOne: params[:settings][:player][0], playerTwo: params[:settings][:player][1], playerThree: params[:settings][:player][2], playerFour: params[:settings][:player][3], startingCash: params[:settings][:cash])
    render json: game
  end 
end
