import React from 'react'

const MusicCard = (props) => {
  return (

      <div className={`card-styling ${props.flashing < 30 ? 'flash' : ''}`}>
        <img
        src={props.artworkUrl100}
        alt={props.artistName}
        onClick={() => { props.onClick(props) }}
        onMouseEnter={() => { props.onMouseEnter(props) }}

      />

      </div>

  )
}

export default MusicCard


