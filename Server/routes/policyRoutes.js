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
router.put("/reject/:policyNo", policyController.rejectPolicy);
router.get("/summary/:policyNo", policyController.getPremiumSummary);

router.get("/getPolicy/:policyNo",policyController.getPolicy);

router.put("/renew/:policyNo", policyController.renewPolicy);

module.exports = router;