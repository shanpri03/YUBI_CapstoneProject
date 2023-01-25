class JobdetailController < ApplicationController
    def index
        render json: Jobcontent.all
end
end
