import React from "react";
import GlobalStyles from "./components/shared/Global";
import Nav from "./components/nav/Nav";
import Home from "./components/pages/home/Home";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="container-app">
      <GlobalStyles />
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
