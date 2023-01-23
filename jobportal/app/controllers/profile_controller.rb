class ProfileController < ApplicationController
    skip_before_action :verify_authenticity_token
 def create
    v =  !params[:email] and !params[:name] and !params[:phno] and !params[:currentcomp] and !params[:currentrole] and !params[:about] and !params[:profpic] and !params[:profcv] and !params[:skills] and !params[:userid] 
 if !v
    u = User.find_by("email": params[:email])
    if !u.nil?
    p = Profile.create('email': params[:email],'name': params[:name],'phno': params[:phno],'currentcomp': params[:currentcomp],'currentrole': params[:currentrole],'about': params[:about],'profpic': params[:profpic],'skills': params[:skills],'userid': u.id)
    # p.upload = params[:profcv]
    # p.save!
    # p.upload.url # => '/url/to/file.png'
    # p.upload.current_path # => 'path/to/file.png'
    # p.upload_identifier # => 'file.png
    render json:"true"
    else
        render json:"false"
    end    
 else
    render json:"false"
 end
 end


end
