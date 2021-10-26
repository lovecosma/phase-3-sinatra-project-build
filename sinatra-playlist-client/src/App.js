import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import React, {useState, useEffect} from "react"
import Welcome from "./components/Welcome"
import TracksContainer from "./components/TracksContainer"
import ArtistsContainer from "./components/ArtistsContainer"
import NavBar from "./components/NavBar"
import TrackForm from "./components/TrackForm"
import TrackShow from "./components/TrackShow"

function App() {

  const [tracks, setTracks] = useState([])
  const [requesting, setRequesting] = useState(true)

  useEffect(() => {
    setRequesting(true)
    fetch("http://localhost:9393/tracks")
    .then(resp => resp.json())
    .then(tracksData => {
      setTracks([...tracksData])
      setRequesting(false)
    })
  }, [])

  const addTrack = (trackData) => {
      setRequesting(true)
      let params = {
        ...trackData
      }
      fetch("http://localhost:9393/tracks", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"       
        },
        body: JSON.stringify(params)
      })
      .then( resp => resp.json())
      .then(trackData => {
        setTracks(prev => {
          return [...prev, trackData]
        })
        setRequesting(false)
      })
  } 

  const handleDelete = async (id) => {
    setRequesting(true)
    let resp = await fetch(`http://localhost:9393/tracks/${id}`, {
        method: "DELETE",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"       
          }
    })
    let trackData = await resp.json()
    let tracksAfterDelete = tracks.filter(track => track.id !== id)
    setTracks([...tracksAfterDelete])
    setRequesting(false)
  }

  const handleLike = async (track) => {
    const newTracks = tracks.map(currentTrack => {
      if(currentTrack.id === track.id ){
           currentTrack.likes += 1
      }
      return currentTrack
    })
    setTracks([...newTracks])
    let params = {
        likes: track.likes + 1
    }
    let resp = await fetch(`http://localhost:9393/tracks/${track.id}`, {
        method: "PATCH",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"       
          },
          body: JSON.stringify(params)
    })
    let trackData = await resp.json()
}

  return (
    <div>
      <Router>
        <NavBar/>
        <Switch>
            <Route exact path="/" ><Welcome/></Route>
            <Route exact path="/tracks" ><TracksContainer tracks={tracks} requesting={requesting} handleLike={handleLike} handleDelete={handleDelete}/></Route>
            <Route exact path="/artists" ><ArtistsContainer/></Route>
            <Route exact path="/tracks/new" ><TrackForm addTrack={addTrack} /></Route>
            <Route exact path="/tracks/:id" ><TrackShow tracks={tracks} /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
