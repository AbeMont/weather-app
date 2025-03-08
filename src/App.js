import { useState, useEffect } from "react";
import CityInput from './components/CityInput';
import WeatherImage from './components/WeatherImage';
import CurrentWeather from "./components/CurrentWeather";
import WeatherConditions from "./components/WeatherConditions";

function App() {

  const [weatherData, setWeatherData] = useState({});
  console.log("RTest");
  const [city, setCity] = useState('');
  const [image, setImage] = useState('');
  const [code, setCode] = useState('')
  const [error, setError] = useState('');
  const key = "fb339b44f4584cc5810225529252901";
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    // Get current location on initial page load
    navigator.geolocation.getCurrentPosition((e)=>{ 

      const latitude = e.coords.latitude;
      const longitude = e.coords.longitude;
      const coordinates = latitude + ',' + longitude
      setQuery(coordinates);

    });
  },[]);

  useEffect(()=>{
    async function getWeatherData(){
      try {

        if(query === '') return;
        setIsLoading(true);
        const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${query}`);

        if(!res.ok) throw new Error("Something went wrong with fetching the weather");
        setError('');

        const data = await res.json();
        setWeatherData(data);
        setCode(data.current.condition.code);

      } catch (error){
        console.log(error);
        setCode(400);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    getWeatherData();
  },[query]);

  function handleCityInput(e){
    setCity(e.target.value);
  }

  function handleClickCity(){
    setQuery(city);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="my-4 text-center">Weather App</h1>

          <CityInput cityInputHandler={handleCityInput} clickCityHandler = {handleClickCity}/>
          <WeatherImage image={image} setImageHandler={setImage} code={code}/>

          {error !== '' && <h1 className="text-center">{`${error}`}</h1> }
          { (error === '' && isLoading === false) &&
            <>
              <CurrentWeather weatherDataObj = {weatherData}/>
              <WeatherConditions weatherDataObj = {weatherData}/>
            </>
          }

        </div>
      </div>
    </div>
  );
}

export default App;
