class CreateMovies < ActiveRecord::Migration[5.0]
  def change
    create_table :movies do |t|
      t.string :title
      t.decimal :rating
      t.string :description
      t.integer :year
      t.string :director
      t.string :stars
      t.string :image

      t.timestamps
    end
  end
end
