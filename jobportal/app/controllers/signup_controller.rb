require 'bcrypt'
class SignupController < ApplicationController
skip_before_action :verify_authenticity_token
    def index 
    u = User.all
    render html: "User page"
    end    

    def create
    v = !params[:email] and !params[:password]
    puts params[:password]
     uexists = User.find_by("email": params[:email])
    if !v
        if uexists.nil?
        u = User.create('email': params[:email],'password': params[:password])
        render json: "true"
        else
        render json: "false"
        end
    else
        render json: "false"
    end
    end    
end
