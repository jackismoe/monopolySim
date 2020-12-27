class CreatePlayers < ActiveRecord::Migration[6.0]
  def change
    create_table :players do |t|
      t.string :name
      t.integer :gamesPlayed

      add_reference :high_scores, index: true, foreign_key: true
    end
  end
end
