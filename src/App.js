import React from "react";
import { Navbar, Main, Footer } from "./Components";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Main />
        <Footer />
      </Router>
    </>
  );
}

export default App;
