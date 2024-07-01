import React from "react";
import Todo from "./Todo";
import CouInfoMain from "../CountryInfo/CouInfoMain";
import './Plan.css';
import CurrencyConverter from "./CurrencyConverter";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function Plan() {
    return(
        <div className="plan">
        <Header />
        <h2>Hi, plan your trip here.</h2>

        <hr/>

        <Todo />
        <hr/>

        <CurrencyConverter />
        <hr/>

		<h2>Get Country Info..</h2>
        <CouInfoMain />


        <Footer />
        </div>
    );
}