import React, { Component } from 'react';

class DayItem extends Component {
  render(props) {
    let weatherList;
    if (!this.props.weather){
      weatherList = "No weather data"
    } else {
      return this.props.weather.map(day => {
        return ( 
          <tr key={day.dt}>
            <td>{day.weather[0].description}</td>
            <td>{Math.round(( day.main.temp_max - 273.15 ) * 9/5 + 32)}&deg;F</td>
            <td>{Math.round(( day.main.temp_min - 273.15 ) * 9/5 + 32)}&deg;F</td>
            <td>{day.main.humidity}%</td>
          </tr>
        )
      })
    }


    return (
      <span>
       {weatherList}
      </span>
      
    );
  }
}

export default DayItem;