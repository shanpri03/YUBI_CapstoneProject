class AppliedController < ApplicationController

    def index
        uid = session[:current_user_id]
        puts "&&&&&&&&&&&"
        puts session[:current_user_id]
        j = Jobdetail.joins("INNER JOIN jobs ON jobs.job_id = jobdetails.id AND jobs.status= 'applied' AND jobs.user_id=#{uid} ")
        render json:j   
    end

end
