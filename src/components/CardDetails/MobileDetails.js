import React, { useEffect } from 'react'
import { useParams } from 'react-router'
// import './CardDetails.css'
import data from '../../sfpopos-data.json'
import events from '../../events.json'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Event from '../Event/Event'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function MobileDetails(props) {
  const params = useParams()
  const { id } = params // Location index
  const { images, title, desc, hours, features, geo } = data[id]
 
  return (
    <Swiper
      spaceBetween={50}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      slidesPerView={1}
      className="grid grid-cols-2 gap-0 bg-cover bg-center h-auto min-h-screen" 
      style={{
      backgroundImage: `url(${process.env.PUBLIC_URL}/images/${images[0]})`, 
      }}
      >

      <SwiperSlide className='px-4 md:px-8 py-6 md:py-10 text-3xl bg-white/40'>
        <h1 className='text-6xl font-bold mb-2'>{ title }</h1>
        <p className='text-black text-2xl mb-4'>{ desc }</p>
        <p className='mb-4'>{ hours }</p>
        <p className='mb-4'>{ features }</p>
        <p className='mb-4'>{ geo.lat } { geo.lon }</p>
      </SwiperSlide>

      <SwiperSlide className='px-4 md:px-8 py-6 md:py-10 text-3xl bg-white/40 flex flex-col space-y-4 mt-5'>
        {events.map((event, key) => (
          <Event id={key} key={key} data={event} />
        ))}
      </SwiperSlide>
      </Swiper>
  )
}

export default MobileDetails;
