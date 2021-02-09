class GameSquaresController < ApplicationController
  def index
    allSquares = GameSquare.all
    render json: allSquares
  end
end
