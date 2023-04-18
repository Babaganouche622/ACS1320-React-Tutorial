import React from "react";
import { useState } from "react";
import Card from "../Card/Card";
import data from '../../sfpopos-data.json';

function CardList() {
  const [searchText, setSearchText] = useState('');

  return (
    <div className="p-4">
      <label htmlFor="search-input" className="sr-only">
        Search for POPOS
      </label>
      <input
        id="search-input"
        className="
          flex flex-col
          m-auto
          mt-2
          border-4 border-black rounded-md
          bg-gradient-to-r from-slate-600 from-0% to-white to-50%
          text-4xl
          text-black
          items-center
        "
        type="text"
        placeholder="Search for POPOS..."
        value={searchText}
        onChange={(e) => { setSearchText(e.target.value) }}
      />

      <section aria-label="List of POPOS" className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 mt-5">
        {data.filter(obj => obj.title.toLowerCase().includes(searchText.toLowerCase()) || obj.address.toLowerCase().includes(searchText.toLowerCase())).map((site, key) => (
          <Card key={key} data={site} />
        ))}
      </section>
    </div>
  )
}

export default CardList;
