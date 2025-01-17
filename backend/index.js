import express from "express";

import orderRoutes from "./routes/ordersRoutes.js";

const PORT = 3000;
const app = express();

app.get("/health", (req, res) => {
  res.status(200).json({ message: "Server currently running" });
});

app.use("/api/v1/order", orderRoutes);

app.listen(PORT, () => {
  console.log(`Server running on PORT:${PORT}`);
});
