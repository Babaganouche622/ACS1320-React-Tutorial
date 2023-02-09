// src/Card.js
// POPOSSpace
import { Link } from 'react-router-dom';
import './Card.css';

function Card(props) {
  const { name, image, address, hours, id } = props
  return (
    <div className='Card'>
      <img
        src={`${process.env.PUBLIC_URL}/images/${image}`}
        width="300"
        height="300"
        alt="Hello"
      />
      <Link className='Card-title' to={`/details/${id}`}>
        <h1>
          {name}
        </h1>
      </Link>
      <div className='Card-info'>
        <div>{address}</div>
        <div>{hours}</div>
      </div>
    </div>
  )
}

export default Card;
