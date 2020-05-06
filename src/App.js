import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/common/Home'
import MusicIndex from './components/tracks/MusicIndex'



function App() {

  // console.log(process.env.REACT_APP_MY_SECRET_KEY)
  return (

    <BrowserRouter>
    <Switch>
      <Route path='/tracks' component={MusicIndex} />
      <Route exact path='/' component={Home} />
    </Switch>

    </BrowserRouter>
  )
}

export default App
