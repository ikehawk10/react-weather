import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      zip: 78741,
      weather: []
    }
  }

  componentDidMount() {
    const API_KEY = "638f6c8f2b5ff24c1ac36203e6ccdf65";
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?zip=${this.state.zip}&APPID=${API_KEY}`)
      .then(result => this.setState({
        weather: result.data
      })
    );
  }

  render() {
    return (
      <div>
        API key = 638f6c8f2b5ff24c1ac36203e6ccdf65
      </div>
    );
  }
}

export default App;
