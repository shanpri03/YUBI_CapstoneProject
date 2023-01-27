class JoblistController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index 
    render json: Job.all
    end

    def show
        puts params[:id]
        h = Job.exists?(params[:id])
        if h
        h = Job.find(params[:id])
        render json: h
        else
        render html:"Job not found"     
        end
    end

    def create
        time = Time.new
        current_user = User.find_by_id(session[:current_user_id])
        v=!params[:jobcode].empty? and !params[:jobtitle].empty? and !params[:location].empty? and !params[:posteddate].empty? and !params[:applieddate].empty? and !params[:status].empty?   and !params[:job_id].nil?
        if(v)
        if j.nil?
        j = Jobdetail.find_by_id(params[:job_id])
         Job.create('jobcode': j.job_code, 
            'jobtitle': j.job_title, 
            'location': j.location,
            'posteddate': j.created_at, 
            'applieddate': time, 
            'status': params[:status],
             'user_id': params[:user_id],
            'job_id': params[:job_id])
         puts p
         render json: "Job details added successfully"
         else
            render json: "Job details not added"
         end
        else
         render json: "Job details not added"
        end
    end
    
    def update
        b = Job.find_by(:job_id=> params[:job_id],:user_id=> params[:user_id])
        if !b.nil?
        b.update('status':"applied")
        render json: "Job details Updated"
        else
        render json: "false"
        end
    end

    def destroy
        a = Job.find(params[:id].to_i)
        a.destroy

        render json: "Job details deleted successfully"
    end
end
