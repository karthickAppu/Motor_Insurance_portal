import React from "react"
import './Error.css'
const Error = () => {
  return (
    <div>
      <section className="page_404">
        <div className="ml-10 container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1  text-center">
                <div className="four_zero_four_bg">
                  <h1 className="text-center pl-24 pt-12">404</h1>
                </div>
                <div className="contant_box_404 pt-24">
                  <h3 className="h2">Looks like you're lost</h3>
                  <p>The page you are looking for is not available!</p>
                  <a href="/" className="link_404">
                    Go to Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Error;