class AddLikesToTracks < ActiveRecord::Migration[6.1]
  def change
    add_column :tracks, :likes, :integer, :default => 0
  end
end
