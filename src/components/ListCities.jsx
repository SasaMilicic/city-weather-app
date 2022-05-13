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

  const renderErrorMessage = ({ error, id }) => (
    <p className="style-error">
      {error} <CloseBtn onClick={() => handleArticle(id)} />
    </p>
  );

  const checkRenderElements = (city) => {
    if (city.error) {
      return renderErrorMessage(city);
    }
    return renderCityElement(city);
  };

  return (
    <ul>
      <h2>Search box</h2>
      {cities.map((city) => {
        return <li key={city.id}> {checkRenderElements(city)}</li>;
      })}
    </ul>
  );
}

export default ListCities;
