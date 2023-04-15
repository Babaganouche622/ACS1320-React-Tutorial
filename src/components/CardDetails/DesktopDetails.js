import React from 'react'

function DesktopDetails({data}) {
  return (
    <section
      className="grid grid-cols-2 gap-4 bg-cover bg-center h-auto min-h-screen p-4"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/${data.images[0]})`,
      }}
    >

      <article className='px-4 md:px-8 py-6 md:py-10 text-3xl bg-white/40'>
        <h1 className='text-6xl font-bold mb-2'>{data.title}</h1>
        <p className='text-black text-2xl mb-4'>{data.desc}</p>
        <p className='mb-4'>{data.hours}</p>
        <p className='mb-4'>{data.features}</p>
        <p className='mb-4'>{data.geo.lat} {data.geo.lon}</p>
      </article>

      <article className='px-4 md:px-8 py-6 md:py-10 text-3xl bg-white/40'>
        <ul>
          <li>List item one</li>
          <li>List item one</li>
          <li>List item one</li>
          <li>List item one</li>
        </ul>
      </article>
    </section>
  )
}

export default DesktopDetails;