import React, {useState} from 'react';



function Forecast({forecast}) {

    const [forecastDay1, setForecastDay1] = useState({
        date: "",
        weather: "",
        highTemp: "",
        lowTemp: ""
      });
    const forecastArray = forecast.list;
      console.log("Liz's Forecast Array log", forecastArray);

    if (forecastArray){
        console.log("Forecast Array:", forecastArray);
        console.log("ForecastDay1", forecastArray[0].dt_txt);
        if (forecastDay1.date === ""){
            setForecastDay1({
                ...forecastDay1,
                date: forecastArray[0].dt_txt
            });
        }
        // forecast.list.forEach(element => { 

        // });
    }  

    return (
      <div className="redBox">
          {(typeof forecast != "undefined") ? 
            (
            <div className="forecastContainer">
                    <div className="dayContainer">
                        <div className="forecastDay">{forecastDay1.date}</div>
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
          ) 
          : ("")}
      </div>
    );
  }
  
  export default Forecast;