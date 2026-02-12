import React, { useState } from "react";
import data from "./data.json";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [getData, setGetData] = useState(data);

  return (
    <div className="">
      <input
        placeholder="Search..."
        className="border-2 h-10"
        // value={}
        type="text"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      {getData
        .filter((terrorist) => {
           return terrorist.name.includes(search)
            // terrorist.attacksCount == search["attacksCount"];
        })
        .map((user, i) => {
          return <div key={user.name}>{user.name} </div>;
        })}
    </div>
  );
}
