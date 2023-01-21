class JbdetailsController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index 
    render json: Jobdetail.all
    end

    def show
        puts params[:id]
        h = Jobdetail.exists?(params[:id])
        if h
        h = Jobdetail.find(params[:id])
        render json: h
        else
        render html:"Job not found"     
        end
    end

    def create
        v=!params[:jobcode].empty?, !params[:jobtitle].empty?, !params[:location].empty?, !params[:posteddate].empty?, !params[:applieddate].empty?, !params[:status].empty?
        if(v)
         Jobdetail.create('jobcode': params[:jobcode], 
            'jobtitle': params[:jobtitle], 
            'location': params[:location],
            'posteddate': params[:posteddate], 
            'applieddate': params[:applieddate], 
            'status': params[:status])
         puts p
         render json: "Job details added successfully"
        else
         render json: "Job details not added"
        end
    end
    
    def update
        b = Jobdetail.find(params[:id].to_i)
        b.update('jobcode': params[:jobcode], 'jobtitle': params[:jobtitle], 'location': params[:location],'posteddate': params[:posteddate], 'applieddate': params[:applieddate], 'status': params[:status])
        render json: "Job details Updated"
    end

    def destroy
        a = Jobdetail.find(params[:id].to_i)
        a.destroy
        render json: "Job details deleted successfully"
    end

    
end
