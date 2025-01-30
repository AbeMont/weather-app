
function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">

          <h1 className="my-4 text-center">Weather App</h1>

          <div className="input-container my-1 d-flex">
            <i className="bi bi-geo-alt-fill d-flex flex-column justify-content-center"></i>
            <input type="text" className="form-control location-input border-0 px-0" id="city" placeholder="Enter your City"/>
            <button className="btn">
              <i className="bi bi-search"></i>
            </button>
          </div>

          <div className="weather-img-container d-block text-center">
            <img src="images/snow.png" alt="snow" className="weather-img"/>
          </div>

          <div className="row justify-content-center">
            <div className="col-9">
              <h5 className="mt-4 text-center p-1">Current weather in Leon Valley is</h5>
            </div>
          </div>

          <div className="d-flex flex-column justify-content-center mt-3 mb-2">
            <h1 className="temperature text-center m-0">70<span>°F</span></h1>
            <p className="temperature-description text-center m-0">Light rain</p>
          </div>

          <div className="conditions d-flex justify-content-around">
            <div className="d-flex gap-2">
              <span><i className="bi bi-water"></i></span>
              <div className="d-flex flex-column justify-content-center">
                <p className="m-0">88%</p>
                <p className="m-0 condition">Light Rain</p>
              </div>
            </div>
            <div className="d-flex gap-2">
              <span><i className="bi bi-wind"></i></span>
              <div className="d-flex flex-column justify-content-center">
                <p className="m-0">88%</p>
                <p className="m-0 condition">Light Rain</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
