Rails.application.routes.draw do
  resources :games
  resources :players
  resources :high_scores
  resources :shark_tank_cards
  resources :venture_fund_cards
  resources :game_squares
  get '/all_games', to: 'all_games#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
