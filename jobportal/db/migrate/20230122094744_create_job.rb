class CreateJob < ActiveRecord::Migration[7.0]
  def change
    create_table :jobs do |t|
      t.string :jobcode
      t.string :jobtitle
      t.string :location
      t.date :posteddate
      t.date :applieddate
      t.string :status
      t.timestamps
    end
  end
end
