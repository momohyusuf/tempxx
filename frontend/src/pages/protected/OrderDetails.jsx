import React, { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { serverUrl } from "../../utils/helper";
import moment from "moment";

const OrderDetails = () => {
  const params = useParams();
  const [orderInformation, setOrderInformation] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  async function getOrderDetails() {
    setLoading(true);
    try {
      const response = await axios.get(
        `${serverUrl}/order/order-info/${params.order_id}`
      );
      setOrderInformation(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getOrderDetails();
  }, []);

  console.log(orderInformation);
  if (loading) {
    return (
      <div>
        <h1 className="text-center py-60 animate-pulse text-gray-500 text-5xl tracking-wider">
          Loading order details...
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-[1000px] mx-auto p-4 py-16 bg-green-50 my-10 rounded-md">
      <p className="text-2xl font-medium mb-3">
        {moment(new Date(orderInformation.createdAt)).format(
          "MMMM Do YYYY, h:mm:ss a"
        )}
      </p>
      <h3 className="bg-green-800 text-white w-fit p-2 rounded-md">
        {orderInformation.orderStatus}
      </h3>

      <div>
        <h2>Transaction details</h2>
        <p>
          <strong>Paystack TransactionId: </strong>{" "}
          {orderInformation.reference.trxref}
        </p>
        <p>
          <strong>Transaction status: </strong>{" "}
          {orderInformation.reference.status}
        </p>
        <p>
          <strong>Payment: </strong> {orderInformation.reference.message}
        </p>
      </div>

      <div>
        <h2>Customer information</h2>
        <p>
          <strong>Name: </strong>{" "}
          {orderInformation.customerDeliveryInfo.customerName}
        </p>

        <p>
          <strong>Email: </strong> {orderInformation.customerDeliveryInfo.email}
        </p>
        <p>
          <strong>Phone Number: </strong>{" "}
          {orderInformation.customerDeliveryInfo.phoneNumber}
        </p>

        <p>
          <strong>Delivery Address: </strong>{" "}
          {orderInformation.customerDeliveryInfo.deliveryAddress}
        </p>
      </div>

      <table>
        <thead>
          <tr>
            <th>Product Id</th>
            <th>Product image</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Quantity</th>
          </tr>
        </thead>
        <tbody>
          {orderInformation.cartItems.map((item) => (
            <tr key={item._id}>
              <td>{item.product_id}</td>
              <td>
                <div>
                  <img src={item.product_image} alt={item.product_name} />
                </div>
              </td>
              <td>{item.product_name}</td>
              <td>{item.product_price}</td>
              <td>{item.product_quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderDetails;
