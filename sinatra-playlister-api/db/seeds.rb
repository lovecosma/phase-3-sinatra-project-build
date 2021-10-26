Track.destroy_all
Artist.destroy_all


artist1 = Artist.create(name: "Kero Kero Bonito", hometown: "UK")
artist2 = Artist.create(name: "Ariel Pink", hometown: "Los Angelos")

track1 = Track.create(title: "Well Rested", artist_id: artist1.id)
track2 = Track.create(title: "Talking all the Time", artist_id: artist2.id)


puts "seeded."