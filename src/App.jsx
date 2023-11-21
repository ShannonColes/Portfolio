import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// imports
import Header from "./components/Header";
import Footer from "./components/Footer";
import Links from "./Links";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [isBrandPage, setIsBrandPage] = useState(false);

  return (
    <div className="screen-container">
      <HashRouter>
        <ScrollToTop />
        {!isBrandPage && <Header />}
        <Links setIsBrandPage={setIsBrandPage} />
        {!isBrandPage && <Footer />}
      </HashRouter>
    </div>
  );
}

export default App;
