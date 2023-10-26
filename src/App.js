import './App.css';
import Content from './components/Content';
import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'


function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const API_key = "975700c8717e977b9bd4ee924738db6c";

  const [fore, setFore] = useState([]);

  const [today, setToday]= useState([]);

  const [search, setSearch] = useState('chennai')

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearch('')
  }

  useEffect(() => {
    const fetchData = () => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('City not found');
          }
          return response.json();
        })
        .then((data) => {
          setWeather(data);
          setLoading(false);
          forecaste(data.coord.lat, data.coord.lon);

        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }
    fetchData()
  }, [search])

  const forecaste = (lat, lon) => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_key}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('City not found');
        }
        return response.json();
      })
      .then((data) => {
        const forecasts  = data.list;
       
        const currentDate = new Date().toISOString().slice(0, 10);
        const todayData = forecasts.filter((forecast) => {
          const forecastDate = new Date(forecast.dt * 1000).toISOString().slice(0, 10);
          return forecastDate === currentDate;
        });
        setToday(todayData)

        const dateForecastsMap = new Map();
        forecasts.forEach((dayData) => {
          const date = new Date(dayData.dt * 1000).toDateString();
          if (!dateForecastsMap.has(date)) {
            dateForecastsMap.set(date, {
              date: date,
              forecasts: [],
            });
          }
          dateForecastsMap.get(date).forecasts.push(dayData);
        });

        const forecastDataArray = [...dateForecastsMap.values()];

        setFore(forecastDataArray);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }


  return (
    <div>
      <Navbar search={search} setSearch={setSearch} handleSubmit={handleSubmit} />
      <Content search={search} weather={weather} fore={fore} today={today}/>
    </div>
  );
}

export default App;
