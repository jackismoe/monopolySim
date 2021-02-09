class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.string :playerOne
      t.string :playerTwo
      t.string :playerThree
      t.string :playerFour
      t.integer :startingCash
      t.integer :winner
    end
  end
end
