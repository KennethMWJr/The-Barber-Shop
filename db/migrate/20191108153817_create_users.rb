class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :client
      t.string :phone
      t.string :email
      t.references :barber, null: false, foreign_key: true

      t.timestamps
    end
  end
end
