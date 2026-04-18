import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";

import Home from "./pages/Home.jsx";
import Designs from "./pages/Designs.jsx";
import Headbands from "./pages/Headbands.jsx";
import Brooches from "./pages/Brooches.jsx";
import Gallery from "./pages/Gallery.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import BraceletsAndEarrings from "./pages/bracletsandearings.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/designs" element={<Designs />} />
          <Route path="/headbands" element={<Headbands />} />
          <Route path="/brooches" element={<Brooches />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          //<Route path="/bracletsandearings" element={<BraceletsAndEarrings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}