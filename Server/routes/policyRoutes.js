//policyRoutes.js
const express = require("express");
const policyController = require("../controllers/policyController");
const policyValidator = require("../validators/policyValidator");

const router = express.Router();

router.post(
  "/create",
  policyValidator.createPolicyValidator,
  policyController.createPolicy
);

router.put("/approve/:policyNo", policyController.approvePolicy);
router.get("/summary/:policyNo", policyController.getPremiumSummary);



module.exports = router;