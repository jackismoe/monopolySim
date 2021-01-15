class CreateSharkTankCards < ActiveRecord::Migration[6.0]
  def change
    create_table :shark_tank_cards do |t|
      t.text :desc
      t.string :deck
      t.boolean :drawn
    end
  end
end
