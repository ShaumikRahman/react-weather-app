import { useState } from "react";
import Search from "./components/Search";
import Output from "./components/Output";

function App() {
  const [query, setQuery] = useState('');

  return (
    <div className="app">
      <h1 className="app__title">5 Day Weather</h1>
      <Search handleQuery={(q) => {setQuery(q)}}/>
      <Output searchQuery={query}/>
    </div>  
  );
}

export default App;
