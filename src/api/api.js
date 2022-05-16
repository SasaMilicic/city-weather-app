const url = (el) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${el}&appid=${process.env.REACT_APP_WEATHER_KEY}`;
};

const getRandomInteger = () => Math.floor(100000 + Math.random() * 900000);

export const getCityWeather = async (arrCities, setArr) => {
  const arrCitiesData = await Promise.all(
    arrCities.map(async (city) => {
      const fetchCityWeather = await fetch(url(city));
      if (!fetchCityWeather.ok) {
        return {
          error: `'${fetchCityWeather.url.slice(50, -39)}' not found!`,
          id: getRandomInteger(),
        };
      }
      return await fetchCityWeather.json();
    })
  );
  setArr(arrCitiesData);
};
