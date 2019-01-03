import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import DayItem from './DayItem';

class WeekList extends Component {  

  
  render(props) {
    return !this.props.weather.list ? <h3>No weather data</h3> : (
      <div>
        <h3>Showing the weather data for {this.props.zip} - {this.props.city}</h3>
        <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Day</th>
            <th>Description</th>
            <th>High</th>
            <th>Low</th>
            <th>Humidity</th>
            <th>Wind Speed</th>
          </tr>
        </thead>
        <tbody>
          <DayItem 
            weather={this.props.weather.list}
          />
        </tbody>
      </Table>
      </div>
     
    )
  }
}

export default WeekList;