class CreatePlayers < ActiveRecord::Migration[6.0]
  def change
    create_table :players do |t|
      t.string :name
      t.integer :currentPosition
      t.boolean :isTurn
      t.integer :cash
    end
  end
end
