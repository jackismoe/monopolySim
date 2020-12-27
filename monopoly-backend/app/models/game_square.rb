class GameSquare < ApplicationRecord
  validates_presence_of :buyable, :price, :owned , :buildable, :builtOn, :pricePerHouse, :rent, :oneHouse, :twoHouse, :threeHouse, :fourHouse, :hotel, :desc, {allow_blank: true}
end

