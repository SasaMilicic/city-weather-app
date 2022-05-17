const getFlags = async (arrCities, Sflags) => {
  const flags = await Promise.all(
    arrCities.map(async (city) => {
      const fetchCityWeather = await fetch(FLAGS_URL(city));
      return fetchCityWeather.url;
    })
  );
  Sflags(flags);
};

const FLAGS_URL = (countryInitial) => {
  return `https://countryflagsapi.com/svg/${countryInitial}`;
};

const WEATHER_URL = (el) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${el}&appid=${process.env.REACT_APP_WEATHER_KEY}`;
};

const getRandomInteger = () => Math.floor(100000 + Math.random() * 900000);

const getCountryInitials = (countries) =>
  countries.map((el) => {
    if (el.error) return;

    return el.sys.country;
  });

const getCityWeather = async (city) => {
  const weather = await fetch(WEATHER_URL(city));
  if (!weather.ok) {
    return {
      error: `'${weather.url.slice(50, -39)}' not found!`,
      id: getRandomInteger(),
    };
  }

  return await weather.json();
};

export const getCitiesWeather = async (arrCities, setArr, setFlags) => {
  if (arrCities.length > 10) arrCities = arrCities.slice(0, 10);

  const arrCitiesData = await Promise.all(
    arrCities.map(async (city) => getCityWeather(city))
  );

  const countryInitials = getCountryInitials(arrCitiesData);
  getFlags(countryInitials, setFlags);
  setArr(arrCitiesData);
};

// const getItem = async (id) => {
//   const fetchArticle = await fetch(itemURL(id));
//   if (!fetchArticle.ok) return;

//   return await fetchArticle.json();
// };

// const getItems = (itemIds) => {
//   const itemPromises = itemIds.map(getItem);

//   return Promise.all(itemPromises);
// };

// Countryinitials
