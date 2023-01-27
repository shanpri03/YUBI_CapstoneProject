class JobdetailController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        render json: Jobcontent.all
end

    def create
        time = Time.now
        v=!params[:jobTitle].empty? && !params[:jobDescription].empty? && !params[:companyName].empty?&& !params[:location].empty? &&!params[:jobType].empty? &&!params[:salary].nil? && !params[:postedDate].empty? && !params[:domain].empty?&&!params[:jobCode].empty? &&!params[:skillsRequired].empty?&& params[:applicationStatus].empty?
        if !v
            jc = Jobcontent.create('jobTitle': params[:jobTitle], 
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

            Job.create('jobcode': params[:jobCode], 
                'jobtitle':  params[:jobTitle], 
                'location': params[:location],
                'posteddate': time, 
                'applieddate': time, 
                'status': "pending",
                 'user_id': params[:user_id],
                'job_id': jc.id)

         puts p
         render json: "true"
        else
         render json: "false"
    end
end

end
