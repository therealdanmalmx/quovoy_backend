const express = require("express");
const router = express.Router();
const leadsController = require("../controllers/leads");

router.get("/", leadsController.getAllLeads);
router.post("/", leadsController.createLead);

module.exports = router;
