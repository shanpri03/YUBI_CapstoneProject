# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_01_26_162458) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "candapplications", force: :cascade do |t|
    t.integer "userid"
    t.integer "jobcode"
    t.date "applied_date"
    t.string "status"
    t.string "location"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "jobcontents", force: :cascade do |t|
    t.string "jobTitle"
    t.string "jobDescription"
    t.string "companyName"
    t.string "location"
    t.string "jobType"
    t.integer "salary"
    t.date "postedDate"
    t.string "domain"
    t.string "jobCode"
    t.string "skillsRequired"
    t.string "applicationStatus"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "jobs", force: :cascade do |t|
    t.string "jobcode"
    t.string "jobtitle"
    t.string "location"
    t.date "posteddate"
    t.date "applieddate"
    t.string "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.integer "job_id"
  end

  create_table "profiles", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "contact"
    t.string "address"
    t.string "about"
    t.string "prof_pic"
    t.string "resume_link"
    t.string "current_comp"
    t.integer "ctc"
    t.integer "experience"
    t.string "current_role"
    t.string "skills"
    t.integer "exp_salary"
    t.string "pref_loc"
    t.integer "userid"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "skills", force: :cascade do |t|
    t.string "skill_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.string "user_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
