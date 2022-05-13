import React from 'react';
import '../style/style-weather.css';

function Weather({ cities, setCities }) {
  console.log(cities);
  const handleArticle = (id) => {
    setCities((cities) => cities.filter((el) => el.id !== id));

    // cities.forEach((el) => {
    //   el.id === id ? console.log('jeste') : console.log('nije');
    // });
    console.log(id);
  };
  return (
    <main>
      {cities.map((city) => {
        const {
          id,
          name,
          sys: { country },
          main: { temp },
        } = city;
        return (
          <article onClick={() => handleArticle(id)} key={id}>
            <h2>
              {name} ( {country} ) {temp}
            </h2>
          </article>
        );
      })}
    </main>
  );
}

export default Weather;
// { id, name, sys: { country }, main: { temp } }
