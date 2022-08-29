class CreateLikes < ActiveRecord::Migration[7.0]
  def change
    create_table :likes do |t|
      t.references :pet, foreign_key: true
      t.references :post, foreign_key: true, index: false
      t.index [:post_id, :pet_id], unique: true
      t.timestamps
    end
  end
end
