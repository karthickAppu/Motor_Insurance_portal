import React from "react"
import {useLocation, useNavigate} from 'react-router-dom';
import BenefitIsu from './bendefits';

function Home (){
    const location=useLocation()

    return (
        <div className="min-h-screen"
        style={{
          backgroundImage:
            'url("https://img.freepik.com/premium-photo/fun-turtle_183364-17278.jpg?w=740")',
          backgroundSize: "90% 105%",
          backgroundPosition: "right top",
          height: "600px"
        }}>
            <section class="grid grid-cols-2 py-1 px-2 ">
                <div></div>
                <div className="flex justify-end">
                <div className="py-1 px-6 flex">
                    <a
                        href="/contact"
                        className="py-1 px-200 text-green-500 font-bold uppercase text-xs hover:bg-green-700 hover:text-green-500">
                        Contact Us
                    </a>
                </div>
                <div className="py-1 px-6 flex">
                    <a
                        href="/login"
                        className="bg-green-600 py-1 px-2 text-white font-bold uppercase text-xs rounded hover:bg-green-500 hover:text-white-800">
                        Logout
                    </a>
                </div>
                </div>
            </section>           
            <div className="md:w-1/8 pl-[70px] py-1 px-4">
                    <p className="text-3xl font-bold mb-7 text-gray-900 leading-none">
                        Motor Insurance
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
                        href="/Facultative"
                        className="bg-green-500 py-2 px-6 text-white font-bold uppercase text-xs rounded hover:bg-green-500 hover:text-white-800">
                        Facultative
                    </a></div>
                    <div className="py-2 px-4">
                    <a
                        href="/Reinsure"
                        className="bg-green-500 py-2 px-6 text-white font-bold uppercase text-xs rounded hover:bg-green-500 hover:text-white-800">
                        Re-insurance
                    </a></div>
                    </div>             
        
        <BenefitIsu/>
        </div>       
    )
}

export default Home