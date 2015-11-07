class AddColumnToUser < ActiveRecord::Migration
  def change
    add_column :users, :profile_url, :string
    add_column :users, :uid, :string
    add_column :users, :oauth_token, :string
    add_column :users, :oauth_token_expires, :string
  end
end
