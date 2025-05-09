import { useState } from 'react';
import {
  getCurrentWeather,
  getForecast,
  getWeatherByCoordinates
} from '../services/weatherService';

interface WeatherError {
  message: string;
}

export const useWeather = () => {
  const [currentWeather, setCurrentWeather] = useState<any | null>(null);
  const [forecast, setForecast] = useState<any[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<WeatherError | null>(null);

  const searchCity = async (city: string) => {
    try {
      setLoading(true);
      setError(null);

      const weatherData = await getCurrentWeather(city);
      const forecastData = await getForecast(city); //  Add this

      setCurrentWeather(weatherData);
      setForecast(forecastData.list); // forecast is usually in `.list` from OpenWeatherMap
    } catch (err) {
      setError({ message: 'Failed to fetch weather data' });
    } finally {
      setLoading(false);
    }
  };

  const searchByCoordinates = async (lat: number, lon: number) => {
    try {
      setLoading(true);
      setError(null);

      const weatherData = await getWeatherByCoordinates(lat, lon);
      setCurrentWeather(weatherData);

      // Optionally fetch forecast too
      const city = weatherData.name;
      const forecastData = await getForecast(city);
      setForecast(forecastData.list);
    } catch (err) {
      setError({ message: 'Failed to fetch location-based weather' });
    } finally {
      setLoading(false);
    }
  };

  return {
    currentWeather,
    forecast,
    loading,
    error,
    searchCity,
    searchByCoordinates
  };
};
