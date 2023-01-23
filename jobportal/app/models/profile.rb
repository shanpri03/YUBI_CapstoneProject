class Profile < ApplicationRecord
    mount_uploader :upload, CvUploader
  
end
