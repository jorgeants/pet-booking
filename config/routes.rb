Rails.application.routes.draw do
  resources :professionals
  root to: 'application#index'
end
