import { useEffect } from 'react';
import './style/style-app.css';
import { getCityWeather } from './data/fetch-data';
import Form from './components/Form';
import Weather from './components/Weather';

function App() {
  useEffect(() => {
    getCityWeather(['BaCko DobRo PoLje', 'vrBaS', 'KUla']);
  }, []);

  return (
    <div className="style-app">
      <h1>Current Weather</h1>
      <Form />
      <Weather />
    </div>
  );
}

export default App;
