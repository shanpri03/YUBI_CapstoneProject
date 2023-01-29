class StatusController < ApplicationController
    skip_before_action :verify_authenticity_token

def index
    uid = session[:current_user_id]

    puts "&&&&&&&&&&&"
    puts session[:current_user_id]
    j = Job.joins("INNER JOIN jobdetails ON jobdetails.id = jobs.job_id AND jobs.user_id =#{uid}" )
    p
    render json:j
end

def create
    time = Time.new
    current_user = User.find_by_id(session[:current_user_id])
    # v=!params[:jobcode].empty? and !params[:jobtitle].empty? and !params[:location].empty? and !params[:posteddate].empty? and !params[:applieddate].empty? and !params[:status].empty?   and !params[:job_id].nil?
    if(current_user)
    j = Jobdetail.find_by_id(params[:job_id])
    jc= Job.find_by(:job_id=> params[:job_id],:user_id=>session[:current_user_id] )
    if !current_user.nil? 
    if jc.nil?
     Job.create('jobcode': j.job_code, 
        'jobtitle': j.job_title, 
        'location': j.location,
        'posteddate': j.created_at, 
        'applieddate': time, 
        'status': 'applied',
         'user_id': session[:current_user_id],
        'job_id': params[:job_id])
     puts p
     render json: "Job details added successfully"
     else
        render json: "Job details not added"
     end
    else
     render json: "Job details not added"
    end
else
    jc.update('status': 'applied','user_id': session[:current_user_id] )
    render json: "Job details updated"
end

end

end

