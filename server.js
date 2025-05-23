const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const gadgetRoutes = require("./routes/gadgetRoutes");
const protect = require("./middleware/authMiddleware");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/gadgets", protect, gadgetRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
