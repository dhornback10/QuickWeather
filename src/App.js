import React, {useState} from 'react';
import Forecast from './Forecast.js';



const api = {
  key: "a0922562a03a7814f98bb8cd914fbd3e",
  url: "https://api.openweathermap.org/data/2.5/"
}

const forecastApi = {
  key: "a0922562a03a7814f98bb8cd914fbd3e",
  url: "https://api.openweathermap.org/data/2.5/forecast?q="
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState({});
  
  

  const search = (event) => {
    if (event.key === "Enter"){
      fetch(api.url + "weather?q=" + query + "&units=Imperial&APPID=" + api.key)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
      });
      fetch(forecastApi.url + query + "&units=Imperial&APPID=" + forecastApi.key)
        .then(res => res.json())
        .then(result => {
          setForecast(result);
        })
        .catch(console.error);
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return day + ", " + month + " " + date + ", " + year;;
  }

  return (
    <div className=
    {(typeof weather.main !== "undefined") 
      ? ((weather.main.temp > 32) 
        ? "app warm" 
        : "app") 
      : "app" }>
      <main>
        <div className="searchBox">
          <input type="text" className="searchBar" placeholder="Search city..." onChange={e => setQuery(e.target.value)} value={query} onKeyPress={(event) => search(event)}></input>
        </div>
        {weather.main && (
          <div>
            <div className="locationBox">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weatherBox">
              <div className ="temperature">
                <div className="currentWeatherText">Currently:</div>
                {Math.round(weather.main.temp)}°F
              </div>
            <div className="weather">{weather.weather[0].main}</div>
            </div>
            <Forecast forecast={forecast}/>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
