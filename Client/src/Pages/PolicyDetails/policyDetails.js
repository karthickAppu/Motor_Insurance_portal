import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PolicyDetails() {

  const history=useNavigate();

  // const [formData, setFormData] = useState({
  //     agentName: "",
  //     branchCode: "",
  //     fromDate:"",
  //     toDate: "",
  //     status: "",
  //     premiumRate: "",
  //     policyNo:""
  // });

  const [formData, setFormData] = useState({
    agentName: "",
    branchCode: "",
    fromDate:"",
    toDate: "",
    policyStatus: "",
    premiumRate: "",
    policyNo:"",
    customerName:"",
    customerDob:"",
    customerAge:"",
    customerContact:"",
    customerEmail:"",
    customerAddress:"",
    customerCity:"",
    customerPincode:"",
    vehicleName:"",
    vehicleNo:"",
    chassisNo:"",
    sumInsure:"",
    vehicleColour:"",
    vehicleMfg:"",
    vehicleAge:""
  })

  // const [branchcode, setbranchcode] = useState("");
  // const [policyno, setpolicyno] = useState("");
  // const [fromdate, setfromdate] = useState("");
  // const [todate, settodate] = useState("");
  // const [Policystatus, setPolicystatus] = useState("");
  // const [Premiumrate, setPremiumrate] = useState("");


  // const [customername, setcustomername] = useState("");
  // const [customerdob, setcustomerdob] = useState("");
  // const [customerage, setcustomerage] = useState("");
  // const [customerno, setcustomerno] = useState("");
  // const [customeremail, setcustomeremail] = useState("");
  // const [customeraddress, setcustomeraddress] = useState("");
  // const [customercity, setcustomercity] = useState("");
  // const [customerpincode, setcustomerpincode] = useState("");

  // const [vehiclename, setvehiclename] = useState("");
  // const [vehicleno, setvehicleno] = useState("");
  // const [chassisno, setchassisno] = useState("");
  // const [suminsure, setsuminsure] = useState("");
  // const [vehiclecolour, setvehiclecolour] = useState("");
  // const [vehiclemfg, setvehiclemfg] = useState("");
  // const [vehicleage, setvehicleage] = useState("");

    //const [customerFormData, setCustomerFormData] = useState({
    //customerName: "",
    //customerAge: "",
    //customerDOB: "",
    //customerName: "",
    //customerEmail: "",
    //customerAddress: "",
    //customerCity:"",
    //customerPincode:""
    //});

  // const [riskFormData, setRiskFormData] = useState({
  //   vehicleName: "",
  //   vehicleNo: "",
  //   chassisNo: "",
  //   sumInsure: "",
  //   vehicleColor: "",
  //   vehicleMake: "",
	//   vehicleLife:""
  // });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // const handleCustomerChange = (event) => {
  //   const { name, value } = event.target;
  //   setCustomerFormData({ ...customerFormData, [name]: value });
  // }; 

  // const handleRiskChange = (event) => {
  //   const { name, value } = event.target;
  //   setRiskFormData({ ...riskFormData, [name]: value });
  // }; 

  const handleSave = (event) => {
    event.preventDefault();
    axios
    .post("http://localhost:8080/policy/create", formData)
    .then((response) => {
      console.log("Policy created successfully", response.data);
      window.alert("Policy registered successfully!");
      //const { password, username } = formData;
      //register( password, username);
      //navigate("/");
    })
    .catch((error) => {
      console.error("Error creating Policy: ", error);

      let errorMessage = "Go to Log In page and Enter your credentials";

      if (
        error.response &&
        error.response.data &&
        error.response.data.error
      ) {
        // If the server sends an error message, use it
        errorMessage = error.response.data.error;
      }

      window.alert(errorMessage);
    });
  }

  const handleApprove = (event) => {
    event.preventDefault();
    axios
    .put("http://localhost:8080/policy/approve/"+formData.policyNo+"")
    .then((response) => {
      console.log("Policy approved successfully", response.data);
      window.alert("Policy approved successfully!");
      //const { password, username } = formData;
      //register( password, username);
      //navigate("/");
    })
    .catch((error) => {
      console.error("Error Approving Policy: ", error);

      let errorMessage = "Error Approving Policy";

      if (
        error.response &&
        error.response.data &&
        error.response.data.error
      ) {
        // If the server sends an error message, use it
        errorMessage = error.response.data.error;
      }
      window.alert(errorMessage);
    });
  }

  const handleReject = () => {

  }

  const handlePremiumSummary = () => {

  }

  const handleClear = () => {

    setFormData({
    agentName: "",
    branchCode: "",
    fromDate:"",
    toDate: "",
    policyStatus: "Incomplete",
    premiumRate: "",
    policyNo:"",
    customerName:"",
    customerDob:"",
    customerAge:"",
    customerContact:"",
    customerEmail:"",
    customerAddress:"",
    customerCity:"",
    customerPincode:"",
    vehicleName:"",
    vehicleNo:"",
    chassisNo:"",
    sumInsure:"",
    vehicleColour:"",
    vehicleMfg:"",
    vehicleAge:""
    })
  }

  const handleBack = () => {
    history("/home");
  }

  return (
	<div class="min-h-screen">

	<section> 
		<h1 class="mb-5 pt-2 pb-2 pl-10 text-g font-bold bg-green-500"> Policy Registration </h1>
	</section>

	<section>
    <div className="ml-12 pl-4 justify-center grid grid-cols-3">

      <div class="">
          	<h1 className=" text-xl text-center text-gray-800 font-bold mb-8 pl-6"> Policy Details </h1>
            <div className="w-80 flex flex-cols-2">
              <div class="w-30 px-4 py-2 mb-2">
              <h2 class="required h-12"> Agent Name </h2>
              <h2 class="h-12"> Branch </h2>
              <h2 class="h-12"> Policy No </h2>
              <h2 class="h-12"> start Date </h2>
              <h2 class="h-12"> End Date </h2>
              <h2 class="h-12"> Policy status </h2>
              <h2 class="h-12"> Premium Rate </h2>
              
              </div>
              <div class="w-40">
                <input
                  name='agentName' 
                  value={formData.agentName} 
                  onChange={handleInputChange}
                  //onChange={(event)=>setagentname(event.target.value)}
                  class="w-full px-4 py-2 mb-2 rounded border"
                />
                <input
                  name='branchCode' 
                  value={formData.branchCode} 
                  onChange={handleInputChange}
                  //onChange={(event)=>setbranchcode(event.target.value)}
                  class="w-full px-4 py-2 mb-2 rounded border"
                />
                <input readonly
                  name='policyNo' 
                  value={formData.policyNo} 
                  //onChange={handleInputChange}
                  class="w-full px-4 py-2 mb-2 rounded border"
                />
                <input
                  name='fromDate' 
                  type="date"
                  defaultValue="" //set todays date
                  value={formData.fromDate} 
                  onChange={handleInputChange}
                  class="w-full px-4 py-2 mb-2 rounded border"
                />
                <input
                  name='toDate' 
                  type="date"
                  defaultValue="" //set todays date
                  value={formData.toDate} 
                  onChange={handleInputChange}
                  class="w-full px-4 py-2 mb-2 rounded border"
                />
                <input
                  name='policyStatus' 
                  value={formData.policyStatus} 
                  readonly
                  //onChange={handleInputChange}s
                  //onChange={(event)=>setPolicystatus(event.target.value)}
                  class="w-full px-4 py-2 mb-2 rounded border"
                />
                <input
                  name='premiumRate' 
                  value={formData.premiumRate} 
                  onChange={handleInputChange}
                  class="w-full px-4 py-2 mb-2 rounded border"
                />
              </div>
            </div>
          </div>
		  

		  <div class="">
          	<h1 className=" text-xl text-center text-gray-800 font-bold mb-8 pl-6"> Customer Details </h1>
            <div className="w-80 flex flex-cols-2">
              <div class="w-30 px-4 py-2 mb-2">
              <h2 class="h-12"> Customer Name </h2>
              <h2 class="h-12"> Date Of Birth</h2>
              <h2 class="h-12"> Age </h2>
              <h2 class="h-12"> Contact No </h2>
              <h2 class="h-12"> Email-Id </h2>
              <h2 class="h-12"> Address </h2>
              <h2 class="h-12"> City </h2>
              <h2 class="h-12"> Pincode </h2>
              </div>
              <div class="w-40">
                <input
                  name='customerName' 
                  value={formData.customerName} 
                  onChange={handleInputChange}
                  class="w-full px-4 py-2 mb-2 rounded border"
                />
                <input
                  name='customerDob' 
                  type="date"
                  value={formData.customerDob}
                  onChange={handleInputChange}
                  class="w-full px-4 py-2 mb-2 rounded border"
                />
                <input
                  name='customerAge' 
                  value={formData.customerAge} 
                  onChange={handleInputChange}
                  class="w-full px-4 py-2 mb-2 rounded border"
                />
                <input 
                  name='customerContact' 
                  value={formData.customerContact} 
                  onChange={handleInputChange}
                  class="w-full px-4 py-2 mb-2 rounded border"
                />
                <input 
                  name='customerEmail' 
                  value={formData.customerEmail} 
                  onChange={handleInputChange}
                  class="w-full px-4 py-2 mb-2 rounded border"
                />
	              <input 
                name='customerAddress' 
                value={formData.customerAddress} 
                onChange={handleInputChange}
                class="w-full px-4 py-2 mb-2 rounded border"
                />
              <input 
                name='customerCity' 
                value={formData.customerCity} 
                onChange={handleInputChange}
                class="w-full px-4 py-2 mb-2 rounded border"
              />
              <input 
                name='customerPincode' 
                value={formData.customerPincode} 
                onChange={handleInputChange}
                class="w-full px-4 py-2 mb-2 rounded border"
              />
              </div>
            </div>  
      </div>

		  <div class="">
          	<h1 className=" text-xl text-center text-gray-800 font-bold mb-8 pl-6"> Risk Details </h1>
            <div className="w-80 flex flex-cols-2">
              <div class="w-30 px-4 py-2 mb-2">
              <h2 class="h-12"> Vehicle Name </h2>
              <h2 class="h-12"> Vehicle No</h2>
              <h2 class="h-12"> Chassis No </h2>
              <h2 class="h-12"> Sum Insure </h2>
              <h2 class="h-12"> Vehicle  color </h2>
              <h2 class="h-12"> Vehicle M.F.G </h2>
              <h2 class="h-12"> Vehicle Age</h2>
              </div>
              <div class="w-40">
              <input required
                name='vehicleName' 
                value={formData.vehicleName} 
                onChange={handleInputChange}
                class="w-full px-4 py-2 mb-2 rounded border"
              />
	      <input required
                name='vehicleNo' 
                value={formData.vehicleNo} 
                onChange={handleInputChange}
                class="w-full px-4 py-2 mb-2 rounded border"
              />
	      <input required
                name='chassisNo' 
                value={formData.chassisNo} 
                onChange={handleInputChange}
                class="w-full px-4 py-2 mb-2 rounded border"
              />
	      <input required
                name='sumInsure' 
                value={formData.sumInsure} 
                onChange={handleInputChange}
                class="w-full px-4 py-2 mb-2 rounded border"
              />
	      <input required
                name='vehicleColour' 
                value={formData.vehicleColour} 
                onChange={handleInputChange}
                class="w-full px-4 py-2 mb-2 rounded border"
              />
	      <input required
                name='vehicleMfg' 
                type="date"
                value={formData.vehicleMfg} 
                onChange={handleInputChange}
                class="w-full px-4 py-2 mb-2 rounded border"
              />
	      <input required
                name='vehicleAge' 
                value={formData.vehicleAge} 
                onChange={handleInputChange}
                class="w-full px-4 py-2 mb-2 rounded border"
              />
	     </div>
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