class HighScoresController < ApplicationController
  def index
    allScores = HighScore.all
    render json: allScores
  end
end
