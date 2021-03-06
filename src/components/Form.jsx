import { StForm } from './style/style-form';

function Form({ setCityNames, input, setInput }) {
  const onSubmit = (e) => {
    e.preventDefault();
    setCityNames(input.split(','));
    setInput('');
  };

  const onChange = (e) => setInput(e.target.value);

  return (
    <StForm onSubmit={onSubmit}>
      <input
        type="search"
        placeholder="Enter cities..."
        onChange={onChange}
        value={input}
      />
    </StForm>
  );
}

export default Form;
