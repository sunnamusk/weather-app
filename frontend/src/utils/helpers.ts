export const getWeatherGradientClass = (
  weatherMain: string | undefined,
  dateTime: string
): string => {
  const hour = new Date(dateTime).getHours();
  const isDay = hour >= 6 && hour <= 18;

  // Safety: Check for null/undefined before calling toLowerCase
  if (!weatherMain) {
    return 'bg-gradient-to-r from-gray-200 to-gray-400';
  }

  switch (weatherMain.toLowerCase()) {
    case 'rain':
      return isDay
        ? 'bg-gradient-to-r from-blue-400 to-blue-600'
        : 'bg-gradient-to-r from-blue-900 to-gray-700';
    case 'clear':
      return isDay
        ? 'bg-gradient-to-r from-yellow-400 to-yellow-600'
        : 'bg-gradient-to-r from-yellow-900 to-gray-700';
    case 'clouds':
      return isDay
        ? 'bg-gradient-to-r from-gray-300 to-gray-500'
        : 'bg-gradient-to-r from-gray-700 to-gray-900';
    default:
      return 'bg-gradient-to-r from-gray-200 to-gray-400';
  }
};

export const getWeatherIconUrl = (iconCode: string) => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};
