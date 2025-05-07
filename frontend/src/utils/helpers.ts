import { format, parseISO } from 'date-fns';

// Format date from ISO string to readable format
export const formatDate = (dateString: string, formatStr: string = 'MMMM do, yyyy'): string => {
  try {
    const date = parseISO(dateString);
    return format(date, formatStr);
  } catch (error) {
    console.error('Error parsing date:', error);
    return dateString;
  }
};

// Format time from ISO string
export const formatTime = (dateString: string): string => {
  try {
    const date = parseISO(dateString);
    return format(date, 'h:mm a');
  } catch (error) {
    console.error('Error parsing time:', error);
    return dateString;
  }
};

// Determine background gradient based on weather condition and time
export const getWeatherGradientClass = (weatherMain: string, dateString: string): string => {
  const currentHour = parseISO(dateString).getHours();
  const isNight = currentHour < 6 || currentHour > 18;
  
  if (isNight) return 'weather-gradient-night';
  
  switch (weatherMain.toLowerCase()) {
    case 'clouds':
    case 'mist':
    case 'fog':
    case 'haze':
      return 'weather-gradient-cloudy';
    case 'rain':
    case 'drizzle':
    case 'thunderstorm':
      return 'weather-gradient-rainy';
    default:
      return 'weather-gradient-day';
  }
};

// Get weather icon URL
export const getWeatherIconUrl = (iconCode: string): string => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};

// Convert temperature from Kelvin to Celsius
export const kelvinToCelsius = (kelvin: number): number => {
  return Math.round(kelvin - 273.15);
};

// Convert temperature from Celsius to Fahrenheit
export const celsiusToFahrenheit = (celsius: number): number => {
  return Math.round(celsius * 9/5 + 32);
};

// Group forecast data by day
export const groupForecastByDay = (forecasts: any[]): any[] => {
  const grouped = forecasts.reduce((acc, forecast) => {
    const date = forecast.date.split('T')[0];
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(forecast);
    return acc;
  }, {});
  
  return Object.values(grouped);
};