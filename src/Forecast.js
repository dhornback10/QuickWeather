import React, {useState} from 'react';
import forecast from './App';


function Forecast(forecast) {
    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        return day + ", " + month + " " + date + ", " + year;
      }
    
  
    return (
      <div className="redBox">
          {(typeof forecast != "undefined") ? 
              (
          <div className="forecastContainer">
                <div className="dayContainer">
                <div className="forecastDay">{forecast.list}</div>
                <div className="returnedWeather">Weather</div>
                <div>High: High Temp °F</div>
                <div>Low: Low Temp °F</div>
            </div>
            <div className="dayContainer">
                <div className="forecastDay">Day Name</div>
                <div className="returnedWeather">Weather</div>
                <div>High: High Temp °F</div>
                <div>Low: Low Temp °F</div>
            </div>
            <div className="dayContainer">
                <div className="forecastDay">Day Name</div>
                <div className="returnedWeather">Weather</div>
                <div>High: High Temp °F</div>
                <div>Low: Low Temp °F</div>
            </div>
            <div className="dayContainer">
                <div className="forecastDay">Day Name</div>
                <div className="returnedWeather">Weather</div>
                <div>High: High Temp °F</div>
                <div>Low: Low Temp °F</div>
            </div>
            <div className="dayContainer">
                <div className="forecastDay">Day Name</div>
                <div className="returnedWeather">Weather</div>
                <div>High: High Temp °F</div>
                <div>Low: Low Temp °F</div>
            </div>
          </div>
          ) : ("")}
      </div>
    );
  }
  
  export default Forecast;