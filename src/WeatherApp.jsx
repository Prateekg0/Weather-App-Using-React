import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city:"Delhi",
        feelsLike: 24.84,
        temp: 25.87,
        temMin: 35.78,
        temMax: 40.45,
        humidity: 47,
        weather: "haze",
       });

       let updateInfo = (newinfo) => {
        setWeatherInfo(newinfo);
       };
    return(

        <div style={{textAlign: "center"}}>
            <h2>Search Weather Condition</h2>
            <SearchBox updateInfo={updateInfo} />
            <br />
            <InfoBox info={weatherInfo}/>
        </div>
    );
}