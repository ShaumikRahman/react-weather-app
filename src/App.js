import { useState } from "react";
import Search from "./components/Search";
import OutputForecast from "./components/OutputForecast";
import OutputWeather from "./components/OutputWeather";
import Footer from "./components/Footer";

function App() {
  const [query, setQuery] = useState('');
  const [forecast, setForecast] = useState(true);

  function toggle() {
    setForecast(!forecast);
  }

  return (
    <div className="app">
      {forecast ? <h1 className="app__title">Forecast</h1> : <h1 className="app__title">Weather</h1>}
      <Search handleQuery={(q) => {setQuery(q)}} toggle={toggle}/>
      {forecast ? <OutputForecast searchQuery={query}/> : <OutputWeather searchQuery={query}/>}
      <Footer />
    </div>  
  );
}

export default App;
