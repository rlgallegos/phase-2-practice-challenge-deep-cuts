import React from 'react'
import Search from './Search'
import AddTrackForm from './AddTrackForm'
import TracksList from './TracksList'

function TracksPage({ handleDeleteTrack, handleAddTrack, tracks}) {

    
  return (
    <div>
      <Search />
      <AddTrackForm onAddTrack={handleAddTrack} />
      <TracksList handleDeleteTrack={handleDeleteTrack} tracks={tracks} />
    </div>
  )
}

export default TracksPage