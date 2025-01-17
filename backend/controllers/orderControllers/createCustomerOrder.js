async function createCustomerOrder(req, res) {
  res
    .status(201)
    .json({ stats: "Success", data: "Order created successfully" });
}

export { createCustomerOrder };
