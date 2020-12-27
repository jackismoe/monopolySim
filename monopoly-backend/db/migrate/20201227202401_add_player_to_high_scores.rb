class AddPlayerToHighScores < ActiveRecord::Migration[6.0]
  def change
    add_reference :high_scores, :player, null: false, foreign_key: true
  end
end
