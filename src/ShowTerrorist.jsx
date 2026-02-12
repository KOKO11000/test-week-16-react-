import React, { useState } from "react";
import data from "./data.json";
export default function ShowTerrorist() {
  const [terrorists, setTerrorists] = useState(data);
  return (
    <div>
      <div className="w-full border-2 ">
        <div className="flex border-[1px] justify-between items-center m-2 h-20 font-extrabold">
            <p>Name</p>
            <p>organization</p>
            <p>attacksCount</p>
            <p>status</p>
            <p>relationToIsraelSummary</p>
            <p>Image</p>
             </div>
        {terrorists.map((terrorist) => {
          return (
            
            <div key={terrorist.name} className="flex border-[1px] justify-between items-center m-2 h-20">
                
              <p>{terrorist.name}</p>
              <p>{terrorist.organization}</p>
              <p>{terrorist.attacksCount}</p>
              <p>{terrorist.status}</p>
              <p>{terrorist.relationToIsraelSummary}</p>
              
              <img src={terrorist.imageUrl} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
