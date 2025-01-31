export default function CurrentWeather({weatherDataObj}){
    return(
        <>
            <div className="row justify-content-center">
              <div className="col-9">
                <h5 className="mt-4 text-center p-1">Current weather in {weatherDataObj.location?.name}, {weatherDataObj.location?.region} is</h5>
              </div>
            </div>

            <div className="d-flex flex-column justify-content-center mt-3 mb-2">
              <h1 className="temperature text-center m-0">{Math.round(weatherDataObj.current?.temp_f)}<span>°F</span></h1>
              <p className="temperature-description text-center m-0">{weatherDataObj.current?.condition.text}</p>
            </div>
        </>
    )
}