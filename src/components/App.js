import React, { Component } from 'react';
import '../App.css';
import { Grid, Row } from 'react-bootstrap';
import axios from 'axios';

import NavBar from './NavBar';
import WeatherJumbotron from './WeatherJumbotron';
import WeekList from './WeekList';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      zip: 78741,
      weather: [],
      city: ''
    }
  }

  componentDidMount() {
    this.getWeather(this.state.zip);
  }


  getWeather = (zip) => {
    const API_KEY = "638f6c8f2b5ff24c1ac36203e6ccdf65";
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?zip=${zip}&APPID=${API_KEY}`)
      .then(result => {
        console.log(result.data)
        this.setState({
          zip,
        weather: result.data,
        city: result.data.city.name
      })
    });
  }

  submitZip = zip => {
    this.getWeather(zip)
  }


  render() {
    return (
      <div>
        <NavBar />
        <Grid>
          <Row className="show-grid">
            <WeatherJumbotron 
              updateWeather={this.submitZip}
            />
          <h3>Showing the weather data for {this.state.zip} - {this.state.city}</h3>

          </Row>
          <Row>
            <WeekList 
              weather={this.state.weather}
              day={this.state.day}
            />
          </Row>
        </Grid>
        
      </div>
    );
  }
}

export default App;
