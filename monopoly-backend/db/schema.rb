# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_01_02_164631) do

  create_table "game_squares", force: :cascade do |t|
    t.string "spaceNumber"
    t.string "name"
    t.boolean "buyable"
    t.integer "price"
    t.integer "owned"
    t.boolean "buildable"
    t.boolean "builtOn"
    t.integer "funds"
    t.integer "pricePerHouse"
    t.integer "rent"
    t.integer "oneHouse"
    t.integer "twoHouse"
    t.integer "threeHouse"
    t.integer "fourHouse"
    t.integer "hotel"
    t.integer "houses"
    t.integer "hotels"
    t.text "desc"
  end

  create_table "games", force: :cascade do |t|
    t.string "playerOne"
    t.string "playerTwo"
    t.string "playerThree"
    t.string "playerFour"
    t.integer "startingCash"
    t.integer "winner"
  end

  create_table "high_scores", force: :cascade do |t|
    t.string "name"
    t.integer "gamesPlayed"
    t.integer "propertiesOwned"
    t.integer "opponents"
    t.integer "startingCash"
    t.integer "totalCash"
    t.integer "cashSpent"
    t.integer "leftOverCash"
    t.integer "player_id", null: false
    t.index ["player_id"], name: "index_high_scores_on_player_id"
  end

  create_table "players", force: :cascade do |t|
    t.string "name"
    t.integer "currentPosition"
    t.boolean "isTurn"
    t.integer "cash"
  end

  create_table "shark_tank_cards", force: :cascade do |t|
    t.text "desc"
    t.boolean "drawn"
  end

  create_table "venture_fund_cards", force: :cascade do |t|
    t.text "desc"
    t.boolean "drawn"
  end

  add_foreign_key "high_scores", "players"
end
