class ProfileController < ApplicationController
    skip_before_action :verify_authenticity_token
 def create
   current_user = User.find_by_id(session[:current_user_id])
    v =  !params[:first_name].empty? and !params[:last_name].empty? and !params[:email].empty? and !params[:contact].empty? and !params[:address].empty? and !params[:about].empty? and !params[:prof_pic].empty? and !params[:current_comp].empty? and !params[:ctc].empty? and !params[:experience].empty? 
    !params[:current_role].empty? and !params[:skills].empty? and !params[:exp_salary].empty? and !params[:pref_loc].empty? 
   if !current_user.nil?
    if v
    u = User.find_by("email": params[:email])
    if !u.nil?
    p = Profile.create('first_name': params[:first_name],'last_name': params[:last_name],'email': params[:email],'contact': params[:contact],'address': params[:address],'about': params[:about],'prof_pic ': params[:prof_pic ],'current_comp': params[:current_comp],'ctc': params[:ctc],'experience': params[:experience],'current_role': params[:current_role],'skills': params[:skills],'exp_salary': params[:exp_salary],'exp_salary': params[:exp_salary],'pref_loc': params[:pref_loc],'userid': u.id)
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
else
   render json:"Please signup"
end
 end


end
