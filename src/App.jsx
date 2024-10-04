import { Route, Routes } from "react-router-dom";

import NavbottomComponent from "./components/NavbottomComponent";
import HomePages from "./pages/HomePages";

import "./App.css"; //Style Css
import SearchPages from "./pages/SearchPages";
import NewsPages from "./pages/NewsPages";
import ShopPages from "./pages/ShopPages";
import LogoComponents from "./components/LogoComponents";
import AlquranPages from "./pages/AlquranPages";
import WiridPages from "./pages/WiridPages";
import DetailsuratPages from "./pages/DetailsuratPages";

function App() {
  return (
    <div>
      <LogoComponents />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/search" element={<SearchPages />} />
        <Route path="/news" element={<NewsPages />} />
        <Route path="/shop" element={<ShopPages />} />
        <Route path="/Alquran" element={<AlquranPages />} />
        <Route path="/Wirid" element={<WiridPages />} />
        <Route path="/Surahdetail/:nomor" element={<DetailsuratPages />} />
      </Routes>
      <NavbottomComponent />
    </div>
  );
}

export default App;
