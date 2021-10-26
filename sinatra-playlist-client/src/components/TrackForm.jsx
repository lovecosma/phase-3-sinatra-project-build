import React, {useState} from 'react'
import "./TrackForm.css"
export default function TrackForm({addTrack}) {

    const [formData, setFormData] = useState({
        title: "",
        artist_name: "",
        artist_hometown: ""
    })
     
    const handleChange = (e) => {
        setFormData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTrack(formData)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Track Title</label>
               <input className="form-input" name="title" onChange={handleChange} type="text" value={formData["title"]}></input>
               <label htmlFor="artist_name">Artist Name</label>
               <input className="form-input" name="artist_name" onChange={handleChange} type="text" value={formData["artist_name"]}></input>
               <label htmlFor="artist_hometown">Artist Hometown</label>
               <input className="form-input" name="artist_hometown" onChange={handleChange} type="text" value={formData["artist_hometown"]}></input>
               <button type="submit">Submit</button>
            </form>
        </div>
    )
}
