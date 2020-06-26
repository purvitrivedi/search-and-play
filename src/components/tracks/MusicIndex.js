import React from 'react'
import LoadingOverlay from 'react-loading-overlay';
import MoonLoader from 'react-spinners/MoonLoader'
import { getAllSongs } from '../../lib/api'
import MusicCard from './MusicCard'
import MusicShow from './MusicShow'

class MusicIndex extends React.Component {
  state = {
    AllArtists: null,
    singleArtist: [],
    isShowingArtist: false,
    isSkewedIndex: false,
    artistName: '',
    // flashingIcon1: 0,
    // flashingIcon2: 50,
    // flashingIcon3: 100,
    volume: 0.6
  }

  async componentDidMount() {

    const urlDetails = this.props.location.pathname
    const term = urlDetails.split('/')[2].split('&')[0].replace(' ', '+')
    const attribute = urlDetails.split('/')[2].split('&')[1]

    const res = await getAllSongs(term, attribute)
    this.setState({
      AllArtists: res.data.results
    })
    setInterval(this.flashingAlbums, 700)
  }


  flashingAlbums = () => {
    this.setState({flashingIcon: this.state.flashingIcon + 1})
  }

  // Handle Click events on Albums - Alters the position of the index and shows the side music section
  handleClick = (event) => {
    this.setState({ isSkewedIndex: true })
    setTimeout(() => { this.setState({ singleArtist: event, isShowingArtist: true, volume: 0.7 }) }, 500)
  }


  // Handle Click events on the music back button - Hides song section and returns music index to full page
  handleBackClick = () => {
    this.setState({ isSkewedIndex: false })
    setTimeout(() => { this.setState({ isShowingArtist: false, volume: 0 }) }, 500)
  }

  // Display song name in navbar when mouse hovers
  showName = (event) => {
    const name = `${event.artistName}: ${event.trackCensoredName}`
    this.setState({ artistName: name })
  }


  // Sends user back to Home page
  backToHomePage = () => {
    setTimeout(() => {this.props.history.push('/')}, 250)
  }


  render() {
    if (this.state.AllArtists === null) {
      return (
        <section className="hero is-fullheight">
          <div className="hero-body">
            <div className="container">
              <LoadingOverlay active={true} spinner text='Loading your content...'></LoadingOverlay>
            </div>
          </div>
        </section>
      )
    }

    else if (this.state.AllArtists.length === 0) {
      return (
        <div className="music-index">
          <nav className="navbar">
            <div className="navbar-brand">
              <img onClick={this.backToHomePage} className="back-emoji" src="https://cdn.clipart.email/2e0429ab467af83744e6ee6d0f964a1f_left-arrow-icon-of-glyph-style-available-in-svg-png-eps-ai-_256-256.png" alt="back-arrow" />
            </div>
            <div className="navbar-menu center-nav">No Artists/Songs Found</div>
          </nav>
          <section className="hero is-fullheight">
            <div className="hero-body">
              <div className="container">
                <LoadingOverlay active={true} spinner={<MoonLoader />} text='Cannot find any related songs to your search. Please try again'></LoadingOverlay>
              </div>
            </div>
          </section>
        </div>
      )
    }


    return (
      <div className="music-index">
        <nav className="navbar">
          <div className="navbar-back">
            <img onClick={this.backToHomePage} className="back-emoji" src="https://cdn.clipart.email/2e0429ab467af83744e6ee6d0f964a1f_left-arrow-icon-of-glyph-style-available-in-svg-png-eps-ai-_256-256.png" alt="back-arrow" />
          </div>
          <div className="center-nav">{this.state.artistName}</div>
        </nav>

        <div className="columns">
          <div className={`container column animateIndex ${this.state.isSkewedIndex ? 'skew is-half' : 'is-full'}`}>
            <div className='artworks'>
              {this.state.AllArtists.map((artist, index) => {
                return (
                  <MusicCard key={index} {...artist} onClick={this.handleClick} onMouseEnter={this.showName} flashing={Math.random() * 200} />
                )
              })}
            </div>
          </div>
          <div className={`container column ${this.state.isSkewedIndex ? 'slidingAnimation' : 'slidingBackAnimation'} ${this.state.isShowingArtist ? 'not-hidden' : 'hidden'}`}>
            <MusicShow {...this.state.singleArtist} onClick={this.handleBackClick} volume={this.state.volume}/>
          </div>
        </div>

      </div>
    )
  }
}


export default MusicIndex
