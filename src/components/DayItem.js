import React, { Component } from 'react';
import moment from 'moment';

class DayItem extends Component {
  render() {
    return ( 
      this.props.weather.map(day => {
        return <tr key={day.dt}>
                <td>{day.dt_txt}</td>
                <td>{day.weather[0].description}</td>
                <td>{Math.round(( day.main.temp_max - 273.15 ) * 9/5 + 32)}&deg;F</td>
                <td>{Math.round(( day.main.temp_min - 273.15 ) * 9/5 + 32)}&deg;F</td>
                <td>{day.main.humidity}%</td>
              </tr>
      })
    )
  }
}

export default DayItem;