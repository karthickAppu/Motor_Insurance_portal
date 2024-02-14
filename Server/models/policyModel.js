// userModel.js
const mongoose = require("mongoose");

const PolicySchema = new mongoose.Schema({

  agentName: {
    type: String,
    required: true,
  },
  branchCode: {
    type: String,
    required: true,
  },

  policyNo: {
    type: Number,
    required: true,
    unique:true
  },

  fromDate: {
    type: Date,
    required: true,
  },
  toDate: {
    type: Date,
    required: true,
  },

  policyStatus: {
    type: String,
    default:"Draft",
    required: true,
  },
  premiumRate: {
    type: Number,
    required: true,
  },
  customerName: {
    type: String, 
    required: true,
  },
  customerDob: {
    type: Date,
    required: true,
  },

   customerContact: {
    type:  Number,
    required: true,
  },
  customerEmail: {
    type:  String,
    required: false,
  },
  customerAddress: {
    type:  String,
    required: true,
  },
  customerCity: {
    type:  String,
    required: true,
  },
  customerPincode: {
    type:  Number,
    required: true,
  },
  vehicleName: {
    type:  String,
    required: true,
  },
  vehicleNo: {
    type:  String,
    required: true,
  },
  chassisNo: {
    type:  String,
    required: true,
  },
  sumInsure: {
    type:  Number,
    required: true,
  },
  vehicleColour: {
    type:  String,
    required: true,
  },
  vehicleMfg: {
    type:  Date,
    required: true,
  }
});

const policy = mongoose.model("policy", PolicySchema);


module.exports = policy;

//P-MOT-2024-000002
//C-MOT-2024-000001
//2024001