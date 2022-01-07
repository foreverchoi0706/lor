import React from "react";
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
    body  {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        main{
            min-width:800px;
        }
    }
`;

const App = () => {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyle />
      <Reset />
      <HashRouter>
        <Header />
        <Banner />
        <main>
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
