Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :signup
  resources :login, only: [:create,:show,:update,:destroy]
  get 'login', to:"login#index"
  post 'login', to:"login#create"
  get 'logout', to:"login#destroy"
resources :joblist
resources :profile, only: [:create,:show,:update,:destroy]
get 'userprofile',to:"profile#index"
get 'profile',to:"profile#create"
resources :jobdetail
resources :skill
end
