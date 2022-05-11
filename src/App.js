import Header from "./components/Header";
import Characters from "./components/Characters";
import "./App.css";
import { useContext, useState } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const {theme} = useContext(ThemeContext);
  return (
      <div className={`App ${theme}`}>
        <Header />
        <Characters />
      </div>

  );
}

export default App;
