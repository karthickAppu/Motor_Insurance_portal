import React from "react";

const BenefitIsu = () => {
  return (
    <div>
      <div className="text-gray-600 body-font">
        <div className="container px-5 pt-12 mx-auto">
          <div className="font-md text-green-500 font-bold text-center my-3">
            Benefits of Motor Insurance
          </div>
          <div className="font-md text-4xl font-bold text-center my-3">
            Know How Insurance Benefits You
          </div>
          <div className="font-md  font-medium text-center my-3">
            The needs of the people can vary, so know about the different types
            of insurance and stay protected during uncertainties.
          </div>
          <div className="flex flex-wrap m-4 justify-center">
            <div className="p-4 md:w-[30]">
              <div className="h-[450px] border-2 bg-white border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-58 md:h-[250px] w-full object-cover object-center"
                  src="https://insurance-b2c-assets.s3.ap-south-1.amazonaws.com/uploads/news/image/mceu_2943614311642857633940_1642857635.jpg"
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-2xl font-medium text-sky-600 mb-3">
                    Two Wheeler Insurance
                  </h1>

                  <div className="flex items-center flex-wrap ">
                    <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-500  rounded text-lg">
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-[30]">
              <div className="h-[450px] border-2 bg-white border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-58 md:h-[250px] w-full object-cover object-center"
                  src="https://img.freepik.com/free-vector/car-ownership-usage-isometric-composition-with-bubble-protected-car-icon-with-sign-paper-agreement_1284-54551.jpg?w=740&t=st=1706916300~exp=1706916900~hmac=2c3dd908682467d1a0984bd87f7871b4529524a7fb724f383c93ddf1984ad7fc"
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-2xl font-medium text-sky-600  mb-3">
                    Car Insurance Benefits
                  </h1>

                  <div className="flex items-center flex-wrap ">
                    <button className="inline-flex text-white bg-green-500  border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded text-lg">
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitIsu;