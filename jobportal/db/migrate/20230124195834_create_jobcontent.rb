class CreateJobcontent < ActiveRecord::Migration[7.0]
  def change
    create_table :jobcontents do |t|
      t.string :jobTitle
       t.string :jobDescription
       t.string :companyName
       t.string :location
       t.string :jobType  
       t.integer :salary 
       t.date :postedDate
       t.string :domain
       t.string  :jobCode
       t.string :skillsRequired
       t.string :applicationStatus

      t.timestamps
    end
  end
end
