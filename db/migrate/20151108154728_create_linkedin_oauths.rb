class CreateLinkedinOauths < ActiveRecord::Migration
  def change
    create_table :linkedin_oauths do |t|
      t.string :token
      t.string :secret
      t.references :user, index: true

      t.timestamps null: false
    end
  end
end
