class CreatePlayers < ActiveRecord::Migration[6.0]
  def change
    create_table :players do |t|
      t.string :gameId
      t.integer :playerId
      t.string :name
      t.integer :currentPosition
      t.boolean :isTurn
      t.integer :turnsToSkip
      t.boolean :vfJailCard
      t.boolean :stJailCard
      t.integer :cash
    end
  end
end
