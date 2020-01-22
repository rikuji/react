'use strict'

import React, { Component } from 'react'
import LikebButton from './like-button'
import SearchButton from './search-button'

class App extends Component {
  render () {
    return (
      <div className='container'>
        <LikebButton />
        <SearchButton />
      </div>
    )
  }
}

export default App
