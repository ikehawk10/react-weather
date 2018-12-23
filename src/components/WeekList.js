import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import DayItem from './DayItem';

class WeekList extends Component {  

  
  render(props) {
    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Day</th>
            <th>Description</th>
            <th>High</th>
            <th>Low</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          <DayItem 
            weather={this.props.weather.list}
          />
        </tbody>
      </Table>
    )
  }
}

export default WeekList;