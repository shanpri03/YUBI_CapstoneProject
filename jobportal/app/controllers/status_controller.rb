class StatusController < ApplicationController

def index
    uid = session[:current_user_id]

    puts "&&&&&&&&&&&"
    puts session[:current_user_id]
    j = Job.joins("INNER JOIN jobdetails ON jobdetails.id = jobs.job_id AND jobs.user_id =#{uid}" )
    p
    render json:j



end
end

