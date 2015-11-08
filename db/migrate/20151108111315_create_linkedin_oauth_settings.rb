class CreateLinkedinOauthSettings < ActiveRecord::Migration
  def change
    create_table :linkedin_oauth_settings do |t|
      t.string :token
      t.string :secret
      t.references :user, index: true

      t.timestamps null: false
    end
  end
end
