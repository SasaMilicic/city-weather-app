import React from 'react';
import { ReactComponent as CloseBtn } from '../svg/closeIcon.svg';
import { StSearchBox } from './style/style-search-box';

function SearchBox({ cities, setCities }) {
  const handleArticle = (id) => {
    setCities((cities) => cities.filter((el) => el.id !== id));
  };

  return (
    <StSearchBox>
      <ol>
        <h2>Search box</h2>
        {cities.map((city) => {
          const { id, name, error } = city;
          return (
            <li key={id}>
              {error ? (
                <p className="error">
                  {error} <CloseBtn onClick={() => handleArticle(id)} />
                </p>
              ) : (
                <p>
                  {name} ( {city.sys.country} )
                  <CloseBtn onClick={() => handleArticle(id)} />
                </p>
              )}
            </li>
          );
        })}
      </ol>
    </StSearchBox>
  );
}

export default SearchBox;
