import React, { useState, useEffect } from 'react';

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
        type="text"
        placeholder="Enter cities..."
        onChange={onChange}
        value={input}
      />
    </form>
  );
}

export default Form;
