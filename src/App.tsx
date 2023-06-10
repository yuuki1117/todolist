import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header title={"Todo"} />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
