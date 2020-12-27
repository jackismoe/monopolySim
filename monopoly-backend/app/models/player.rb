class Player < ApplicationRecord
  has_many :highScores
  has_secure_password
end
