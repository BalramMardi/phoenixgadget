const mongoose = require("mongoose");

const GadgetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: {
    type: String,
    enum: ["Available", "Deployed", "Destroyed", "Decommissioned"],
    default: "Available",
  },
  decommissionedAt: { type: Date, default: null },
});

module.exports = mongoose.model("Gadget", GadgetSchema);
