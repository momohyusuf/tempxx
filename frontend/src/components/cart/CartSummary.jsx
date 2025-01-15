import React from "react";
import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helper";
import { Button } from "antd";

const CartSummary = () => {
  const { userCartSummary } = useSelector((state) => state.cart);

  console.log(userCartSummary);

  return (
    <div className="bg-gray-100 rounded-md p-2">
      <div className="flex justify-between mb-4">
        <p className="text-gray-500">
          items total ({userCartSummary.totalCartItems})
        </p>
        <p className="text-gray-500 font-semibold">
          {formatCurrency(userCartSummary.totalAmount)}
        </p>
      </div>

      <div className="flex justify-between mb-4">
        <p className="text-gray-500">discount</p>
        <p className="text-gray-500 font-semibold">%5</p>
      </div>

      <div className="text-xl font-semibold flex justify-between mb-4">
        <h3>Subtotal</h3>
        <h3>{formatCurrency(userCartSummary.totalAmount)}</h3>
      </div>

      <Button type="primary" size="large" block>
        Checkout {formatCurrency(userCartSummary.totalAmount)}
      </Button>
    </div>
  );
};

export default CartSummary;