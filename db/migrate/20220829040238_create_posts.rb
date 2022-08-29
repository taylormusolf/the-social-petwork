class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.string :body, null: false
      t.references :author, foreign_key:{to_table: :pets}
      t.timestamps
    end
  end
end
