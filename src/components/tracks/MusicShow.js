import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import AppleLogo from '../../styles/appleLogo.png'
import FadeIn from 'react-fade-in';


const MusicShow = (props) => {
  return (
    <div className='columns'>
      <div className="column is-three-quarters padd">
        <FadeIn>
          <div className="image-show">
            <img className='img-padding' src={props.artworkUrl100} alt={props.artistName} width='250' />
            <div className="titles">
              <h3 className='title'>{props.artistName}</h3>
              <p className='subtitle is-center'>{props.trackCensoredName}</p>
            </div>

          </div>
          <ReactAudioPlayer autoPlay controls={true} src={props.previewUrl} volume={props.volume} />

          <div className="details">
            <h3><strong>Album:</strong> {props.collectionName}</h3>
            <p><strong>Genre:</strong> {props.primaryGenreName}</p>
          </div>

          <a href={props.trackViewUrl} target="_blank" rel="noopener noreferrer">
            <div className="apple-music">
              <img src={AppleLogo} width='50' alt='Apple Buy' />
              <p>Listen on Apple Music</p>
            </div>
          </a>

        </FadeIn>
      </div>
      <div className="column padd">
        <button className="delete is-medium" onClick={props.onClick}></button>
      </div>
    </div>
  )
}

export default MusicShow