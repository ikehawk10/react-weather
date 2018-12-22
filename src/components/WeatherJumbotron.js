import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

import SearchBar from './SearchBar';

class WeatherJumbotron extends Component {

  handleSubmit = zip => {
    this.props.updateWeather(zip)
  }
  render() {
    return(
      <Jumbotron>
          <h3>Search for the weather forcast in your area.</h3>
          <SearchBar submitForm={this.handleSubmit}/>
        </Jumbotron>
    )
  }
}

export default WeatherJumbotron;