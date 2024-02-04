import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PolicyDetails() {

  const [formData, setFormData] = useState({
    agentName: "",
    branchCode: "",
    fromDate:"",
    toDate: "",
    status: "",
    premiumRate: "",
	policyNo:""
  });

  const [customerFormData, setCustomerFormData] = useState({
    customerName: "",
    customerAge: "",
    customerDOB: "",
    customerName: "",
    customerEmail: "",
    customerAddress: "",
	customerCity:"",
	customerPincode:""
  });

  const [riskFormData, setRiskFormData] = useState({
    vehicleName: "",
    vehicleNo: "",
    chassisNo: "",
    sumInsure: "",
    vehicleColor: "",
    vehicleMake: "",
	vehicleLife:""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCustomerChange = (event) => {
    const { name, value } = event.target;
    setCustomerFormData({ ...customerFormData, [name]: value });
  }; 

  const handleRiskChange = (event) => {
    const { name, value } = event.target;
    setRiskFormData({ ...riskFormData, [name]: value });
  }; 

  const handleSave = () => {
 
  }

  const handleApprove = () => {
 
  }

  const handleReject = () => {

  }

  const handlePremiumSummary = () => {

  }

  const handleClear = () => {
    setFormData({
      agentName: "",
        branchCode: "",
        fromDate: "",
        toDate: "",
        status: "",
        premiumRate: "",
      policyNo:""
    })
    setCustomerFormData({
      customerName: "",
      customerAge: "",
      customerDOB: "",
      customerName: "",
      customerEmail: "",
      customerAddress: "",
      customerCity:"",
      customerPincode:""
    })
    setRiskFormData({
      vehicleName: "",
      vehicleNo: "",
      chassisNo: "",
      sumInsure: "",
      vehicleColor: "",
      vehicleMake: "",
      vehicleLife:""
    })
  }

  const handleBack = () => {

  }

  return (
	<div class="min-h-screen">

	<section> 
		<h1 class="mb-5 pt-2 pb-2 pl-10 text-lg font-bold bg-green-500"> Policy Registration </h1>
	</section>

	<section>
    <div className="ml-12 pl-4 justify-center grid grid-cols-3">

          <div class="">
          	<h1 className=" text-xl text-gray-800 font-bold mb-8 pl-6"> 1. Policy Details </h1>
      		<div className="w-60">
			{Object.keys(formData).map((field) => (
			<input
				key={field}
				type={field === "password" ? "password" : "text"}
				name={field}
				value={formData[field]}
				onChange={handleChange}
				placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
				className="w-full px-4 py-2 mb-2 rounded border"
			/>
			))}
          </div>
		  </div>

		  <div class="">
          	<h1 className=" text-xl text-gray-800 font-bold mb-8 pl-6"> 2. Customer Details </h1>
      		<div className="w-60">
			{Object.keys(customerFormData).map((field) => (
			<input
				key={field}
				type={field === "password" ? "password" : "text"}
				name={field}
				value={customerFormData[field]}
				onChange={handleCustomerChange}
				placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
				className="w-full px-4 py-2 mb-2 rounded border"
			/>
			))}
          </div>
		  </div>

		  <div class="">
          	<h1 className=" text-xl text-gray-800 font-bold mb-8 pl-6"> 3. Risk Details </h1>
      		<div className="w-60">
			{Object.keys(riskFormData).map((field) => (
			<input
				key={field}
				type={field === "password" ? "password" : "text"}
				name={field}
				value={riskFormData[field]}
				onChange={handleRiskChange}
				placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
				className="w-full px-4 py-2 mb-2 rounded border"
			/>
			))}
          </div>
		  </div>

    </div>
	</section>

	<section>
		<div class="grid grid-cols-6 gap-x-10 ml-4 mr-2 ml-5 pb-12 mt-8">
		<button
          onClick={handleSave}
          className="h-10 w-28 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 ml-5 rounded"
        >
          Save
        </button>

		<button
          onClick={handleApprove}
          className="w-28 h-10 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Approve
        </button>

		<button
          onClick={handleReject}
          className="w-28 h-10 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Reject
        </button>

		<button
          onClick={handlePremiumSummary}
          className="w-28 h-10 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Summary
        </button>

		<button
          onClick={handleClear}
          className="w-28 h-10 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Clear
        </button>

		<button
          onClick={handleBack}
          className="w-28 h-10 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Back
        </button>

		</div>

	</section>

	</div>
  );
};

export default PolicyDetails;