class CreateTracks < ActiveRecord::Migration[6.1]
  def change
    create_table :tracks do |c|
      c.string :title
      c.integer :artist_id
    end 
  end
end
