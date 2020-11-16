import React, {useState} from 'react';
import {filter} from 'lodash';



function Forecast({forecast}) {

    const [forecastDay1, setForecastDay1] = useState({
        date: "",
        weather: "",
        highTemp: "",
        lowTemp: ""
      });
    const [forecastDay2, setForecastDay2]=useState({});
    const [forecastDay3, setForecastDay3]=useState({});
    const [forecastDay4, setForecastDay4]=useState({});
    const [forecastDay5, setForecastDay5]=useState({});
    const forecastArray = forecast.list;

    //dateSplitter function handles date response from API to mm/dd/yyyy format
    const dateSplitter = (date) => {
        let noTime = date.split(' ')[0].split('-');
        noTime = noTime[1] + " / " + noTime[2] + " / " + noTime[0];
        return noTime;
    }

    const forecastHandler = (forecastArray) => {
        for (let i = 0; i<forecast.list.length; i++){
            if (forecastDay1.date === ""){
                setForecastDay1({
                    date: dateSplitter(forecastArray[0].dt_txt),
                    weather: forecastArray[0].weather[0].main, 
                    highTemp: Math.round(forecastArray[0].main.temp_max),
                    lowTemp: Math.round(forecastArray[0].main.temp_min)
                });
            }
            if (dateSplitter(forecastArray[i].dt_txt) === dateSplitter(forecastArray[0].dt_txt)){
                if (forecastArray[i].dt_txt.split(' ')[1] === "12:00:00"){
                    setForecastDay1({
                        ...forecastDay1,
                        weather: "Hi, I'm weather" //forecastArray[i].weather[0].main
                    })
                    console.log(forecastDay1.weather);
                    console.log(forecastDay1);
                    console.log("Weather at noon is", forecastDay1.weather);
                }
               if (forecastArray[i].temp_max > forecastDay1.highTemp){
                   setForecastDay1({
                       ...forecastDay1,
                       highTemp: forecastArray[i].temp_max
                   })
                   console.log("Temp was higher", forecastDay1.highTemp);
               }
               if (forecastArray[i].temp_min < forecastDay1.lowTemp){
                   setForecastDay1({
                       ...forecastDay1, 
                       lowTemp: forecastArray[i].temp_min
                   })
                   console.log("Temp was lower", forecastDay1.lowTemp);
               }
            }
        }
    }

    if (forecastArray){
        console.log("Forecast Array:", forecastArray);
        if (forecastDay1.date === ""){
            setForecastDay1({
                date: dateSplitter(forecastArray[0].dt_txt),
                weather: forecastArray[0].weather[0].main, 
                highTemp: Math.round(forecastArray[0].main.temp_max),
                lowTemp: Math.round(forecastArray[0].main.temp_min)
            });
            forecastHandler(forecastArray);
        } 
    }  

    return (
      <div className="redBox">
          {(typeof forecast != "undefined") ? 
            (
            <div className="forecastContainer">
                    <div className="dayContainer">
                        <div className="forecastDay">{forecastDay1.date}</div>
                        <div className="returnedWeather">{forecastDay1.weather}</div>
                        <div>High: {forecastDay1.highTemp} °F</div>
                        <div>Low: {forecastDay1.lowTemp} °F</div>
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