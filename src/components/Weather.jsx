import React from 'react';

function Weather({ cities }) {
  return (
    <div className="style-output">
      {cities.map((city) => {
        const {
          id,
          name,
          sys: { country },
          main: { temp },
        } = city;
        return (
          <article key={id}>
            <h2>
              {name} ( {country} ) {temp}
            </h2>
          </article>
        );
      })}
    </div>
  );
}

export default Weather;
