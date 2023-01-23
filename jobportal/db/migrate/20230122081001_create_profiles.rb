class CreateProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :profiles do |t|
      t.string :email
      t.string :name
      t.string :phno
      t.string :currentcomp
      t.string :currentrole
      t.string :about
      t.string :profpic
      t.string :profcv
      t.string :skills
      t.integer :userid, foreign_key: true
      t.timestamps
    end
  end
end
