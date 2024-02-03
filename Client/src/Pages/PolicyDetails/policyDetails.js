import React,{ useState } from "react"
import axios from "axios";
import {useLocation, useNavigate} from 'react-router-dom';

function PolicyDetails (){
   // const location=useLocation()

   const history=useNavigate();
   const [formData, setFormData] = useState({
    customerName: "",
    customerAge: "",
    customerDOB: "",
    customerContact: "",
    customerEmail: "",
    customerAddress: "",
    agentUsername: "",
    agentBranchcode:""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    axios
      .post("http://localhost:8080/users/create", formData)
      .then((response) => {
        console.log("User created successfully", response.data);
        window.alert("User registered successfully!");
        const { password, username } = formData;
        //register( password, username);
        //navigate("/");
      })
      .catch((error) => {
        console.error("Error creating user: ", error);

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
  };

  

  const handlePremiumSummary = () => {
    history("/login");
  }
  const handlePolicyNumber = () => {
    history("/login");
  }
  
  const handleApprove = () => {
    history("/login");
  }
  const handleReject = () => {
    history("/login");
  }

  const handleBack = () => {
    history("/login");
  }
    return (
        <div className="min-h-screen flex flex-cols justify-center">
            <div className="grid grid-cols-2">
                    <div class="w-80">
                    <h1 className="text-3xl text-gray-800 font-bold mb-8 pl-6"> Policy Registration </h1>
                    <div>                      

                    </div>
                    <div>
                    {Object.keys(formData).map((field) => (
                    <input
                        key={field}
                        //type={field === "password" ? "password" : "text"}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                        className="w-[250px] px-4 py-2 mb-2 rounded border"
                    />
                    ))}</div>
                    </div>
                    <div class="w-[250px] px-200 py-10 mb-5 pt-16 rounded border ">
                    <div>
                    <button
                        onClick={handleApprove}
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                        >
                        Approve
                    </button> </div>
                    <div>
                    <button
                        onClick={handleReject}
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                        >
                        Reject
                    </button></div>
                    <div>
                    <button
                        onClick={handlePolicyNumber}
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                        >
                        Policy Number
                    </button></div>
                    <div>
                    <button
                        onClick={handlePremiumSummary}
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                        >
                        Premium Summary
                    </button></div>
                    <div>
                    <button
                        onClick={handleSave}
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                        >
                        Save
                    </button></div>
                    <div>
                    <button
                        onClick={handleBack}
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                        >
                        Back
                    </button></div>
                    </div>
            </div>
        </div>
    )
}

export default PolicyDetails