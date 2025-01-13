import { Route, Routes } from "react-router";
import Home from "./pages/Homepage";
import MarketPlace from "./pages/Marketplace";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path="products">
          <Route index element={<MarketPlace />} />
          <Route path=":product_id" element={<ProductDetails />} />
        </Route>

        
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
