import React from 'react';
import { WeatherData } from '../../interfaces/weather';

interface WeatherDetailsProps {
  weatherData: WeatherData;
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({ weatherData }) => {
  if (!weatherData || !weatherData.temperature) return null;

  return (
    <div className="grid grid-cols-2 gap-y-2 text-sm">
      <span>Current:</span>
      <span className="font-semibold">{weatherData.temperature.current}°C</span>

      <span>Feels Like:</span>
      <span className="font-semibold">{weatherData.temperature.feels_like}°C</span>
    </div>
  );
};

export default WeatherDetails;
