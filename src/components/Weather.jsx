import React from 'react';

function Weather({ cities }) {
  /* proba */
  const renderCity = ({ id, name, sys: { country }, main: { temp } }) => (
    <article key={id}>
      <h2>
        {name} ( {country} ) {temp}
      </h2>
    </article>
  );

  return (
    <div className="style-output">
      {/* {cities.map((city) => {
        return renderCity(city);
      })} */}
    </div>
  );
}

export default Weather;
