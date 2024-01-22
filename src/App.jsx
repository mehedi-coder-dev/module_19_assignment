import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "../src/assets/css/custom.css";
import Home from "../src/pages/Home";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ProductPage from "./pages/ProductPage";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import ThanksPage from "./pages/ThanksPage";
import NotFoundPage from "./pages/NotFoundPage";
import Checkoutpage from "./pages/Checkoutpage";
import Frequently from "./pages/Frequently";
import AccountForm from "./pages/AccountForm";
import Register from "./pages/Register";
import BlogPage from "./pages/BlogPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/thanksPage" element={<ThanksPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/checkout" element={<Checkoutpage />} />
        <Route path="/faq" element={<Frequently />} />
        <Route path="/account" element={<AccountForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
