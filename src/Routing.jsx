import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./page/home";
import ProductsPage from "./page/products";

export default function Routing() {
  return (
    <Router>
      {/* <RemindNotification /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </Router>
  );
}
