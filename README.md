

MUSIC SEARCH AND PLAYER APP



 1. On site load - Home page Route
 2. Home page components:
      - Searchbar (with dropdown)

3. On submit form searchbar - Go to AlbumIndex
4. AlbumIndex onLoad - Axios.get request to API




5. AlbumIndex Components:
      - Image Cards (onClick - Play previewURL)(onHover = show name)
      - ZoomPanPinch Components
      - ArtistShow (onclick of artist image Card)
      - Back Button (Link to='/')

6. ArtistShow (onload - filter array for that artist)

ArtistShow Components:
  - Image (larger)
  - Preview Track (autoplay/loop)
  - Back button (hide artist show, return css of index to normal)
  - Artist details

AlbumIndex State:
  state = {
    AllAlbums: []
    singleArtist: [],
    searchBar: {
      searchInput: '',
      dropdownInput: ''
    }
  }

  Search by word* 
  Dropdown: song name or album name or artist name


  FEATURES:

  - styling: skew music cards
            -animate the skew
  - bar at the top: left - go back to home back
                    center - see the name of the track you have hovered on  
                    right - zoom out
- fix the margins on music show


Day 2:

-- Audio Volume, fadeout and fadein
--  NavBar component
-- Music show styling final bits
--music index random pops
-- keyboard friendly music index page
-- Tidy up music index