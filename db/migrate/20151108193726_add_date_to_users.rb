class AddDateToUsers < ActiveRecord::Migration
  def change
    add_column :users, :dob, :date
    # add_column :users, :address, :string
    add_column :users, :phone_number, :integer
  end
end
