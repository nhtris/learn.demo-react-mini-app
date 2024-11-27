import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./page/home";
import ProductsPage from "./page/products";
import ProductDetail from "./page/product-detail";

export default function Routing() {
  return (
    <Router>
      {/* <RemindNotification /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product-detail" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}
