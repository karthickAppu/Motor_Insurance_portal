import React from "react";
import { useAuth } from "../Auth/auth";
import { useNavigate } from "react-router-dom";

function Dashboard (){

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login"); // Redirect to the home page ("/") after logout
  };


    return (
        <div className="min-h-screen"
        style={{
          backgroundImage:
            'url("https://img.freepik.com/free-vector/people-driving-electric-scooter_23-2148557298.jpg?w=740&t=st=1706915426~exp=1706916026~hmac=87b7f182090d0640fcbcd50670d4ca3a7b78e0be417ec59b2bc67a144d455d62")',
          backgroundSize: "100% 120%",
          backgroundPosition: "center top",
          height: "600px"
        }}>
            <section class="grid grid-cols-2 py-1 px-2 ">
                <div></div>
                <div className="flex justify-end">
                <div className="py-1 px-6 flex">
                    <a
                        href="/benefits"
                        className="py-1 px-200 text-green-500 font-bold uppercase text-xs hover:bg-green-700 hover:text-green-500">
                        About Us
                    </a>
                </div>
                <div className="py-1 px-6 flex">
                    <a
                        href="/benefits"
                        className="py-1 px-200 text-green-500 font-bold uppercase text-xs hover:bg-green-700 hover:text-green-500">
                        Benefits
                    </a>
                </div>
                <div className="py-1 px-6 flex">
                    <a
                        href="/contact"
                        className="py-1 px-200 text-green-500 font-bold uppercase text-xs hover:bg-green-700 hover:text-green-500">
                        Contact Us
                    </a>
                </div>
                <div className="py-1 px-6 flex">
                <button
                    onClick={handleLogout}
                    className="w-28 h-8 bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-4 rounded"
                    >
                    Logout
                    </button>
                </div>
                </div>
            </section>           
            <div className="md:w-1/8 pl-[70px] py-1 px-4">
                    <p className="text-3xl font-bold mb-7 text-gray-900 leading-none">
                        Welcome to Raavan Motor Insurance
                    </p>
            </div>
                    <div className="md:w-1/4 pl-[80px] relative">
                    <div className="py-2 px-4">
                    <a
                        href="/PolicyDetails"
                        className="bg-green-500 py-2 px-6 text-white font-bold uppercase text-xs rounded hover:bg-green-500 hover:text-white-800">
                        Policy
                    </a></div>
                    <div className="py-2 px-4">
                    <a
                        href="/Claim"
                        className="bg-green-500 py-2 px-6 text-white font-bold uppercase text-xs rounded hover:bg-green-700 hover:text-white-500">
                        Claim 
                    </a></div>
                    <div className="py-2 px-4">
                    <a
                        href="/Renewal"
                        className="bg-green-500 py-2 px-6 text-white font-bold uppercase text-xs rounded hover:bg-green-500 hover:text-white-800">
                        Renewal
                    </a></div>
                    <div className="py-2 px-4">
                    <a
                        href="/ViewPolicy"
                        className="bg-green-500 py-2 px-6 text-white font-bold uppercase text-xs rounded hover:bg-green-500 hover:text-white-800">
                        View Policy
                    </a></div>
                    </div>             
        </div>       
    )
}

export default Dashboard;