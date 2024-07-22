import React from "react";
import Header from "./Header";
import { useLocation } from "react-router";
import { data } from "../data";
import Cards from "./Cards";

export default function SearchResult() {
    
    const location = useLocation();
    const {state} = location;
    console.log(state.st)

    return(
        <div>
        <Header />

        <h1>Results...</h1>

{data.filter((item) =>{
    if(state.st ==""){
        return item;
    }
    else if(item.title.toLowerCase().includes(state.st.toLowerCase())){
        return item;
    }
}).map((item) => {
        return(
            <div className='homeCards'>

            <Cards key={item.id} item={item} />
            </div>
        )
    })}

        </div>
    );
   
}