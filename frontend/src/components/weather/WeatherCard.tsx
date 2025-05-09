import React from 'react';
import { ForecastData } from '../../interfaces/weather';
import {
  getWeatherGradientClass,
  getWeatherIconUrl,
} from '../../utils/helpers';

interface WeatherCardProps {
  forecast: ForecastData;
  compact?: boolean;
}

const formatDate = (str: string) =>
  new Date(str).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  });

const formatTime = (str: string) =>
  new Date(str).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

const WeatherCard: React.FC<WeatherCardProps> = ({ forecast, compact = false }) => {
  const gradientClass = getWeatherGradientClass(forecast.weather.main, forecast.dt_txt);

  const iconUrl = getWeatherIconUrl(forecast.weather.icon);

  if (compact) {
    return (
      <div className={`card shadow-sm weather-card ${gradientClass}`}>
        <div className="card-body p-4 text-center">
          <p className="font-medium">{formatTime(forecast.dt_txt)}</p>
          <div className="flex justify-center my-2">
            <img
              src={iconUrl}
              alt={forecast.weather.description}
              className="w-12 h-12"
            />
          </div>
          <p className="text-lg font-bold">{forecast.main.temp}°C</p>
          <p className="capitalize text-sm">{forecast.weather.description}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`card shadow-md weather-card ${gradientClass}`}>
      <div className="card-body">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
            <h3 className="card-header text-xl">{formatDate(forecast.dt_txt)}</h3>
            <p className="text-base">{formatTime(forecast.dt_txt)}</p>
            <p className="text-lg capitalize mt-2">{forecast.weather.description}</p>
          </div>

          <div className="flex items-center mx-auto md:mx-0">
            <img
              src={iconUrl}
              alt={forecast.weather.description}
              className="w-16 h-16"
            />
            <div className="ml-4 text-center">
              <p className="text-3xl font-bold">{forecast.main.temp}°C</p>
              <p className="text-sm">
                {forecast.main.temp_min}°C / {forecast.main.temp_max}°C
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-4 md:mt-0 md:ml-8">
            <div className="flex items-center">
              <span>Humidity: {forecast.main.humidity}%</span>
            </div>
            <div className="flex items-center">
              <span>Pressure: {forecast.main.pressure} hPa</span>
            </div>
            <div className="flex items-center">
              <span>Wind: {forecast.wind.speed} m/s</span>
            </div>
            <div className="flex items-center">
              <span>Direction: {forecast.wind.deg}°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
