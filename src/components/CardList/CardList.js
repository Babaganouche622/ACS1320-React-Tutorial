// CardList.js
// POPOSSpaceList
import React from "react";
import { useState } from "react";
import Card from "../Card/Card";
// import './CardList.css'
import data from '../../sfpopos-data.json'

function CardList() {
  const [searchText, setSearchText] = useState('');
  // const cards;
  return (
    <div className="p-4">
      <input
        className='
        flex flex-col
        m-auto
        mt-2
        border-4 border-black rounded-md
        bg-gradient-to-r from-slate-600 from-0% to-white to-50%
        text-4xl 
        text-black 
        items-center'
        type="text"
        placeholder="Search..."
        onChange={(e) => { setSearchText(e.target.value) }}
      />

      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 mt-5">
        {data.filter(obj => obj.title.toLowerCase().includes(searchText.toLowerCase()) || obj.address.toLowerCase().includes(searchText.toLowerCase())).map((site, key) => (
          <Card id={key} key={key} data={site} />
        ))}
      </div>
    </div>
  )
}

export default CardList;
