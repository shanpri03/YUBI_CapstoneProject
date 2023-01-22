require 'bcrypt'
class LoginController < ApplicationController
    skip_before_action :verify_authenticity_token

def index
current_user = User.find_by_id(session[:current_user_id])
if !current_user.nil?
render json:"true"
else
render json:"false"
end
end 

def create
u = User.find_by('email': params[:email])
if u.nil?
    render json:"false"
else
 if u.authenticate(params[:password])
    session[:current_user_id]=u.id
    render json:"true"
 else
    render json:"false"
end 
end
end

def destroy
session.delete(:current_user_id)
render json:"true"
end
end
