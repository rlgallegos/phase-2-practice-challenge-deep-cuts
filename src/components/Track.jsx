import React from 'react'
import defaultVinyl from '../assets/vinyl_PNG111.png'

function Track({onDeleteTrack, track}) {

  function handleClickDelete() {
    fetch(`http://localhost:8001/tracks/${track.id}`, {
      method: "DELETE"
    })
    .then(res=>res.json())
    .then(data => {
      console.log(data)
      onDeleteTrack(track)
    })
  }

  //'http://localhost:8001/tracks


  return (
    <tr onClick={handleClickDelete} className="table-row">
        <td className="row-image">
            {<img src={track.image ? track.image : defaultVinyl} alt='title' ></img>}
        </td>
        <td className="row-title">{track.title}</td>
        <td>{track.artist}</td>
        <td>{track.BPM}</td>
    </tr>
  )
}

export default Track