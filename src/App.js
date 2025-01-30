import { useState, useEffect } from "react";

function App() {

  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState('');
  const key = "fb339b44f4584cc5810225529252901";

    async function getWeatherData(query){
      try {
        const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${query}`);
        const data = await res.json();
        setWeatherData(data);
      } catch (error){
        console.log(error)
      }
    }

  useEffect(()=>{

    function getInitialWeather() {
        // Get current location on initial page load
        navigator.geolocation.getCurrentPosition((e)=>{ 
        const latitude = e.coords.latitude;
        const longitude = e.coords.longitude;
        const coordinates = latitude + ',' + longitude
        getWeatherData(coordinates);
      });
    }
    getInitialWeather();
  },[]);

  function handleCityInput(e){
    setCity(e.target.value);
  }

  function handleClickCity(){
    getWeatherData(city)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">

          <h1 className="my-4 text-center">Weather App</h1>

          <div className="input-container my-1 d-flex">
            <i className="bi bi-geo-alt-fill d-flex flex-column justify-content-center"></i>
            <input type="text" 
            className="form-control location-input border-0 px-0" 
            id="city" 
            placeholder="Enter your City"
            onChange={(e) => handleCityInput(e)}/>
            <button className="btn" onClick={handleClickCity}>
              <i className="bi bi-search"></i>
            </button>
          </div>

          <div className="weather-img-container d-block text-center">
            <img src="images/snow.png" alt="snow" className="weather-img"/>
          </div>

          <div className="row justify-content-center">
            <div className="col-9">
              <h5 className="mt-4 text-center p-1">Current weather in {weatherData.location?.name} is</h5>
            </div>
          </div>

          <div className="d-flex flex-column justify-content-center mt-3 mb-2">
            <h1 className="temperature text-center m-0">{Math.round(weatherData.current?.temp_f)}<span>°F</span></h1>
            <p className="temperature-description text-center m-0">{weatherData.current?.condition.text}</p>
          </div>

          <div className="conditions d-flex justify-content-around">
            <div className="d-flex gap-2">
              <span><i className="bi bi-water"></i></span>
              <div className="d-flex flex-column justify-content-center">
                <p className="m-0">{weatherData.current?.humidity}%</p>
                <p className="m-0 condition">Humidity</p>
              </div>
            </div>
            <div className="d-flex gap-2">
              <span><i className="bi bi-wind"></i></span>
              <div className="d-flex flex-column justify-content-center">
                <p className="m-0">{Math.round(weatherData.current?.wind_mph)} mph</p>
                <p className="m-0 condition">Wind Speed</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
