import React from 'react';
import { ReactComponent as CloseBtn } from '../svg/closeIcon.svg';
import { StSearchBox } from './style/style-search-box';

function SearchBox({ cityWeathers, setCityWeathers }) {
  const handleArticle = (id) => {
    setCityWeathers((cities) => cities.filter((city) => city.id !== id));
  };

  return (
    <StSearchBox>
      <ol>
        <h2>Search box</h2>
        {cityWeathers.map((city) => {
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
