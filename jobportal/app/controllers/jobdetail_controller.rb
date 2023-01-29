class JobdetailController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        render json: Jobdetail.all
end

    def create
        time = Time.now
        v=!params[:job_title].empty? && !params[:job_description].empty? && !params[:company_name].empty?&& !params[:location].empty? &&!params[:job_type].empty? &&!params[:salary].nil? && !params[:posted_date].empty? && !params[:domain].empty?&&!params[:job_code].empty? &&!params[:skills_required].empty?&& params[:application_status].empty?
        if !v
            jc = Jobdetail.create('job_title': params[:job_title], 
            'job_description': params[:job_description], 
            'company_name': params[:company_name],
            'location': params[:location], 
            'job_type': params[:job_type], 
            'salary': params[:salary],
            'posted_date': params[:posted_date],
            'domain': params[:domain],
            'job_code': params[:job_code],
            'skills_required': params[:skills_required],
            'application_status': params[:application_status])

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

 def update
    jc =Jobdetail.find_by_id(params[:id])
    v=!params[:job_title].empty? && !params[:job_description].empty? && !params[:company_name].empty?&& !params[:location].empty? &&!params[:job_type].empty? &&!params[:salary].nil? && !params[:posted_date].empty? && !params[:domain].empty?&&!params[:job_code].empty? &&!params[:skills_required].empty?&& params[:application_status].empty?
    if !v
        jc = jc.update('job_title': params[:job_title], 
        'job_description': params[:job_description], 
        'company_name': params[:company_name],
        'location': params[:location], 
        'job_type': params[:job_type], 
        'salary': params[:salary],
        'posted_date': params[:posted_date],
        'domain': params[:domain],
        'job_code': params[:job_code],
        'skills_required': params[:skills_required],
        'application_status': params[:application_status])
     puts p
     render json: "true"
    else
     render json: "false"
end
 end
 def destroy
    a = Jobdetail.find(params[:id].to_i)
    a.destroy
    render json: "Job details deleted successfully"
end

end
