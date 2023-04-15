import React from 'react'
import { useParams } from 'react-router'
import data from '../../events.json'
import sites from '../../sfpopos-data.json'

function EventDetails() {
  const params = useParams()
  const { id } = params // Location index
  const event = data[id]
  let image = "";

  for (const site in sites) {
    if (sites[site].title === event.location) {
      image = sites[site].images[0]
    }
  }


  return (
    <section
      className="flex flex-col bg-cover bg-center h-auto min-h-screen p-4"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/${image})`,
      }}
    >

      <article className='flex flex-col px-4 md:px-8 py-6 md:py-10 md:text-3xl text-xl bg-white/40 h-4/5 text-center'>
        <h1 className='md:text-6xl text-4xl font-bold mb-2'>{event.title}</h1>
        <h2 className='md:text-4xl text-2xl font-bold mb-2'>Hosted By: {event.host}</h2>
        <p className='text-black md:text-2xl mb-4'>{event.desc}</p>
        <div className='justify-end'>
          <p className='mb-4'>{Date(event.date)}</p>
          <p className='mb-4'>{event.location}</p>
        </div>
      </article>
    </section>
  );
}

export default EventDetails;
