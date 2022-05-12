import { useEffect } from 'react';
import './App.css';
import { getCityWeather } from './data/fetch-data';

function App() {
  useEffect(() => {
    getCityWeather('Backo Dobro Polje');
  }, []);

  return (
    <div className="App">
      <h1>Hello WORLD!</h1>
    </div>
  );
}

export default App;
