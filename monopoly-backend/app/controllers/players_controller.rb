class PlayersController < ApplicationController
  def index
    allPlayers = Player.all
    render json: allPlayers
  end

  def create
    byebug
  end
end
