class GamesController < ApplicationController
  def create
    game = Game.create(playerOne: params[:settings][:player][0], playerTwo: params[:settings][:player][1], playerThree: params[:settings][:player][2], playerFour: params[:settings][:player][3], startingCash: params[:settings][:cash])
    render json: game
  end 
end
