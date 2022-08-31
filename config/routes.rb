Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: {format: :json} do
    resources :pets, only: [:index, :create, :show]
    resources :users, only: [:index, :create, :show]
    resource :session, only: [:create, :destroy, :show]
  end
end
