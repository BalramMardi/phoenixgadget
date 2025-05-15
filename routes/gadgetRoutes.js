const express = require("express");
const router = express.Router();
const {
  addGadget,
  updateGadget,
  deleteGadget,
  triggerSelfDestruct,
  getGadgets,
} = require("../controllers/gadgetController");
const protect = require("../middleware/authMiddleware");

router.post("/create", protect, addGadget);
router.patch("/:id", protect, updateGadget);
router.delete("/:id", protect, deleteGadget);
router.post("/:id/self-destruct", protect, triggerSelfDestruct);
router.get("/", protect, getGadgets);

module.exports = router;
