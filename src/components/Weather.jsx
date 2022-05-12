import React from 'react';
import '../style/style-weather.css';

function Weather({ cities }) {
  console.log(cities);
  return (
    <main>
      {cities.map(({ id, name, sys: { country }, main: { temp } }) => (
        <article key={id}>
          <h2>
            {name} ( {country} ) {temp}
          </h2>
        </article>
      ))}
    </main>
  );
}

export default Weather;
