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

const renderCity = ({
  id,
  name,
  main: { temp, temp_max, temp_min, feels_like, humidity, pressure },
  wind: { speed },
}) => (
  <article key={id}>
    <h2>
      <CurrentTempIcon /> {convertKtoC(temp)}°C
    </h2>
    <h4> {name} </h4>

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
      <PressureIcon /> <span> {pressure}mb </span>
    </p>
    <p>
      <WindIcon /> <span>{speed} km/h </span>
    </p>
  </article>
);

function WeatherDetails({ cities }) {
  return (
    <StWeatherDetails>
      {cities.map((city) => (city.error ? '' : renderCity(city)))}
    </StWeatherDetails>
  );
}

export default WeatherDetails;
