import React, { useState } from 'react';
import '../style/style-form.css';

function Form() {
  let [input, setInput] = useState('');
  const [arrCities, setArrCities] = useState([]);

  // const onChange = (e) => setInput(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    setArrCities((prev) => [...prev, input]);
    setInput('');
  };
  const onChange = (e) => setInput(e.target.value);
  console.log(input);
  console.log(arrCities);
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
