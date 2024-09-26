import './WeatherForecast.css'
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import WeatherData from '../WeatherData/WeatherData';

const WeatherForecast = (props) => {
    const {day, img, imgAlt, conditions, time} = props;
    return (
        <div className="weather">
            <h2>{day}</h2>
            <WeatherIcon img={img} imgAlt={imgAlt}/>
            <WeatherData conditions={conditions} time={time}/>
        </div>
    )
}

export default WeatherForecast;