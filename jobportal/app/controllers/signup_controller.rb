require 'bcrypt'
class SignupController < ApplicationController
skip_before_action :verify_authenticity_token
    def index 
    u = User.all
    render html: "User page"
    end    
    def create
    v = !params[:email].empty? and !params[:password].empty? 
    puts params[:password]
     uexists = User.find_by("email": params[:email])
    if v
        if uexists.nil?
        u = User.create('email': params[:email],'password': params[:password],'user_type': "working")
        render json: "true"
        else
        render json: "false"
        end
    else
        render json: "false"
    end
    end    
end
