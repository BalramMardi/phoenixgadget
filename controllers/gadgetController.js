const Gadget = require("../models/Gadget");
const generateCodename = require("../utils/generateCodename");
const generateProbability = require("../utils/generateProbability");

exports.addGadget = async (req, res) => {
  try {
    const name = generateCodename();
    const gadget = new Gadget({ name });
    await gadget.save();
    res.status(201).json(gadget);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateGadget = async (req, res) => {
  try {
    const gadget = await Gadget.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!gadget) return res.status(404).json({ message: "Gadget not found" });
    res.json(gadget);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteGadget = async (req, res) => {
  try {
    const gadget = await Gadget.findById(req.params.id);
    if (!gadget) return res.status(404).json({ message: "Gadget not found" });

    gadget.status = "Decommissioned";
    gadget.decommissionedAt = new Date();
    await gadget.save();

    res.json({ message: "Gadget decommissioned" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.triggerSelfDestruct = async (req, res) => {
  try {
    const gadget = await Gadget.findById(req.params.id);
    if (!gadget) return res.status(404).json({ message: "Gadget not found" });

    const confirmationCode = Math.random()
      .toString(36)
      .substring(2, 10)
      .toUpperCase();
    res.json({
      message: `Self-destruct sequence initiated.`,
      confirmationCode,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getGadgets = async (req, res) => {
  try {
    const { status } = req.query;

    let query = {};
    if (status) {
      query.status = status;
    }

    const gadgets = await Gadget.find(query);

    const gadgetsWithProbability = gadgets.map((gadget) => ({
      ...gadget.toObject(),
      successProbability: `${
        Math.floor(Math.random() * 41) + 60
      }% success probability`,
    }));

    res.status(200).json(gadgetsWithProbability);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch gadgets" });
  }
};
