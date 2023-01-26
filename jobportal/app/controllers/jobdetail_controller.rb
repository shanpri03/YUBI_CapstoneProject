class JobdetailController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        render json: Jobcontent.all
end

    def create
        v=!params[:jobTitle].empty? && !params[:jobDescription].empty? && !params[:companyName].empty?&& !params[:location].empty? &&!params[:jobType].empty? &&!params[:salary].nil? && !params[:postedDate].empty? && !params[:domain].empty?&&!params[:jobCode].empty? &&!params[:skillsRequired].empty?&& params[:applicationStatus].empty?
        if !v
         Jobcontent.create('jobTitle': params[:jobTitle], 
            'jobDescription': params[:jobDescription], 
            'companyName': params[:companyName],
            'location': params[:location], 
            'jobType': params[:jobType], 
            'salary': params[:salary],
            'postedDate': params[:postedDate],
            'domain': params[:domain],
            'jobCode': params[:jobCode],
            'skillsRequired': params[:skillsRequired],
            'applicationStatus': params[:applicationStatus])
         puts p
         render json: "true"
        else
         render json: "false"
    end
end

end
