import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import { Routes, Route, HashRouter } from "react-router-dom";
/**@components */
import Header from "./components/organisms/Header.jsx";
import Banner from "./components/organisms/Banner.jsx";
/**@pages */
import Lol from "./pages/Lol.jsx";
import Lor from "./pages/Lor.jsx";
import Tft from "./pages/Tft.jsx";

const GlobalStyle = createGlobalStyle`
  body{
    display: flex;
    justify-content: center;
    align-items: center;
    main{
      max-width: 800px;
    }
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyle />
      <Reset />
      <HashRouter>
        <main>
          <Banner />
          <Header />
          <Routes>
            <Route path="/" element={<div>HOME</div>} />
            <Route path="/lol" element={<Lol />} />
            <Route path="/lor" element={<Lor />} />
            <Route path="/tft" element={<Tft />} />
          </Routes>
        </main>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
