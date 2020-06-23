// * Search Any

import axios from "axios"

// https://itunes.apple.com/search?term=computer&media=music&entity=song&limit=200


// * Search by Song

// https://itunes.apple.com/search?term=computer&attribute=songTerm&media=music&entity=song&limit=200

// * Search by Artist
// https://itunes.apple.com/search?term=computer&attribute=artistTerm&media=music&entity=song&limit=200

//beach boys
//term = beach+boys


// * Search by  Album
// https://itunes.apple.com/search?term=computer&attribute=albumTerm&media=music&entity=song&limit=200



export const getAllSongs = (term, attribute) => {
  if (attribute === 'Any') {
    return axios.get(`https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=${term}&media=music&entity=song&limit=200`)
  }
  else {
    return axios.get(`https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=${term}&attribute=${attribute}&media=music&entity=song&limit=200`)
  }
}





