import React, { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ViewPolicy () {

    const history=useNavigate();

    const [route, setRoute] = React.useState(false);

    const [formData, setFormData] = useState({
        fromDate:"",
        toDate: "",
        policyNo:"",
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
            const[fromDate]=[response.data.policy.fromDate]
            const[toDate]=[response.data.policy.toDate]
            const[policyNo]=[response.data.policy.policyNo]

            setFormData({
              fromDate:fromDate,
              toDate:toDate,
              policyNo:policyNo
          });
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

      const handleRenewal = (event) => {
        event.preventDefault();
    axios
    .put("http://localhost:8080/policy/renew/"+formData.policyNo+"",{
        "fromDate":formData.fromDate,
        "toDate":formData.toDate
    })
    .then((response) => {
      console.log("Response code from server", response.code);
      console.log("Policy Renewed successfully", response.data);
      window.alert("Policy Renewed successfully!");
    })
    .catch((error) => {
      console.error("Error Renewing Policy: ", error);
      let errorMessage = "Error Renewing Policy...";
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

return(
    <div class="min-h-screen">

	<section class=""> 
		<h1 class="pt-2 h-12 mb-5 pl-10 text-g text-center justify-center font-bold bg-green-500"> Renew Policy </h1>
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
                    onClick={handleRenewal}
                    className="h-10 w-28 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 ml-5 rounded"
                    >
                    Renew
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
          	<h1 className=" text-xl text-center text-gray-800 font-bold mb-8 pl-2"> Policy Renewal </h1>
            <div className="w-70 flex flex-cols-2">
              <div class="w-30 px-4 py-2 mb-2">
              <h2 class="h-12"> New Start Date </h2>
              <h2 class="h-12"> New End Date </h2>
              
              </div>
              <div class="w-40">
                <input
                  name='fromDate'
                  type="date"
                  value={formData.fromDate}
                  onChange={handleInputChange}
                  class="w-full px-4 py-2 mb-2 rounded border"
                />
                <input
                  name='toDate' 
                  type='date'
                  value={formData.toDate}
                  onChange={handleInputChange}
                  class="w-full px-4 py-2 mb-2 rounded border"
                />
              </div>
            </div>
          </div>
		  
		  <div></div>
          <div></div>
    </div>
	</section>
    :null}
    </div>
);
}
export default ViewPolicy;