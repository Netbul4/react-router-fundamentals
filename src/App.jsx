import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Error404 } from "./pages/Error404";
import { Products } from "./pages/Products";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/acerca" element={<Navigate to="/about"></Navigate>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
