class CreatePets < ActiveRecord::Migration[7.0]
  def change
    create_table :pets do |t|
      t.string :name, null: false
      t.references :owner, foreign_key:{to_table: :users}
      t.string :species, null: false
      t.string :bio
      t.date :birthdate
      t.timestamps
    end
  end
end
