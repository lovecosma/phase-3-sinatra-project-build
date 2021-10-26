import React, {useState, useEffect} from 'react'
import { useParams, useHistory } from "react-router-dom"
import TrackCard from "./TrackCard"
export default function TrackShow({tracks}) {
    
    const [track, setTrack] = useState({})
    const [requesting, setRequesting] = useState(true)
    const { id } = useParams()
    const history = useHistory()
    useEffect(() => {
      if(!!tracks){
        let currentTrack = tracks.find(trackData => trackData.id === Number(id))
        setTrack({...currentTrack})
        setRequesting(false)
      } 
    }, [setTrack, id, tracks])

    return (
        <div>
            {!!track.id ? 
            <div>
            {track.title} - {track.artist.name} - {track.artist.hometown}
            <br></br>
            <p>Likes: {track.likes}</p>
            </div>
            : 
            <div>
                Loading
            </div>
        }
        </div>
    )
}
