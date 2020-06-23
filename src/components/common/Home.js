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
    imgSrc: ['https://is2-ssl.mzstatic.com/image/thumb/Music/v4/f0/21/75/f021755c-d4ac-42fe-6e1d-33e08735c8c1/source/100x100bb.jpg', 'https://is1-ssl.mzstatic.com/image/thumb/Music69/v4/4e/b8/ba/4eb8ba96-6ee2-8a60-f012-a7a61a4fe097/source/100x100bb.jpg', 'https://is2-ssl.mzstatic.com/image/thumb/Music7/v4/14/1c/69/141c691f-e0bf-0a5f-6f49-092d59837279/source/100x100bb.jpg', 'https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/f4/58/47/f4584702-bd77-52c3-f7e0-fa05f4e80397/source/100x100bb.jpg']
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
    const res = await getAllSongs('indie', 'Any')
    const data = res.data.results
    console.log(res.data.results)
    this.setState({ images: data })
    this.getRandomImage()
    // setInterval(this.getRandomImage, 3000)

  }



  getRandomImage = () => {
    const data = this.state.images
    const imgSrc = []
    for (let i = 0; i <= 200; i++) {
      const newImage = data[Math.round(Math.random() * 199)].artworkUrl100
      imgSrc.push(newImage)
    }

    this.setState({ imgSrc })
  }


  render() {
    return (
      <div className="HomePage">
        <div className="search-bar">
          <h1>search + play</h1>
          <SearchBar requiredClass={`${this.state.validate ? '' : 'is-danger'}`} term={this.state.search.term} onKeyDown={this.submitForm} onChange={this.handleChange} onSubmit={this.handleSubmit} />
        </div>
        <div className="background-img">
          {this.state.imgSrc.map(image => (
            <div 
            className="cf"
            >
              <img
                src={image}
                alt="album"
                onClick= {this.handleClick}
              />
            </div>
          ))}
        </div>  
      </div>

    )
  }

}






export default Home
