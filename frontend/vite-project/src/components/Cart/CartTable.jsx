import { useContext } from "react";
import CartItem from "./CarItem";
import { CartContext } from "../../context/CartProvider";

const CartTable = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <table className="shop-table">
      <thead>
        <tr>
          <th className="product-thumbnail">&nbsp;</th>
          <th className="product-thumbnail">&nbsp;</th>
          <th className="product-name">Ürün</th>
          <th className="product-price">Fiyat</th>
          <th className="product-quantity">Adet</th>
          <th className="product-subtotal">Toplam Fiyat</th>
        </tr>
      </thead>
      <tbody className="cart-wrapper">
        {cartItems.map((item) => (
          <CartItem cartItem={item} key={item._id} />
        ))}
      </tbody>
    </table>
  );
};

export default CartTable;
