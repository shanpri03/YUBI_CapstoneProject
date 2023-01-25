class CreateCandapplications < ActiveRecord::Migration[7.0]
  def change
    create_table :candapplications do |t|
      t.integer :userid
      t.integer :jobcode
      t.date :applied_date
      t.string :status
      t.string :location
      t.timestamps
    end
  end
end
