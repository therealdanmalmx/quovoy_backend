const Lead = require("../models/leads");

exports.createLead = async (req, res) => {
  try {
    const { name, email, status } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: "Name and email are required" });
    }

    const existingLead = await Lead.findOne({ email });
    if (existingLead) {
      return res
        .status(400)
        .json({ message: "A lead with this email already exists" });
    }

    const lead = new Lead({
      name,
      email,
      status: status || "New",
    });

    const savedLead = await lead.save();
    res.status(201).json(savedLead);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating lead", error: error.message });
  }
};

exports.getAllLeads = async (req, res) => {
  try {
    const leads = await Lead.find();
    res.status(200).json(leads);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching leads", error: error.message });
  }
};
