class AddForksUrlToRepos < ActiveRecord::Migration
  def change
    add_column :repos, :forks_url, :string
  end
end
