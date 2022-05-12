import React, { useState, useEffect } from 'react';
import { getCityWeather } from '../data/fetch-data';
import '../style/style-form.css';

function Form() {
  let [input, setInput] = useState('');
  const [arrCities, setArrCities] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    setArrCities(input.split(','));
    setInput('');
  };

  useEffect(() => {
    getCityWeather(arrCities);
  }, [arrCities]);

  const onChange = (e) => setInput(e.target.value);

  return (
    <form onSubmit={onSubmit} className="style-form">
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
