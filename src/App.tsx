import React from "react";
import "./App.css";
import { useState } from "react";
import { data } from "./data";
import Movies from "./components/Movies";
import { Search } from "./components/Search";

function App() {
  const [movies, setMovies] = useState(data);

  return (
    <div>
      <Movies movieObjects={movies} />
    </div>
  );
}

export default App;
