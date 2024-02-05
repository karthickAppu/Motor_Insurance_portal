// userController.js
const Policy = require("../models/policyModel");
const mongoose = require("mongoose");
//const nextseq=require("./genNewSequence");

// Create a new Policy
exports.createPolicy = async (req, res) => {
  try {
    // Generate a unique Policy ID
    //const Policyno = getNextSequence("policyno");
    //const Policyno = getNextSequence("policyno");

    // Combine the unique Policy ID with other fields from the request body
    
    const policy = new Policy({ policyNo : 1, ...req.body });

    // Save the user to the MongoDB collection
    await policy.save();

    return res.status(201).json({ message: "Policy created successfully", policy });
  } catch (err) {
    console.error(err); // Log the error for debugging
    return res.status(500).json({ error: "Internal server error" });
  }
};


// Approve Policy
exports.approvePolicy = async (req, res) => {
  try {

    const { policyNo } = req.params;
    const policy = await Policy.findOneAndUpdate(
      {policyNo}, 
      {"policyStatus" : "Approved"}, 
      {new: true}
      );
      if (!policy) {
        return res.status(404).json({ error: "Policy not found" });
      }
    return res.status(200).json({ message: "Policy approved successfully", policy });
  } catch (err) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

exports.getPremiumSummary = async (req, res) => {
  try {
    const { policyNo } = req.params;
    const policy = await Policy.findOne({ policyNo });

    const premiumAmount=(policy.sumInsure * policy.premiumRate)/100;
    const agentCommission=premiumAmount * 0.1;
    const GST=premiumAmount * 1.8;
    const totalAmount=premiumAmount+GST-agentCommission;

    const premiumSummary=
    {
      sumInsure:policy.sumInsure,
      premiumRate:policy.premiumRate,
      premiumAmount:premiumAmount,
      agentCommission:agentCommission,
      GST:GST,
      totalAmount:totalAmount
    }

    return res.status(200).json(premiumSummary);
  } catch (err) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

