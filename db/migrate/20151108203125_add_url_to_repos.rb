class AddUrlToRepos < ActiveRecord::Migration
  def change
    add_column :repos, :url, :string
  end
end
