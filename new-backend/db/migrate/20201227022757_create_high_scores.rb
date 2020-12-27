class CreateHighScores < ActiveRecord::Migration[6.0]
  def change
    create_table :high_scores do |t|
      t.string  :name
      t.integer :gamesPlayed
      t.integer :propertiesOwned
      t.integer :opponents
      t.integer :startingCash
      t.integer :totalCash
      t.integer :cashSpent
      t.integer :leftOverCash

      add_reference :players, index: true, foreign_key: true
    end
  end
end
