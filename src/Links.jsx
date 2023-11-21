import { Route, Routes, useLocation } from "react-router-dom";

//import of pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Brand from "./pages/Brand";

//import of components
import Project from "./components/Project";

const Links = ({ setIsBrandPage }) => {
  const location = useLocation();

  // Detect if the current location is the "Brand" page
  const isBrandPage = location.pathname === "/brand";

  // Update the isBrandPage state
  setIsBrandPage(isBrandPage);

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/brand" element={<Brand />} />
      <Route path="/project/:id" element={<Project />} />
    </Routes>
  );
};

export default Links;
