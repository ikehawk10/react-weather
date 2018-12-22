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
      weather: []
    }
  }

  componentDidMount() {
    this.getWeather(this.state.zip);
  }


  getWeather = (zip) => {
    const API_KEY = "638f6c8f2b5ff24c1ac36203e6ccdf65";
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?zip=${zip}&APPID=${API_KEY}`)
      .then(result => {
        this.setState({
        weather: result.data
      })
    });
  }

  submitZip = zip => {
    this.getWeather(zip)
  }


  render() {
    const list = this.state.weather.length ? <WeekList weather={this.state.weather}/> : "No Data";
    return (
      <div>
        <NavBar />
        <Grid>
          <Row className="show-grid">
            <WeatherJumbotron 
              updateWeather={this.submitZip}
            />
          </Row>
        </Grid>
        {list}
      </div>
    );
  }
}

export default App;
