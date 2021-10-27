class Artist < ActiveRecord::Base

    has_many :tracks
    validates :name, uniqueness: true
    
    def full_name
        self.first_name + " " + self.last_name 
    end 
end 