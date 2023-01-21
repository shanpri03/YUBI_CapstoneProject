class Jobdetail < ApplicationRecord
     validates :jobcode, presence: true
     validates :jobtitle, presence: true
     validates :location, presence: true
     validates :posteddate, presence: true
     validates :applieddate, presence: true
     validates :status, presence: true
end