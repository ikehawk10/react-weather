import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class DayItem extends Component {
  render() {
    return (
      <div>
        <Panel>
          <Panel.Heading>
            <Panel.Title componentClass="h3">Panel heading with a title</Panel.Title>
          </Panel.Heading>
          <Panel.Body>Panel content</Panel.Body>
        </Panel>
      </div>
    );
  }
}

export default DayItem;