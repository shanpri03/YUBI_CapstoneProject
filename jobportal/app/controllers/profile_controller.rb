class ProfileController < ApplicationController
    skip_before_action :verify_authenticity_token

  def index
   current_user = User.find_by_id(session[:current_user_id])
   if !current_user.nil?
      puts  session[:current_user_id]
      p =Profile.find_by("userid": session[:current_user_id])
      render json:[p]
   else
      render json: false
   end
  end
 def create
   uexists = User.find_by("email": params[:email])
   if !uexists.nil?
    v =  !params[:first_name].nil? and !params[:last_name].nil? and !params[:email].nil? and !params[:contact].nil? and !params[:address].nil? and !params[:about].empty? and !params[:prof_pic].empty? and !params[:current_comp].empty? and !params[:ctc].nil? and !params[:experience].nil? 
    !params[:current_role].nil? and !params[:skills].nil? and !params[:exp_salary].nil? and !params[:pref_loc].nil? 
    if v
    u = User.find_by("email": params[:email])
    puts params[:skills]
    if !u.nil?
    p = Profile.create('first_name': params[:first_name],'last_name': params[:last_name],'email': params[:email],'contact': params[:contact],'address': params[:address],'about': params[:about],'prof_pic': params[:prof_pic],'current_comp': params[:current_comp],'ctc': params[:ctc],'experience': params[:experience],'current_role': params[:current_role],'skills': params[:skills],'exp_salary': params[:exp_salary],'exp_salary': params[:exp_salary],'pref_loc': params[:pref_loc],'userid': u.id)
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
