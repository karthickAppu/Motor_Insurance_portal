import React from "react"
import {useLocation, useNavigate} from 'react-router-dom';

function Contact (){
   // const location=useLocation()

    return (
        <div class="">
            <div>
              <h1 className="pt-4 pb-4 text-center font-bold text-6xl">
                Contact Us
              </h1>
            </div>          
            <div class="grid grid-cols-3 text-center center pt-48">
                <div>
                    <h3 class="text-3xl font-bold text-green-600 pb-12">Write to us</h3>
                    <p><b class="break-after">Motor Insurance Ltd.</b></p>
                    <p>10th floor, Tower A, Peninsula Business Park, Ganpatrao Kadam Marg, Paris Corner, Chennai 600 001</p>
                </div>
                <div>
                <h3 class="text-3xl font-bold text-green-600 pb-12">Call us</h3>
                <p>Toll free:<b> 1800-266-5844 </b></p>
                <p>Boardline:<b> 022 6700 1313</b></p>
                <p>Fax:<b> 022 6700 1606</b></p>
                </div>
                <div>
                <h3 class="text-3xl font-bold text-green-600 pb-12">Send us email</h3>
                     <p class="break-after">For all your service requests,</p>
                     <p class="break-after"> Please e-mail us at : 
                     <a class="font-bold"> care@motorinsurance.in</a></p>
                     <p class="break-after"> For Senior Citizens : <a class="font-bold" href="mailto:seniorcitizen@libertyinsuran.in">seniorcitizen@motorinsurance.in</a></p>
                </div>
            </div>
        </div>
    )
}

export default Contact