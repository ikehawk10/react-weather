import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';

import DayItem from './DayItem';

class WeekList extends Component {  

  
  render(props) {
    return (
      <Grid>
        <Row className="show-grid">
        <DayItem weather={this.props.weather} />
        </Row>
      </Grid>
    )
  }
}

export default WeekList;