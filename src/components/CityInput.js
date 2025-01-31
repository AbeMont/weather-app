export default function CityInput({cityInputHandler, clickCityHandler}){
    return(
        <div className="input-container my-1 d-flex">
            <i className="bi bi-geo-alt-fill d-flex flex-column justify-content-center"></i>
            <input type="text" 
            className="form-control location-input border-0 px-0" 
            id="city" 
            placeholder="Enter your City"
            onChange={(e) => cityInputHandler(e)}/>
            <button className="btn" onClick={clickCityHandler}>
              <i className="bi bi-search"></i>
            </button>
        </div>
    )
}