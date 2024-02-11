// userController.js
const Policy = require("../models/policyModel");
const Counters = require("../models/countersModel");

//const nextseq=require("./genNewSequence");

// Create a new Policy
exports.createPolicy = async (req, res) => {
  try {
    // Generate a unique Policy ID
    // Combine the unique Policy ID with other fields from the request body
    
    const policy = new Policy({...req.body});

    // Save the user to the MongoDB collection
    await policy.save();

    return res.status(201).json({ message: "Policy created successfully", policy });
  } catch (err) {
    console.error(err); // Log the error for debugging
    return res.status(500).json({ error: "Internal server error" });
  }
};


//Approve Policy
exports.approvePolicy = async (req, res) => {
  try { 
    const { policyNo } = req.params;
    const policy = await Policy.findOne({policyNo});
    if (!policy) {
      return res.status(404).json({ error: "Policy not found" });
    }
    else if (policy.policyStatus=='Approved'){
      return res.status(404).json({ error: "Policy already Approved" });
    }
    else if (policy.policyStatus!='Draft'){
      return res.status(404).json({ error: "Policy not in Draft" });
    }
    const updatedpolicy = await Policy.findOneAndUpdate(
      {policyNo}, 
      {"policyStatus" : "Approved"}, 
      {new: true}
      );
    return res.status(200).json({ message: "Policy Approved successfully", updatedpolicy });
  } catch (err) {
    return res.status(500).json({ error: "Internal server error" , context:err});
  }
};


//Reject Policy
exports.rejectPolicy = async (req, res) => {
  try { 
    const { policyNo } = req.params;
    const policy = await Policy.findOne({policyNo});
    if (!policy) {
      return res.status(404).json({ error: "Policy not found" });
    }
    else if (policy.policyStatus=='Rejected'){
      return res.status(404).json({ error: "Policy already rejected" });
    }
    else if (policy.policyStatus!='Draft'){
      return res.status(404).json({ error: "Policy not in Draft" });
    }
    const updatedpolicy = await Policy.findOneAndUpdate(
      {policyNo}, 
      {"policyStatus" : "Rejected"}, 
      {new: true}
      );
    return res.status(200).json({ message: "Policy rejected successfully", updatedpolicy });
  } catch (err) {
    return res.status(500).json({ error: "Internal server error" , context:err});
  }
};




//Summary
exports.getPremiumSummary = async (req, res) => {
  try {
    const { policyNo } = req.params;
    const policy = await Policy.findOne({ policyNo });

    const premiumAmount=(policy.sumInsure * policy.premiumRate)/100;
    const agentCommission=premiumAmount * 0.1;
    const GST=premiumAmount * 0.18;
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

exports.getPolicy = async (req, res) => {
  try {

    const { policyNo } = req.params;
    const policy = await Policy.findOne({ policyNo });
    if (!policy) {
        return res.status(404).json({ error: "Policy not found" });
    }
    return res.status(200).json({ message: "Policy found", policy });
  } catch (err) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

//Renew Policy
exports.renewPolicy = async (req, res) => {
  try {
    console.log(req.body);
    const { policyNo } = req.params;
    const policy = await Policy.findOneAndUpdate(
      {policyNo}, 
      {
        "fromDate" : req.body.fromDate,
        "toDate" : req.body.toDate
    }, 
      {new: true}
      );
      await policy.save();

      if (!policy) {
        return res.status(404).json({ error: "Policy not found" });
      }
    return res.status(200).json({ message: "Policy renewed successfully", policy });
  } catch (err) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
