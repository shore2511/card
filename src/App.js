import React, { useState } from "react";
import data from './components/data'
import Tours from "./components/Tours";

const App=()=>{

  const[tours,setTours]=useState(data)   

  function removeTour(id){
        const newTours = tours.filter(tour => tour.id !== id);
        setTours(newTours);
    }
    
    if(tours.length === 0){
    return(
      <div className="flex flex-col mt-20 items-center ">
        <h2 className="text-4xl text-red-500 font-bold mb-10">Not Tours is left</h2>
        <button className="bg-red-500 px-5 py-2 hover:cursor-pointer text-white rounded-md" onClick={()=>setTours(data)}>Refresh</button>
      </div>
    );
    }

  return(
    
    <div className="mt-10 mx-32 " >
      <Tours tours={tours} removeTour={removeTour} ></Tours>
    </div>
  );
};

export  default App;