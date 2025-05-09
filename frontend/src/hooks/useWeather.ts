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

  const normalizeForecastData = (rawList: any[]) =>
    rawList.map((entry: any) => ({
      dt_txt: entry.dt_txt,
      main: entry.main,
      wind: entry.wind,
      weather: {
        main: entry.weather[0]?.main || '',
        description: entry.weather[0]?.description || '',
        icon: entry.weather[0]?.icon || '', //  critical for icons
      },
    }));

  const searchCity = async (city: string) => {
    try {
      setLoading(true);
      setError(null);

      const weatherData = await getCurrentWeather(city);
      const forecastData = await getForecast(city);

      setCurrentWeather(weatherData);
      setForecast(normalizeForecastData(forecastData.list));
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

      const city = weatherData.name;
      const forecastData = await getForecast(city);
      setForecast(normalizeForecastData(forecastData.list));
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
