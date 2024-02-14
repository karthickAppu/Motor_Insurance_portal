import React, { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Claim () {

    const history=useNavigate();

    const [route, setRoute] = React.useState(false);

    const [formData, setFormData] = useState({
      agentName:"",
      fromDate:"",
      toDate: "",
      premiumRate: "",
      policyNo:"",
      customerName:"",
      customerContact:"",
      vehicleName:"",
      vehicleNo:"",
      chassisNo:"",
      sumInsure:""
    })

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };

      const handleSearch = (event) => {
        axios.get('http://localhost:8080/policy/getPolicy/'+formData.policyNo)
        .then((response) => {
            console.log("Response code from server", response.code);
            //get policy status from response and set
            const[agentName]=[response.data.policy.agentName]
            const[fromDate]=[response.data.policy.fromDate]
            const[toDate]=[response.data.policy.toDate]
            const[premiumRate]=[response.data.policy.premiumRate]

            const[customerName]=[response.data.policy.customerName]
            const[customerContact]=[response.data.policy.customerContact]

            const[vehicleNo]=[response.data.policy.vehicleNo]
            const[vehicleName]=[response.data.policy.vehicleName]
            const[chassisNo]=[response.data.policy.chassisNo]
            const[sumInsure]=[response.data.policy.sumInsure]

            setFormData({
              agentName:agentName,
              fromDate:fromDate,
              toDate:toDate,
              premiumRate:premiumRate,
              customerName:customerName,
              customerContact:customerContact,
              vehicleNo:vehicleNo,
              vehicleName:vehicleName,
              chassisNo:chassisNo,
              sumInsure:sumInsure
          });
        console.log("Policy Exist", response.data);
        })
        .catch((error) => {
            console.error("Policy Not Found: ", error);
      
            let errorMessage = "Policy Not Found...";
      
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


      const handleClear = () => {

        setFormData({
            policyNo:"",
        })

      }
    
      const handleBack = () => {
        history("/home");
      }

      const handleClaim = (event) => {
        event.preventDefault();
        window.alert("Policy Claimed Successfully");
      }
return(
    <div class="min-h-screen">

	<section class=""> 
		<h1 class="pt-2 h-12 mb-5 pl-10 text-g text-center justify-center font-bold bg-green-500"> Claim Policy </h1>
	</section>

    <section class=""> 
		<div class="flex flex-cols-3">
            <div>
                <h6 class="h-12 pl-6 pr-6 "> Enter Policy No. : </h6>
            </div>
            <div>
                <input 
                    name='policyNo' 
                    value={formData.policyNo} 
                    onChange={handleInputChange}
                    class="w-full px-4 py-2 mb-2 rounded border"  
                />
            </div>
            <div class="grid grid-cols-4 gap-x-10 ml-4 mr-2 ml-5 pb-12">
                <button
                    onClick={() => {handleSearch();setRoute(!route)}}
                    className="h-10 w-28 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 ml-5 rounded"
                    >
                    Search
                </button>
                <button
                    onClick={handleClaim}
                    className="h-10 w-28 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 ml-5 rounded"
                    >
                    Claim
                </button>

                <button
                    onClick={() => {handleClear();setRoute(false)}}
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
        </div>
	</section>

  {route ? 
	<section>
    <div className="ml-8 pl-3 justify-center grid grid-cols-3">

        
      <div class="">
          	<h1 className=" text-xl text-center text-gray-800 font-bold mb-8 pl-2"> Policy Details </h1>
            <div className="w-70 flex flex-cols-2">
              <div class="w-30 px-4 py-2 mb-2">
              <h2 class="h-12"> Agent Name </h2>
              <h2 class="h-12"> Start Date </h2>
              <h2 class="h-12"> End Date </h2>
              <h2 class="h-12"> Premium Rate </h2>
              
              </div>
              <div class="w-40">
                <input
                  name='agentName' 
                  value={formData.agentName} 
                  //onChange={(event)=>setagentname(event.target.value)}
                  class="w-full px-4 py-2 mb-2 rounded border"
                />
                
                <input
                  name='fromDate'
                  value={formData.fromDate} 
                  class="w-full px-4 py-2 mb-2 rounded border"
                />
                <input
                  name='toDate' 
                  value={formData.toDate} 
                  class="w-full px-4 py-2 mb-2 rounded border"
                />
                
                <input
                  name='premiumRate' 
                  value={formData.premiumRate} 
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
              <h2 class="h-12"> Contact No </h2>
              </div>
              <div class="w-40">
                <input
                  name='customerName' 
                  value={formData.customerName} 
                  class="w-full px-4 py-2 mb-2 rounded border"
                />
                
                <input 
                  name='customerContact' 
                  value={formData.customerContact} 
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
              <h2 class="h-12"> Sum Insured </h2>
              </div>
              <div class="w-40">
              <input 
                name='vehicleName' 
                value={formData.vehicleName} 
                class="w-full px-4 py-2 mb-2 rounded border"
              />
	      <input 
                name='vehicleNo' 
                value={formData.vehicleNo} 
                class="w-full px-4 py-2 mb-2 rounded border"
              />
	      <input 
                name='chassisNo' 
                value={formData.chassisNo} 
                class="w-full px-4 py-2 mb-2 rounded border"
              />
	      <input 
                name='sumInsure' 
                value={formData.sumInsure} 
                class="w-full px-4 py-2 mb-2 rounded border"
              />
	     </div>
       </div>
		  </div>
  

    </div>
	</section>
    :null}
    </div>
);
}
export default Claim;