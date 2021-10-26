class CreateArtists < ActiveRecord::Migration[6.1]
  def change
    create_table :artists do |c|
      c.string :name
      c.string :hometown
    end 
  end
end
