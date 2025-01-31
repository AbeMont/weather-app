export default function WeatherConditions({weatherDataObj}){
    return(
        <div className="conditions d-flex justify-content-around">
            <div className="d-flex gap-2">
            <span><i className="bi bi-water"></i></span>
            <div className="d-flex flex-column justify-content-center">
                <p className="m-0">{weatherDataObj.current?.humidity}%</p>
                <p className="m-0 condition">Humidity</p>
            </div>
            </div>
            <div className="d-flex gap-2">
            <span><i className="bi bi-wind"></i></span>
            <div className="d-flex flex-column justify-content-center">
                <p className="m-0">{Math.round(weatherDataObj.current?.wind_mph)} mph</p>
                <p className="m-0 condition">Wind Speed</p>
            </div>
            </div>
        </div>
    )
}