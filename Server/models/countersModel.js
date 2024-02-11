const mongoose = require("mongoose");


const countersSchema = new mongoose.Schema({

    _id: {
      type: String
    },
    seq: {
      type: Number
    }
    
  });
  
const Counters = mongoose.model("Counters", countersSchema);
module.exports = Counters;