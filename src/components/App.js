import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import axios from 'axios';

import NavBar from './NavBar';
import SearchBar from './SearchBar';
import WeatherJumbotron from './WeatherJumbotron';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      zip: 78741,
      weather: []
    }
  }

  componentDidMount() {
    console.log('CDM')
    // const API_KEY = "638f6c8f2b5ff24c1ac36203e6ccdf65";
    // axios.get(`http://api.openweathermap.org/data/2.5/forecast?zip=${this.state.zip}&APPID=${API_KEY}`)
    //   .then(result => this.setState({
    //     weather: result.data
    //   })
    // );
  }

  handleSubmit = zip => {
    this.setState({zip});
    console.log(zip)
  }

  render() {
    return (
      <div>
       <NavBar />
       <Grid>
         <Row className="show-grid">
          <WeatherJumbotron 
            onSubmit={this.handleSubmit}
          />

         </Row>
       </Grid>
       
      </div>
    );
  }
}

export default App;
