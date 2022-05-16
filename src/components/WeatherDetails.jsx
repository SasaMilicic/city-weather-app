import React from 'react';
import { StWeatherDetails } from './style/style-weather-details';
import { ReactComponent as WindIcon } from '../svg/windIcon.svg';
import { ReactComponent as CurrentTempIcon } from '../svg/currentTempIcon.svg';
import { ReactComponent as HighTempIcon } from '../svg/tempHighIcon.svg';
import { ReactComponent as LowTempIcon } from '../svg/tempLowIcon.svg';
import { ReactComponent as FeelsLikeIcon } from '../svg/feelsLikeIcon.svg';
import { ReactComponent as HumidityIcon } from '../svg/humidityIcon.svg';
import { ReactComponent as PressureIcon } from '../svg/pressureIcon.svg';

const convertKtoC = (kelvin) => Math.round(kelvin - 273.15);

const renderCity = (city, flag) => {
  const {
    id,
    name,
    main: { temp, temp_max, temp_min, feels_like, humidity, pressure },
    wind: { speed },
  } = city;

  return (
    <article key={id}>
      <h3>
        {name} <img src={flag} alt={''} />
      </h3>
      <h2>
        <CurrentTempIcon /> {convertKtoC(temp)}°C
      </h2>

      <p>
        <span>
          <HighTempIcon />/<LowTempIcon />
        </span>
        <span>
          {convertKtoC(temp_max)}°/{convertKtoC(temp_min)}°C
        </span>
      </p>
      <p>
        <FeelsLikeIcon /> <span> {convertKtoC(feels_like)}°C </span>
      </p>
      <p>
        <HumidityIcon /> <span> {humidity}% </span>
      </p>
      <p>
        <PressureIcon /> <span> {pressure} mb </span>
      </p>
      <p>
        <WindIcon /> <span>{speed} km/h </span>
      </p>
    </article>
  );
};

function WeatherDetails({ cities, flags }) {
  return (
    <StWeatherDetails>
      {cities.map((city) => {
        if (city.error) return;

        if (flags.length > 0) {
          const flag = flags.filter(
            (flag) => flag.slice(-2) === city.sys.country
          );

          return renderCity(city, flag[0]);
        }
      })}
    </StWeatherDetails>
  );
}

export default WeatherDetails;
