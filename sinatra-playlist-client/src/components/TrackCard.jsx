import React from 'react'
import { NavLink } from "react-router-dom"

export default function TrackCard({track, handleDelete, handleLike}) {

    
    return (
        <div>
            <NavLink to={`/tracks/${track.id}`}>{track.title}</NavLink> - {track.artist.name} - {track.artist.hometown}
            <br></br>
            <p>Likes: {track.likes}</p>
            <button onClick={() => handleLike(track)}>{"<3"}</button>
            <button onClick={(e) => handleDelete(track.id)}>delete</button>
        </div>
    )
}
