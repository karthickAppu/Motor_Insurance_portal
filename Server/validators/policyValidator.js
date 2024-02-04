// userValidator.js
const Joi = require("joi");

// Validation schema for creating a user
exports.createPolicyValidator = (req, res, next) => {
  const schema = Joi.object({
    agentName: Joi.string().min(3).max(30).required(),
    branchCode: Joi.string().min(2).required(),
    fromDate: Joi.date().required().required(),
    toDate: Joi.date().required(),
    policyStatus:Joi.string(),
    policyNo:Joi.number(),
    premiumRate: Joi.number(),
    customerName: Joi.string().min(3).max(30).required(),
    customerDob: Joi.date().required(),
    customerAge:Joi.number().min(2),
    customerContact: Joi.number(),
    customerEmail: Joi.string().min(3).max(30),
    customerAddress: Joi.string().min(5).max(30).required(),
    customerCity: Joi.string().min(3).max(30).required(),
    customerPincode: Joi.number(),
    vehicleName: Joi.string().min(3).max(30).required(),
    vehicleNo: Joi.string().alphanum().min(3).max(30).required(),
    chassisNo: Joi.string().alphanum().min(3).max(30).required(),
    sumInsure: Joi.number(),
    vehicleColour: Joi.string().min(3).required(),
    vehicleMfg:Joi.date().required() ,
    vehicleAge: Joi.number(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

// Validation schema for updating a user
// exports.updateUserValidator = (req, res, next) => {
//   const schema = Joi.object({
//     email: Joi.string().email(),
//     password: Joi.string().min(6),
//     username: Joi.string().alphanum().min(3).max(30),
//     firstName: Joi.string(),
//     lastName: Joi.string(),
//     age: Joi.number().integer().min(1),
//     gender: Joi.string().valid("Male", "Female", "Other"),
//     address: Joi.string(),
//     city: Joi.string(),
//     country: Joi.string(),
//   }).min(1); // At least one field must be present for an update

//   const { error } = schema.validate(req.body);
//   if (error) {
//     return res.status(400).json({ error: error.details[0].message });
//   }

//   next();
// };