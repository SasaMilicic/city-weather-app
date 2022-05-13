import React from 'react';
import { ReactComponent as CloseBtn } from './closeIcon.svg';

function ListCities({ cities, setCities }) {
  const handleArticle = (id) => {
    setCities((cities) => cities.filter((el) => el.id !== id));
  };

  const renderCityElement = ({ name, sys: { country }, id }) => (
    <p>
      {name} ( {country} )
      <CloseBtn onClick={() => handleArticle(id)} />
    </p>
  );

  const renderErrorMessage = ({ error }) => <p>{error}</p>;

  const check = (city) => {
    if (city.error) {
      console.log(city);
      return renderErrorMessage(city);
    }

    return renderCityElement(city);
  };

  return (
    <ul>
      <h2>Search box</h2>
      {cities.map((city) => {
        return <li key={city.id}> {check(city)}</li>;
      })}
    </ul>
  );
}

export default ListCities;
