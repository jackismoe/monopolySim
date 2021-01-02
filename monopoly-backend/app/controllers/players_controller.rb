class PlayersController < ApplicationController
  def index
    allPlayers = Player.all
    render json: allPlayers
  end

  # def create
  #   playerArray = []
  #   params[:settings][:player].each do |player|
  #     playerArray.push(Player.create(name: player, cash: params[:settings][:cash]))
  #   end
  #   # byebug
  #   render json: playerArray
  # end
end
