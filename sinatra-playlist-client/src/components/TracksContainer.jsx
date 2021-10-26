import React from 'react'
import TrackCard from "./TrackCard"
export default function TracksContainer({tracks, requesting, handleDelete, handleLike}) {
    return (
        <div>
            <h1>Tracks</h1>  
           {tracks.map(track => <TrackCard key={track.id} track={track} handleDelete={handleDelete} handleLike={handleLike}/>)}
        </div>
    )
}
