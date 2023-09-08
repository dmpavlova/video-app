import React from "react";
import "./App.css";
import { data } from "./data";
import Movies from "./components/Movies";

function App() {


  return (
    <div>
      <Movies movieObjects={data} />
    </div>
  );
}

export default App;
