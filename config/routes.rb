Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: {format: :json} do
    resources :pets, only: [:index, :create, :show, :destroy]
    resources :users, only: [:index, :create, :show]
    resource :session, only: [:create, :destroy, :show]

    get '/users/:owner_id/pets', to: "pets#index"
  end
  get '*path', to: "static_pages#frontend_index"
end
