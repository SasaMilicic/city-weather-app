import React from 'react';

function Weather({ cities }) {
  const renderCity = ({ id, name, sys: { country }, main: { temp } }) => (
    <article key={id}>
      <h2>
        {name} ( {country} ) {temp}
      </h2>
    </article>
  );

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
