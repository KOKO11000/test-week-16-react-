import React, { useState } from 'react'
import data from "./data.json"
export default function Filter() {
    const [filter, setFilter] = useState(data)
    filter.forEach(stat=>{
        stat.status == search
    })
  return (
    <div></div>
  )
}
