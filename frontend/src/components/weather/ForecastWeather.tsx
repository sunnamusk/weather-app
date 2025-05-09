import React, { useState } from 'react';
import { ForecastData } from '../../interfaces/weather';
import WeatherCard from './WeatherCard';

interface ForecastWeatherProps {
  forecastData: ForecastData[];
}

const ForecastWeather: React.FC<ForecastWeatherProps> = ({ forecastData }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">5-Day Forecast</h2>

      {/* Show raw forecast entries (no grouping) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {forecastData.slice(0, 8).map((forecast, index) => (
          <WeatherCard key={index} forecast={forecast} compact={true} />
        ))}
      </div>
    </div>
  );
};

export default ForecastWeather;
