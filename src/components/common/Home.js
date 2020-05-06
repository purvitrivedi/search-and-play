import React from 'react'

import { getAllSongs } from '../../lib/api'

import SearchBar from './SearchBar'

class Home extends React.Component {

  state = {
    search: {
      term: '',
      attribute: ''
    },
    validate: true,
    images: [],
    imageSrc: '',
    imageSrc2: '',
    imageSrc3: '',
    imageSrc4: ''

  }

  handleChange = (event) => {
    const inputName = event.target.name
    const inputValue = event.target.value
    if (event.target.value) this.setState({ validate: true })

    this.setState({
      search: {
        ...this.state.search,
        [inputName]: inputValue
      }
    })
  }

  handleSubmit = (event) => {
    let term = this.state.search.term
    if (!term) {
      this.setState({ validate: false })
      return
    }
    let attribute = (this.state.search.attribute ? this.state.search.attribute : 'Any')
    this.props.history.push(`/tracks/${term}&${attribute}`)
  }

  submitForm = (event) => {
    if (event.keyCode === 13) {
      this.handleSubmit()
    }
  }

  async componentDidMount() {
    const res = await getAllSongs('alternative', 'Any')
    const data = res.data.results
    this.setState({ images: data })
    this.getRandomImage()
    setInterval(this.getRandomImage, 3000)

  }


  getRandomImage = () => {
    const data = this.state.images
    console.log(data)
    const newImage1 = data[Math.round(Math.random() * 199)].artworkUrl100 
    const newImage2 = data[Math.round(Math.random() * 199)].artworkUrl100
    const newImage3 = data[Math.round(Math.random() * 199)].artworkUrl100 
    const newImage4 = data[Math.round(Math.random() * 199)].artworkUrl100


    console.log(newImage1)
    console.log(newImage2)
    console.log(newImage3)
    console.log(newImage4)
    
    this.setState({ imageSrc: newImage1, imageSrc2: newImage2, imageSrc3: newImage3, imageSrc4: newImage4 })
  }

  render() {
    return (
      <section className="section">
        <div className="cf">
          <img className="bottom"
            src={this.state.imageSrc}
            alt="album"
          />
        </div>

        <div className="cf2">
          <img className="bottom"
            src={this.state.imageSrc2}
            alt="album"
          />
        </div>


        <div className="cf3">
          <img className="bottom"
            src={this.state.imageSrc3}
            alt="album"
          />
        </div>

        <div className="cf4">
          <img className="bottom"
            src={this.state.imageSrc4}
            alt="album"
          />
        </div>

        <div className="container">
          <div className="columns">
            <SearchBar requiredClass={`input ${this.state.validate ? '' : 'is-danger'}`} term={this.state.search.term} onKeyDown={this.submitForm} onChange={this.handleChange} onSubmit={this.handleSubmit} />
          </div>
        </div>
      </section>
    )
  }

}






export default Home
