import React from 'react'
import { useParams } from 'react-router'
import './CardDetails.css'
import data from '../../sfpopos-data.json'

function CardDetails(props) {
  const params = useParams()
  const { id } = params // Location index
  const { images, title, desc, hours, features, geo } = data[id]

  return (
    <div className='CardDetails'>
      <div className='CardDetails-image'>
        <img src={`${process.env.PUBLIC_URL}images/${images[0]}`} alt={title} />
      </div>

      <div className='CardDetails-info'>
        <h1 className='CardDetails-title'>{ title }</h1>
        <p className='CardDetails-desc'>{ desc }</p>
        <p className='CardDetails-hours'>{ hours }</p>
        <p className='CardDetails-features'>{ features }</p>
        <p className='CardDetails-geo'>{ geo.lat } { geo.lon }</p>
      </div>

    </div>
  )
}

export default CardDetails;
