import { useState } from "react";
import Search from "./components/Search";
import Output from "./components/Output";

function App() {
  const [query, setQuery] = useState('');

  return (
    <div className="App">
      <Search handleQuery={(q) => {setQuery(q)}}/>
      <Output searchQuery={query}/>
    </div>  
  );
}

export default App;
