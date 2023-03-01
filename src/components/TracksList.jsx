import React, {useState} from 'react'
import Track from './Track'

function TracksList({ handleDeleteTrack, tracks}) {
  const [sortTerm, setSortTerm] = useState('')


  //sort logic (case insenstive)
  let filteredResults = [...sortTerm]
  if (sortTerm === "BPM") {
    filteredResults = tracks.sort((a, b) => a[sortTerm] - b[sortTerm])
  } else if (sortTerm === 'artist' || sortTerm === 'title') {
    filteredResults = tracks.sort((a, b) => {
      if (a[sortTerm].toLowerCase() < b[sortTerm].toLowerCase()) {
        return -1
      } else return 1
    })
  } else {
    filteredResults = [...tracks]
  }
  

  const trackElements = filteredResults.map(track => {
    return <Track onDeleteTrack={handleDeleteTrack} key={track.id} track={track} />
  })

  function handleClick(e) {
    setSortTerm(e.target.id)
  }
  
  return (
    <table>
      <tbody>
        <tr>
          <th>
          <h3 id='image' className="row-image">Img</h3>

          </th>
          <th>
            <h3 id='title' onClick={handleClick} className="row-title">Title</h3>
          </th>
          <th>
            <h3 id='artist' onClick={handleClick} className="">Artist</h3>
          </th>
          <th>
            <h3 id='BPM' onClick={handleClick} className="">BPM</h3>
          </th>
        </tr>
        {trackElements}
      </tbody>
    </table>
  )
}

export default TracksList