class AllGamesController < ApplicationController
  def index
    render json: Game.all
  end
end
