import React from "react";
import { GlobalStyles } from "./components/styled/Global";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Main from "./components/Main";
import About from "./components/About";
import Articles from "./components/Articles";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Nav />
      <Main />
      <About />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
