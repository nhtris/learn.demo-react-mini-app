import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./page/home";
import ProductsPage from "./page/products";
import ProductDetail from "./page/product-detail";
import AppInfo from "./page/app-info";
import SlideRoutes from "react-slide-routes";

export default function Routing() {
  return (
    <Router>
      {/* //   <Routes> */}
      <SlideRoutes>
        <Route path="*" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/app-info" element={<AppInfo />} />
        {/* </Routes> */}
      </SlideRoutes>
    </Router>
  );
}
