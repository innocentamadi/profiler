class AddLanguageToRepo < ActiveRecord::Migration
  def change
    add_column :repos, :language, :string
  end
end
