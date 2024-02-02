import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";



function RegisterForm() {
  const history=useNavigate();

  const { register } = useAuth();
  const [formData, setFormData] = useState({
    password: "",
    username: "",
    firstName: "",
    age: "",
    gender: "",
    city: "",
    country: "",
    branchcode:""
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = () => {
    axios
      .post("http://localhost:8080/users/create", formData)
      .then((response) => {
        console.log("User created successfully", response.data);
        window.alert("User registered successfully!");
        const { password, username } = formData;
        register( password, username);
        navigate("/");
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

  const gotoLogin = () => {
    history("/login");
  }

  return (
    <div className="flex flex-col flex-wrap m-4 justify-center">
      <section>
        <div className="grid grid-cols-2 flex flex-wrap m-4 justify-center">
          <div class="items-center justify-center">
          <img
                  className="lg:h-100 md:h-full w-[500px] object-cover object-center pl-20"
                  src="https://img.freepik.com/free-vector/app-development-concept-with-flat-deisng_23-2147852844.jpg?w=740&t=st=1706913563~exp=1706914163~hmac=eff974aa02d71ece93e9545c33fc62e3759ca81c9cdb01d16ba0ebe75e427d85"
                  alt="blog"/>
          </div>
          <div class="items-center justify-center">
          <h1 className="text-3xl text-gray-800 font-bold mb-8 pl-6"> Please Register Here </h1>
      <div className="w-80">
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
        <button
          onClick={handleRegister}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Register
        </button>
        <section class=""><div class="grid grid-cols-2 py-2 px-4">
        <div class="py-2 px-4">
          <label> Registered? </label>
        </div>
        <div class="">
        <button
          onClick={gotoLogin}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Go To Login
        </button></div>
        </div></section>
      </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterForm;