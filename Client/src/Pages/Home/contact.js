import React from "react";

function Contact (){
   // const location=useLocation()

    return (
        <div class="">
            <div>
            <div className="font-md text-green-500 font-bold text-center my-3">
            We Provide Guidance to Stay Protected 
          </div>
              <h1 className="pt-4 pb-4 text-center text-gray-600 font-bold text-4xl">
                Contact Us
              </h1>
                <img
                  className="lg:h-58 md:h-[250px] w-full object-cover object-center"
                  src="https://img.freepik.com/premium-photo/computer-mouse-with-contact-symbols-internet-communication_220873-15909.jpg?w=1060"
                  alt="blog"
                />
            </div>        
            <div class="grid grid-cols-3 text-center center pt-8">
                <div>
                    <h3 class="text-3xl font-bold text-green-600 pb-8">Write to us</h3>
                    <p><b class="break-after">Motor Insurance Ltd.</b></p>
                    <p>10th floor, Tower A, Peninsula Business Park, <br/>
                        Ganpatrao Kadam Marg, Paris Corner,<br/> Chennai - 600 001</p>
                </div>
                <div>
                <h3 class="text-3xl font-bold text-green-600 pb-8">Call us</h3>
                <p>Toll free:<b> 1800-266-5844 </b></p>
                <p>Boardline:<b> 022 6700 1313</b></p>
                <p>Fax:<b> 022 6700 1606</b></p>
                </div>
                <div>
                <h3 class="text-3xl font-bold text-green-600 pb-8">Send us email</h3>
                     <p class="break-after">For all your service requests,</p>
                     <p class="break-after"> Please e-mail us at : </p>
                     <p class="font-bold"> care@motorinsurance.in</p>
                </div>
            </div>
        </div>
    )
}

export default Contact