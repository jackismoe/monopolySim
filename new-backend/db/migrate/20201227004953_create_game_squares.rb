class CreateGameSquares < ActiveRecord::Migration[6.0]
  def change
    create_table :game_squares do |t|
      t.string :spaceNumber
      t.string :name
      t.integer :buyable
      t.integer :price
      t.boolean :owned
      t.boolean :buildable
      t.boolean :builtOn
      t.integer :funds
      t.integer :pricePerHouse
      t.integer :rent
      t.integer :oneHouse
      t.integer :twoHouse
      t.integer :threeHouse
      t.integer :fourHouse
      t.integer :hotel
      t.text :desc
    end
  end
end
