import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Error404 } from "./pages/Error404";
import { Products } from "./pages/Products";
import { ProductDetail } from "./pages/ProductDetail";
import { useState } from "react";
import { Services } from "./pages/Services";
import { ServiceWarranty } from "./pages/ServicesWarranty";
import { ServiceList } from "./pages/ServicesList";
import { ServicesHome } from "./pages/ServicesHome";
import { ServicePolitics } from "./pages/ServicesPolitics";
import { ServiceDetail } from "./pages/ServicesDetail";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Beer", price: "$2" },
    { id: 2, name: "Cigarrettes", price: "$1" },
    { id: 3, name: "Run", price: "$5" },
    { id: 4, name: "Whiskey", price: "$7" },
  ]);

  const [services, setServices] = useState([
    { id: 1, name: "Website design", price: "$500" },
    { id: 2, name: "System development", price: "$6000" },
    { id: 3, name: "App development", price: "$10000" },
    { id: 4, name: "UI design", price: "$800" },
  ]);

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
          <Route path="/products" element={<Products products={products} />} />
          <Route
            path="/products/:id"
            element={<ProductDetail products={products} />}
          />
          <Route path="/services" element={<Services />}>
            <Route index element={<ServicesHome />} />
            <Route path="warranty" element={<ServiceWarranty />} />
            <Route path="list" element={<ServiceList services={services} />} />
            <Route
              path=":id"
              element={
                <>
                  <ServiceList services={services}/>
                  <ServiceDetail services={services}/>
                </>
              }
            />
          </Route>
            <Route path="politics" element={<ServicePolitics />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
