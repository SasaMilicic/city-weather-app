const url = (el) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${el}&appid=${process.env.REACT_APP_WEATHER_KEY}`;
};

const getRandomInteger = () => Math.floor(100000 + Math.random() * 900000);

const getFlags = async (arrCities, Sflags) => {
  const flags = await Promise.all(
    arrCities.map(async (city) => {
      const fetchCityWeather = await fetch(
        `https://countryflagsapi.com/svg/${city}`
      );
      return fetchCityWeather.url;
    })
  );
  Sflags(flags);
};

export const getCityWeather = async (arrCities, setArr, setFlags) => {
  if (arrCities.length > 10) arrCities = arrCities.slice(0, 10);

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

  const flagIndent = arrCitiesData.map((el) => {
    if (el.error) return;
    return el.sys.country;
  });
  getFlags(flagIndent, setFlags);
  setArr(arrCitiesData);
};
