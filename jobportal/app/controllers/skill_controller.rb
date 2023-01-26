class SkillController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
    v = !params[:skill_name].empty?
    if v 
    s = Skill.create("skill_name": params[:skill_name])
    render json: "true"
    else
    render json: "false"
    end
    end 

end
