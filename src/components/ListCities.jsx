import React from 'react';
import { ReactComponent as CloseBtn } from './closeIcon.svg';

function ListCities({ cities, setCities }) {
  const handleArticle = (id) => {
    setCities((cities) => cities.filter((el) => el.id !== id));
  };

  return (
    <ul>
      <h2>List Cities</h2>
      {cities.map((city) => {
        const {
          id,
          name,
          sys: { country },
        } = city;
        return (
          <li key={id}>
            <p>
              {name} ( {country} )
              <CloseBtn onClick={() => handleArticle(id)} />
            </p>
          </li>
        );
      })}
    </ul>
  );
}

export default ListCities;
