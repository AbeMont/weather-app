
import { useEffect } from "react";

export default function WeatherImage({image, setImageHandler, code}){

    useEffect(()=>{
        switch (code) {
            case 1000 || 1009: 
                setImageHandler('clear');
            break;
            case 1003 || 1006: 
                setImageHandler('cloud');
            break;
            case 1183 || 1186 || 1192 || 1195 || 1240: 
                setImageHandler('rain');
            break;
            case 1030 || 1135: 
                setImageHandler('mist');
            break;
            case 400 || 404 || 500:
                setImageHandler('404');
            break;
            default:
                setImageHandler('clear');
            break;
        }
    }, [code,setImageHandler])

    return(
        <div className="weather-img-container d-block text-center">
        <img src={`images/${image}.png`} alt={image} className="weather-img"/>
        </div>
    )
}