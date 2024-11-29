import { BrowserRouter as Router, Route } from "react-router-dom";
import SlideRoutes from "react-slide-routes";
import HomePage from "./page/home";
import ProductsPage from "./page/products";
import ProductDetail from "./page/product-detail";
import AppInfo from "./page/app-info";
import ScrollToTop from "./components/ScrollToTop";

export default function Routing() {
  return (
    <Router>
      <ScrollToTop />
      <SlideRoutes>
        <Route path="*" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/app-info" element={<AppInfo />} />
      </SlideRoutes>
    </Router>
  );
}
