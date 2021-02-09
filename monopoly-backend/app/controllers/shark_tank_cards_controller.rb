class SharkTankCardsController < ApplicationController
  def index
    allShark = SharkTankCard.all
    render json: allShark
  end
end
