import React from "react";
import { useState } from "react";
import Event from "../Event/Event"
import data from "../../events.json";

function EventList() {
  const [searchText, setSearchText] = useState('');

  return (
    <div className="p-4 flex flex-col">
      <label htmlFor="search-input" className="sr-only">Search events:</label>
      <input
        id="search-input"
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
        aria-label="Search events"
        onChange={(e) => { setSearchText(e.target.value) }}
      />

      <section className="flex flex-col space-y-4 mt-5">
        {data.filter(obj => obj.title.toLowerCase().includes(searchText.toLowerCase()) || obj.address.toLowerCase().includes(searchText.toLowerCase())).map((event, key) => (
          <Event id={key} key={key} data={event} />
        ))}
      </section>
    </div>
  )
}

export default EventList;
