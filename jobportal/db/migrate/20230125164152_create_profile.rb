class CreateProfile < ActiveRecord::Migration[7.0]
  def change
    create_table :profiles do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :contact
      t.string :address
      t.string :about
      t.string :prof_pic
      t.string :resume_link
      t.string :current_comp
      t.integer :ctc
      t.integer :experience
      t.string :current_role
      t.string :skills
      t.integer :exp_salary
      t.string :pref_loc
      t.integer :userid, foreign_key: true
      t.timestamps
    end
  end
end
