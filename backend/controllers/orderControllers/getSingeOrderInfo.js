import Order from "../../models/orderModel/orderModel.js";

async function getOrderInfo(req, res) {
  const params = req.params;

  try {
    const orderInfo = await Order.findOne({ _id: params.orderId });
    res.status(200).json({ data: orderInfo, status: "successful" });
  } catch (error) {
    res.status(400).json({ data: error, status: "Failed" });
  }
}

export { getOrderInfo };
