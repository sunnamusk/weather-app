import React from 'react';
import { WeatherData } from '../../interfaces/weather';
import { getWeatherGradientClass } from '../../utils/helpers';

interface CurrentWeatherProps {
  weatherData: WeatherData;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ weatherData }) => {
  if (!weatherData || !weatherData.weather || !weatherData.date) return null;

  const gradientClass = getWeatherGradientClass(weatherData.weather.main, weatherData.date);

  return (
    <div className={`card shadow-lg ${gradientClass}`}>
      {/* your existing weather content goes here */}
    </div>
  );
};

export default CurrentWeather;
