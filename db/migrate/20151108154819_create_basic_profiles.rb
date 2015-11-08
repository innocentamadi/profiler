class CreateBasicProfiles < ActiveRecord::Migration
  def change
    create_table :basic_profiles do |t|
      t.string :first_name
      t.string :last_name
      t.string :formatted_name
      t.string :headline
      t.string :location
      t.string :industry
      t.string :summary
      t.string :specialities
      t.string :picture_url
      t.string :public_profile_url
      t.references :user, index: true

      t.timestamps null: false
    end
  end
end
