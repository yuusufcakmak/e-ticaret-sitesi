import ReactDOM from "react-dom/client";
import App from "./App";
import MainLayout from "./layouts/MainLayout";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import CartProvider from "./context/CartProvider";
import "slick-carousel/slick/slick.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <MainLayout>
      <App />
    </MainLayout>
  </CartProvider>
);
