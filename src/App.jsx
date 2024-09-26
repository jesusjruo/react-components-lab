// src/App.jsx
import { useState } from 'react';
import './App.css';
import WeatherForecast from "./components/WeatherForecast/WeatherForecast.jsx";

const weatherForecasts = [
  {
    day: 'Mon',
    img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/day.svg',
    imgAlt: 'sun icon',
    conditions: 'sunny',
    time: 'Morning',
  },
  {
    day: 'Tue',
    img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/night.svg',
    imgAlt: 'moon icon',
    conditions: 'clear',
    time: 'Night',
  },
  {
    day: 'Wed',
    img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/stormy.svg',
    imgAlt: 'clouds with lightning icon',
    conditions: 'stormy',
    time: 'All Day',
  },
  {
    day: 'Thu',
    img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-day_t7ckxp.svg',
    imgAlt: 'sun overcast by clouds icon',
    conditions: 'overcast',
    time: 'Evening',
  },
  {
    day: 'Fri',
    img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-night.svg',
    imgAlt: 'moon overcast by clouds icon',
    conditions: 'cloudy',
    time: 'Night',
  },
];

const App = () => {
  const [isDarkMode , setIsDarkMode] = useState(false);

  const handleDarkMode = () => {
    setIsDarkMode(true);
  }

  const handleLightMode = () => {
    setIsDarkMode(false); 
  }

  return (
    <>
    <div className={isDarkMode ? 'dark' : 'light'}>
      <h1>Local Weather</h1>
      <section>
        {weatherForecasts.map((forecast , index) => (
          <WeatherForecast
            key={index}
            {...forecast}
          />
        ))}
      </section>
    </div>
    <div className='buttons'>
          <button onClick={handleDarkMode}>Dark Mode</button>
          <button onClick={handleLightMode}>Light Mode</button>
      </div>
  </>
  );
}

export default App
