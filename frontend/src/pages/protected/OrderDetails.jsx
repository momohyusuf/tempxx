import React, { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { serverUrl } from "../../utils/helper";

const OrderDetails = () => {
  const params = useParams();

  async function getOrderDetails() {
    try {
      const response = await axios.get(
        `${serverUrl}/order/order-info/${params.order_id}`
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getOrderDetails();
  }, []);
  return <div>OrderDetails</div>;
};

export default OrderDetails;
