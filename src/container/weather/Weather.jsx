import axios from "axios";
import { useEffect, useState } from "react";
import "./Weather.scss";

function Weather() {
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [weather, setWeather] = useState("");
    const [temperature, setTemperature] = useState(0);
    const [cityName, setCityName] = useState("");
    const [wicon, setWicon] = useState("");

    const savePositionToState = (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
    };

    const fetchWeather = async () => {
        try {
            await window.navigator.geolocation.getCurrentPosition(
                savePositionToState
            );
            if (latitude && longitude !== 0) {
                const res = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=60d505bb48f9c02e8d1f29a621cd125f&units=metric`
                );
                setTemperature(res.data.main.temp);
                setCityName(res.data.name);
                setWeather(res.data.weather[0].main);
                setWicon(res.data.weather[0].icon);
                console.log(res.data);
            }
        } catch (err) {
            console.error(err);
        }
    };
    
    useEffect(() => {
        fetchWeather();
    }, [latitude, longitude]);

    return (
        <div className="app__weathers">
            <div className='app__weather app__flex'>
                <div className="app__image app__flex">
                    <img src={`https://hgezi.csb.app/${wicon}.svg`} alt={weather} />
                </div>
                <div className="app__weather-content app__flex">
                    <h1 className=''>{temperature}<span>&deg;</span></h1>
                    <h3 className="bold-text">{weather}</h3>
                    <p className='p-text' style={{ marginTop: 10 }}>City: {cityName}</p>
                </div>
            </div>
        </div>
    );
}

export default Weather;
