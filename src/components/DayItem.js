import React, { Component } from 'react';
import { Panel, Col } from 'react-bootstrap';

class DayItem extends Component {
  render() {
    return (
      <div>
        <Col xs={12} md={3} lg={2}>
          <Panel>
            <Panel.Heading>
              <Panel.Title componentClass="h3">Sunday, December 23rd</Panel.Title>
            </Panel.Heading>
            <Panel.Body>Mostly Sunny</Panel.Body>
          </Panel>
        </Col>
      </div>
    );
  }
}

export default DayItem;