import React, { Component } from 'react';
import { Panel, Col } from 'react-bootstrap';

class DayItem extends Component {
  render(props) {
    let weatherList;
    if (!this.props.weather.list){
      weatherList = "No weather data"
    } else {
      return this.props.weather.list.map(day => {
        return ( 
          <Col xs={12} md={2}>
            <Panel>
              <Panel.Heading>
                <Panel.Title componentClass="h3">{day.main.humidity}</Panel.Title>
              </Panel.Heading>
              <Panel.Body>{day.weather[0].description}</Panel.Body>
            </Panel>
          </Col> 
        )
      })
    }


    return (
      <div>
        {weatherList}
       
      </div>
    );
  }
}

export default DayItem;