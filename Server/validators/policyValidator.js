// userValidator.js
const Joi = require("joi");

// Validation schema for creating a user
exports.createPolicyValidator = (req, res, next) => {
  const schema = Joi.object({
    agentName: Joi.string().min(3).max(30).required(),
    branchCode: Joi.string().min(2).required(),
    fromDate: Joi.date().required().required(),
    toDate: Joi.date().required(),
    policyStatus:Joi.string().optional(),
    policyNo:Joi.number().optional(),
    premiumRate: Joi.number().required(),
    customerName: Joi.string().min(3).max(30).required(),
    customerDob: Joi.date().required(),
    customerContact: Joi.number().min(10).required(),
    customerEmail: Joi.string().min(3).max(50).optional(),
    customerAddress: Joi.string().min(5).max(70).required(),
    customerCity: Joi.string().min(3).max(20).required(),
    customerPincode: Joi.number().min(6).required(),
    vehicleName: Joi.string().min(3).max(30).required(),
    vehicleNo: Joi.string().alphanum().min(3).max(30).required(),
    chassisNo: Joi.string().alphanum().min(3).max(30).required(),
    sumInsure: Joi.number().required(),
    vehicleColour: Joi.string().min(3).optional(),
    vehicleMfg:Joi.date().required() 
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};
