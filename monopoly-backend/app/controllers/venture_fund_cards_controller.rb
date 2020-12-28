class VentureFundCardsController < ApplicationController
  def index
    allVenture = VentureFundCard.all
    render json: allVenture
  end 
end
