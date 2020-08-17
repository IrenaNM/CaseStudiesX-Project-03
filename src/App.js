import React from "react";
import "./App.css";
import Body from "./components/Body/Body";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";
import { Provider } from "./context/appContext";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import BackToTop from "../src/components/TopButton/TopButton";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <GlobalStyle />
        <Provider>
          <Body />
          <BackToTop />
        </Provider>
      </ScrollToTop>
    </Router>
  );
}

export default App;
