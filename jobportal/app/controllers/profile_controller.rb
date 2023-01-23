class ProfileController < ApplicationController
    skip_before_action :verify_authenticity_token
    def create
        v = !params[:email].empty? and !params[:name].empty? and !params[:phno].empty? and !params[:currentcomp].empty? and !params[:currentrole].empty? and !params[:about].empty? and !params[:profcv].empty? and !params[:profpic].empty? and !params[:profpic].empty?
        puts params[:skills]
        u = User.find_by("email": params[:email])
        if !u.nil?
        if v
            p = Profile.create('email': u.email,'name': params[:name],'phno': params[:phno],'currentcomp': params[:currentcomp],'currentrole': params[:currentrole],'about': params[:about],'profcv': params[:profcv],'profpic': params[:profpic],'skills': params[:skills],'userid': u.id)
        render json: "true"
        else
            render json: "false"
        end
    else
        render json: "false"
    end
 end    
end
