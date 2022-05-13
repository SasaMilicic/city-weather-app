import React, { useState } from 'react';
import Form from './Form';
import { StHeader } from './style/style-header';

function Header({ setArrCities }) {
  let [input, setInput] = useState('');
  const regex = /,/g;

  return (
    <StHeader>
      <h1>Current Weather</h1>
      {input === '' && <p> Type city name! </p>}
      {input.length > 0 && !input.includes(',') && (
        <p>
          For more then one city,
          <br /> separate by coma!
        </p>
      )}
      {input.match(regex) !== null && input.match(regex).length > 9 && (
        <p className="error"> '10 cities is maximum!' </p>
      )}
      <Form setArrCities={setArrCities} input={input} setInput={setInput} />
    </StHeader>
  );
}

export default Header;
