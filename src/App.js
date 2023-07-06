import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <News pageSize={5} country="in" category="sports" apiKey="1c8d90bf5ac347e38bd960feb71d9c0d" />
      </div>
    )
  }
}
