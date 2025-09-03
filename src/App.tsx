import React from "react";
import Header from "./components/Header";
import Project from "./components/Project";
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Project />
    </div>
  );
}

export default App;
