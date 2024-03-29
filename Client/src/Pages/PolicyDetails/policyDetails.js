import React, { useState ,useEffect} from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";


function PolicyDetails () {

  const history=useNavigate();
  const [route, setRoute] = React.useState(false);

  const [formData, setFormData] = useState({
    agentName: "",
    branchCode: "",
    fromDate:"",
    toDate: "",
    policyStatus: "Draft",
    premiumRate: "",
    policyNo:"",
    customerName:"",
    customerDob:"",
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
    vehicleMfg:""
  })

  const [summaryData,setsummaryData] = useState({
    policyNo:"",
    sumInsure:"",
    premiumRate:"",
    premiumAmount:"",
    agentCommission:"",
    GST:"",
    totalAmount:""
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSave = (event) => {
    event.preventDefault();
    axios
    .post("http://localhost:8080/policy/create", formData)
    .then((response) => {
      const[policyStatus,policyNo]=[
          response.data.policy.policyStatus,
          response.data.policy.policyNo];
      setFormData({
          policyStatus:policyStatus,
          policyNo:policyNo
      });
      console.log("Policy created successfully", response.data);
      window.alert("Policy registered successfully!");
    })
    .catch((error) => {
      console.error("Error creating Policy: ", error);

      let errorMessage = "Error creating Policy...";

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
      console.log("Response code from server", response.code);
      //get policy status from response and set
      const[policyStatus]=[response.data.updatedpolicy.policyStatus]
      setFormData({policyStatus:policyStatus});
      console.log("Policy approved successfully", response.data);
      window.alert("Policy approved successfully!");
    })
    .catch((error) => {
      console.error("Error Approving Policy: ", error);
      let errorMessage = "Error Approving Policy...";
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

  const handleReject = (event) => {
    event.preventDefault();
    axios
    .put("http://localhost:8080/policy/reject/"+formData.policyNo+"")
    .then((response) => {
      console.log("Response code from server", response.code);
      //get policy status from response and set
      const[policyStatus]=[response.data.updatedpolicy.policyStatus]
      setFormData({policyStatus:policyStatus});
      console.log("Policy rejected successfully", response.data);
      window.alert("Policy rejected!");
    })
    .catch((error) => {
      console.error("Error Rejecting Policy: ", error);
      let errorMessage = "Error Rejecting Policy...";
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

  const handleSummary=() =>{
  axios.get('http://localhost:8080/policy/summary/'+formData.policyNo)
        .then((response) => {
            console.log("Response code from server", response.code);
            //get policy status from response and set
            const[sumInsure]=[response.data.sumInsure]
            const[premiumRate]=[response.data.premiumRate]
            const[premiumAmount]=[response.data.premiumAmount]
            const[agentCommission]=[response.data.agentCommission]
            const[GST]=[response.data.GST]
            const[totalAmount]=[response.data.totalAmount]
            setsummaryData({
              sumInsure:sumInsure,
              premiumRate:premiumRate,
              premiumAmount:premiumAmount,
              agentCommission:agentCommission,
              GST:GST,
              totalAmount:totalAmount
          });
          })
  }

  const handleClear = () => {

    setFormData({
    agentName: "",
    branchCode: "",
    fromDate:"",
    toDate: "",
    policyStatus: "Draft",
    premiumRate: "",
    policyNo:"",
    customerName:"",
    customerDob:"",
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
    vehicleMfg:""
    })
  }

  const handleBack = () => {
    history("/home");
  }
  
  return (
	<div class="min-h-screen">

	<section class=""> 
		<h1 class="pt-2 h-12 mb-5 pl-10 text-g text-center justify-center font-bold bg-green-500"> Policy Registration </h1>
	</section>

	<section>
    <div className="ml-8 pl-3 justify-center grid grid-cols-3">

      <div class="">
          	<h1 className=" text-xl text-center text-gray-800 font-bold mb-8 pl-2"> Policy Details </h1>
            <div className="w-70 flex flex-cols-2">
              <div class="w-30 px-4 py-2 mb-2">
              <h2 class="h-12"> Agent Name </h2>
              <h2 class="h-12"> Branch </h2>
              <h2 class="h-12"> Policy No </h2>
              <h2 class="h-12"> Start Date </h2>
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
                <input
                  name='policyNo' 
                  value={formData.policyNo} 
                  onChange={handleInputChange}
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
                  //onChange={handleInputChange}
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
          	<h1 className=" text-xl text-center text-gray-800 font-bold mb-8 pl-2"> Customer Details </h1>
            <div className="w-70 flex flex-cols-2">
              <div class="w-30 px-4 py-2 mb-2">
              <h2 class="h-12"> Name </h2>
              <h2 class="h-12"> Date Of Birth</h2>
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
          	<h1 className=" text-xl text-center text-gray-800 font-bold mb-8 pl-2"> Risk Details </h1>
            <div className="w-70 flex flex-cols-2">
              <div class="w-30 px-4 py-2 mb-2">
              <h2 class="h-12"> Vehicle Name </h2>
              <h2 class="h-12"> Vehicle No</h2>
              <h2 class="h-12"> Chassis No </h2>
              <h2 class="h-12"> Sum Insure </h2>
              <h2 class="h-12"> Vehicle  color </h2>
              <h2 class="h-12"> Vehicle M.F.G </h2>
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
              onClick={() => {handleSummary();setRoute(!route)}}
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
  {route ? 
  <section>
    <div className="ml-8 pl-3 justify-center grid grid-cols-3 scroll-auto">
      <div></div>
      <div>
    <h1 className=" text-xl text-center text-gray-800 font-bold mb-8 pl-2"> Summary Details </h1>
    <div className="w-70 flex flex-cols-2">
              <div class="w-30 px-4 py-2 mb-2">
              <h2 class="h-12"> Sum Insure </h2>
              <h2 class="h-12"> Premium Rate </h2>
              <h2 class="h-12"> Premium Amount </h2>
              <h2 class="h-12"> Agent Commission </h2>
              <h2 class="h-12"> GST </h2>
              <h2 class="h-12"> Net Amount to Customer </h2>
              
              </div>
              <div class="w-40">
                <input
                  name='sumInsure'
                  value={summaryData.sumInsure} 
                  class="w-full px-4 py-2 mb-2 rounded border"
                />
                <input
                  name='premiumRate' 
                  value={summaryData.premiumRate} 
                  class="w-full px-4 py-2 mb-2 rounded border"
                />
                <input
                  name='premiumAmount' 
                  value={summaryData.premiumAmount} 
                  class="w-full px-4 py-2 mb-2 rounded border"
                />
                <input
                  name='agentCommission' 
                  value={summaryData.agentCommission} 
                  class="w-full px-4 py-2 mb-2 rounded border"
                />
                <input
                  name='GST' 
                  value={summaryData.GST} 
                  class="w-full px-4 py-2 mb-2 rounded border"
                />
                <input
                  name='totalAmount' 
                  value={summaryData.totalAmount} 
                  class="w-full px-4 py-2 mb-2 rounded border"
                />
              </div>
            </div>
    </div>
    <div></div>
    </div>
  </section>
  :null}
  </div>
  );
}
export default PolicyDetails;