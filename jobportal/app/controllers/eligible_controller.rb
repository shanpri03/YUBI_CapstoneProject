class EligibleController < ApplicationController

  def index
    uid =  session[:current_user_id]
    eljobs=[]
    p = Profile.find_by("userid": uid);
    jobs = Jobdetail.all
    str ="java,.net"
    skill = str.split(",")
    jobs.each{|j|
        skill.each { |s|
            jskills =j.skills_required
            jskills.downcase.include? s.downcase
            eljobs.push(jobs)
        }

       
    }
    render json: eljobs.uniq
  end

end
