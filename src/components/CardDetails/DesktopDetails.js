import React from 'react';

function DesktopDetails({data}) {
  return (
    <section
      className="grid grid-cols-2 gap-4 bg-cover bg-center h-auto min-h-screen p-4"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/${data.images[0]})`,
      }}
    >
      <article
        className='px-4 md:px-8 py-6 md:py-10 text-3xl bg-white/40'
        role='region'
        aria-label='Details about the item'
      >
        <h1 className='text-6xl font-bold mb-2'>{data.title}</h1>
        <p className='text-black text-2xl mb-4'>{data.desc}</p>
        <p className='mb-4'>{data.hours}</p>
        <p className='mb-4'>{data.features}</p>
        <div
          className='mb-4'
          role='img'
          aria-label={`Location: Latitude ${data.geo.lat}, Longitude ${data.geo.lon}`}
        >
          {data.geo.lat} {data.geo.lon}
        </div>
      </article>

      <aside
        className='px-4 md:px-8 py-6 md:py-10 text-3xl bg-white/40'
        aria-label='Additional information about the item'
      >
        <ul>
          <li>List item one</li>
          <li>List item one</li>
          <li>List item one</li>
          <li>List item one</li>
        </ul>
      </aside>
    </section>
  );
}

export default DesktopDetails;
