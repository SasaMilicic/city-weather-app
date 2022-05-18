const FLAGS_URL = (countryInitial) => {
  return `https://countryflagsapi.com/svg/${countryInitial}`;
};

const WEATHER_URL = (el) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${el}&appid=${process.env.REACT_APP_WEATHER_KEY}`;
};

const getRandomInteger = () => Math.floor(100000 + Math.random() * 900000);

const getFlag = async (countryInitial) => {
  const flag = await fetch(FLAGS_URL(countryInitial));
  if (!flag.ok) return;

  return flag.url;
};

const getFlags = (countryInitials) => {
  const flagsPromises = countryInitials.map(getFlag);

  return Promise.all(flagsPromises);
};

const getCountryInitials = (countries) =>
  countries.map((el) => {
    if (el.error) return;

    return el.sys.country;
  });

const getWeather = async (city) => {
  const weather = await fetch(WEATHER_URL(city));
  if (!weather.ok) {
    return {
      error: `'${weather.url.slice(50, -39)}' not found!`,
      id: getRandomInteger(),
    };
  }

  return await weather.json();
};

const getAllWeathers = (cities) => {
  const cityPromises = cities.map(getWeather);

  return Promise.all(cityPromises);
};

export const getWeathersAndFlags = async (
  cityNames,
  setCitiesState,
  setFlagsState
) => {
  if (cityNames.length > 10) cityNames = cityNames.slice(0, 10);

  const citiesWeather = await getAllWeathers(cityNames);
  setCitiesState(citiesWeather);

  const countryInitials = getCountryInitials(citiesWeather);

  const countryFlags = await getFlags(countryInitials);
  setFlagsState(countryFlags);
};
