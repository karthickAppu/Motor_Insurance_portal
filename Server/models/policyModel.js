// userModel.js
const mongoose = require("mongoose");

function getNextSequence(name) {
  var ret =  mongoose.counters.findAndModify(
         {
           query: { _id: name },
           update: { $inc: { seq: 2024000001} },
           new: true
         }
  );

  return ret.seq;
}

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
    required: false,
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
    default:"Incomplete",
    required: true,
  },
  premiumRate: {
    type: Number,
    required: true,
  },
  customerName: {
    type: String, 
    required: true,//unique: true,summa
  },
  customerDob: {
    type: Date,
    required: true,
  },

  customerAge: {
  type: Number,
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
  },
  vehicleAge: {
    type:  Number,
    required: true,
  }
});

const policy = mongoose.model("policy", PolicySchema);


module.exports = policy;

//P-MOT-2024-000002
//C-MOT-2024-000001
//2024001