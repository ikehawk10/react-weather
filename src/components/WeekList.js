import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';

import DayItem from './DayItem';

class WeekList extends Component {  

  
  render(props) {
    console.log(this.props.weather.list);
    let cities = this.props.weather ? <DayItem name={this.props.weather.list} /> : <h1>Please enter a zip</h1>
    return (
      <Grid>
        <Row className="show-grid">
          {cities}
        </Row>
      </Grid>
    )
  }
}

export default WeekList;