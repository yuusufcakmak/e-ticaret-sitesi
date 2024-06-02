import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";

const CartProgress = () => {
  const { cartItems } = useContext(CartContext);

  const cartItemTotals = cartItems.map((item) => item.price * item.quantity);
  const subTotals = cartItemTotals.reduce((prev, curr) => prev + curr, 0);

  const freeShippingThreshold = 1000;
  const remainingAmount = freeShippingThreshold - subTotals;
  const progressPercentage = Math.min(
    (subTotals / freeShippingThreshold) * 100,
    100
  );

  return (
    <div className="free-progress-bar">
      <p className="progress-bar-title">
        {remainingAmount > 0 ? (
          <>
            Sepete <strong>{remainingAmount.toFixed(2)} TL</strong> daha ekle
            kargon bedava olsun!
          </>
        ) : (
          <>
            Kargon <strong>bedava!</strong>
          </>
        )}
      </p>
      <div className="progress-bar">
        <span
          className="progress"
          style={{ width: `${progressPercentage}%`, backgroundColor: "red" }}
        ></span>
      </div>
    </div>
  );
};

export default CartProgress;
