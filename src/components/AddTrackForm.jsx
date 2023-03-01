import React, {useState} from 'react'

function AddTrackForm({onAddTrack}) {
  const [formData, setFormData] = useState({
    image: '',
    title: '',
    artist: '',
    BPM: ''
  })

  function handleChange(e) {
    if (e.target.name === 'BPM'){
      setFormData({...formData, [e.target.name]: parseInt(e.target.value)})
    } else {
    setFormData({...formData, [e.target.name]: e.target.value})
    }
  }
  function handleSubmit(e) {
    e.preventDefault()
    fetch('http://localhost:8001/tracks', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => onAddTrack(data))
  }

  return (
      <form onSubmit={handleSubmit}>
        <div>
          <input onChange={handleChange} value={formData.image} type="text" name="image" placeholder="Image URL"/>
          <input onChange={handleChange}  value={formData.title} type="text" name="title" placeholder="title" />
          <input onChange={handleChange} value={formData.artist} type="text" name="artist" placeholder="Artist" />
          <input onChange={handleChange} value={formData.BPM} type="number" name="BPM" placeholder="BPM" step="1.00" />
        </div>
        <input className="" type="submit" value="Add Track" />
      </form>
  )
}

export default AddTrackForm