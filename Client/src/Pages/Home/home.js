import React from "react"
import BenefitIsu from './bendefits';
import Contact from './contact';
import Dashboard from "./dashboard";

function Home (){

    return(
        <div>
        <Dashboard/>
        <BenefitIsu/>
        <Contact/>
        </div>
    )   
}

export default Home