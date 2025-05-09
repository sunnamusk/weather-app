import axios from 'axios';

const API_BASE = 'http://127.0.0.1:8000/api';

export const getCurrentWeather = async (city: string) => {
  const response = await axios.get(`${API_BASE}/weather/current`, {
    params: { city },
  });
  return response.data;
};

export const getWeatherByCoordinates = async (lat: number, lon: number) => {
  const response = await axios.get(`${API_BASE}/weather/current`, {
    params: { lat, lon },
  });
  return response.data;
};

export const getForecast = async (city: string) => {
  const response = await axios.get(`${API_BASE}/weather/forecast`, {
    params: { city },
  });
  return response.data;
};
