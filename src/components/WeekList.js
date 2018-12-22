import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import DayItem from './DayItem';

class WeekList extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <DayItem />
        </Row>
      </Grid>
    )
  }
}

export default WeekList;