import React, { useState,useEffect } from "react";
import axios from "axios";

function Summary (props) {

    const [summaryData,setsummaryData] = useState({
        policyNo:"",
        sumInsure:"",
        premiumRate:"",
        premiumAmount:"",
        agentCommission:"",
        GST:"",
        totalAmount:""
      })

    useEffect(() => {
        axios.get('http://localhost:8080/policy/summary/'+props.policyNo)
        .then((response) => {
            console.log("Response code from server", response.code);
            //get policy status from response and set
            const[sumInsure]=[response.data.sumInsure]
            setsummaryData({
              sumInsure:sumInsure
          });
          })
    },[])
  
    return (
       <div>
          <section>
              <div class="grid grid-cols-2">
                  <div>
                      <h6> Sum Insured </h6>
                      <h6> Premium Rate</h6>
                      <h6> Premium Amount </h6>
                      <h6> Agent Commission </h6>
                      <h6> GST </h6>
                      <h6> Total Amount </h6>
                  </div>
                  <div>
                      <h6> Testing </h6>
                      <h6> {summaryData.sumInsure}</h6>
                      {/* <h6> {Data.premiumRate}</h6>
                      <h6> {Data.premiumAmount} </h6>
                      <h6> {Data.agentCommission} </h6>
                      <h6> {Data.GST} </h6>
                      <h6> {Data.totalAmount} </h6> */}
                  </div>
              </div>
          </section>
      </div>
    );
}

const VideoModal = (props) => {
    return <div style={{position: "fixed", top: 0, bottom: 0, left: 0, right: 0, backgroundColor: "rgba(0,0,0,0.5)"}}>
      <iframe
          title={props.src}
          allowFullScreen
          frameBorder="0"
          height="315px"
          src={props.src}
          width="560px"
      />
    </div>
  }

export default Summary;