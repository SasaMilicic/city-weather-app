import { useEffect } from 'react';
import './App.css';

function App() {
  const getCityWeather = async (city) => {
    const fetchCityWeather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_KEY}`
    );

    const data = await fetchCityWeather.json();
    console.log(data);
  };

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
