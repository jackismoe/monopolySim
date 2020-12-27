class CreateVentureFundCards < ActiveRecord::Migration[6.0]
  def change
    create_table :venture_fund_cards do |t|
      t.text :desc
    end
  end
end
