class CreateJobdetail < ActiveRecord::Migration[7.0]
  def change
    create_table :jobdetails do |t|
      t.string :job_title
      t.string :job_description
      t.string :company_name
      t.string :location
      t.string :job_type  
      t.integer :salary 
      t.date :posted_date
      t.string :domain
      t.string  :job_code
      t.string :skills_required
      t.string :application_status
      t.timestamps
    end
  end
end
