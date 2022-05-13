import React, { useState } from 'react';
import { ReactComponent as SearchIcon } from './svg/searchIcon.svg';

function Form({ setArrCities }) {
  let [input, setInput] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setArrCities(input.split(','));
    setInput('');
  };

  const onChange = (e) => setInput(e.target.value);

  return (
    <form onSubmit={onSubmit}>
      <input
        type="search"
        placeholder="Enter cities..."
        onChange={onChange}
        value={input}
      />
    </form>
  );
}

export default Form;
