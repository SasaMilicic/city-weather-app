import React from 'react';

const kelvinToCelsius = (kelvin) => Math.round(kelvin - 273.15);

const renderCity = ({
  id,
  name,
  sys: { country },
  main: { temp, temp_max, temp_min, feels_like, humidity, pressure },
  wind: { speed },
}) => (
  <article key={id}>
    <h4>
      {name} ( {country} ) {kelvinToCelsius(temp)}°C
    </h4>
    <p>
      max/min:
      <span>
        {kelvinToCelsius(temp_max)}°/{kelvinToCelsius(temp_min)}°C
      </span>
    </p>
    <p>
      feels like: <span> {kelvinToCelsius(feels_like)}°C </span>
    </p>
    <p>
      humidity:<span> {humidity}% </span>
    </p>
    <p>
      pressure: <span> {pressure}mb </span>
    </p>
    <p>
      wind speed: <span>{speed} km/h </span>
    </p>
  </article>
);

function Weather({ cities }) {
  const checkRenderElements = (city) => {
    if (city.error) return;
    return renderCity(city);
  };

  return (
    <div className="style-output">
      {cities.map((city) => {
        return checkRenderElements(city);
      })}
    </div>
  );
}

export default Weather;
