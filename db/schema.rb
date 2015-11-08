# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151108111820) do

  create_table "basic_profiles", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "formatted_name"
    t.string   "headline"
    t.string   "location"
    t.string   "industry"
    t.string   "summary"
    t.string   "specialities"
    t.string   "picture_url"
    t.string   "public_profile_url"
    t.integer  "user_id"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
  end

  add_index "basic_profiles", ["user_id"], name: "index_basic_profiles_on_user_id"

  create_table "linkedin_oauth_settings", force: :cascade do |t|
    t.string   "token"
    t.string   "secret"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "linkedin_oauth_settings", ["user_id"], name: "index_linkedin_oauth_settings_on_user_id"

  create_table "positions", force: :cascade do |t|
    t.string   "title"
    t.string   "summary"
    t.date     "start_date"
    t.date     "end_date"
    t.boolean  "is_current"
    t.string   "company"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "positions", ["user_id"], name: "index_positions_on_user_id"

  create_table "repos", force: :cascade do |t|
    t.string   "name"
    t.string   "description"
    t.integer  "user_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "nationality"
    t.string   "address"
    t.string   "bio"
    t.string   "avatar"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
    t.string   "profile_url"
    t.string   "uid"
    t.string   "oauth_token"
    t.string   "oauth_token_expires"
    t.string   "provider"
    t.string   "email"
  end

end
