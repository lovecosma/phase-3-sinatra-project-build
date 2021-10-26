class TracksController < ApplicationController


    # Index
    get "/tracks" do 
        Track.all.to_json(:include => :artist, :except => :artist_id)
    end 

    # Create
    post "/tracks" do 
        artist = Artist.find_or_create_by(name: params[:artist_name], hometown: params[:artist_hometown])
        track = Track.new(title: params[:title], artist_id: artist.id)
        if track.save
            track.to_json(:include => :artist, :except => :artist_id)
        else
            tracks.errors.to_json
        end 
    end 

    #Show
    get "/tracks/:id" do 
        track = Track.find(params[:id])
        track.to_json(:include => :artist, :except => :artist_id)
    end 

    #Edit
    patch "/tracks/:id" do 
        track = Track.find(params[:id])
        if track.update(likes: params[:likes].to_i)
            track.to_json(:include => :artist, :except => :artist_id)
        end 
    end 




end 