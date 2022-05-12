export const getCityWeather = async (arrCities) => {
  const arrCitiesData = await Promise.all(
    arrCities.map(async (city) => {
      const fetchCityWeather = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_KEY}`
      );
      const data = await fetchCityWeather.json();
      // console.log(data);
      return data;
    })
  );
  console.log(arrCitiesData);
};
