import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

import SearchBar from './SearchBar';

class WeatherJumbotron extends Component {

  onSubmit = zip => {
    this.props.onSubmit(zip)
  }
  render() {
    return(
      <Jumbotron>
          <h3>Search for the weather forcast in your area.</h3>
          <SearchBar submitForm={this.onSubmit}/>
        </Jumbotron>
    )
  }
}

export default WeatherJumbotron;