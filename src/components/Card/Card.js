import { Link } from 'react-router-dom';

function Card({ data }) {
  return (
    <div className='
    flex flex-col 
    pl-8 
    rounded-md 
    shadow-lg shadow-slate-700 
    h-96
    w-96
    bg-cover
    relative
    text-center
    ' 
    style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/${data.images[0]})`}}
    >

      <Link className='Card-title' to={`/details/${data.id}`}>
        {console.log(data)}
        <h1 className='absolute bg-slate-200/70 rounded-md p-1 text-left text-2xl font-semibold left-0 top-0 m-0'>
          {data.title}
        </h1>
      </Link>
      <div className='absolute font-semibold text-right inline-block bg-slate-200/70 rounded-md right-0 bottom-0'>
        <div>{data.address}</div>
        <div>{data.hours}</div>
      </div>
    </div>
  )
}

export default Card;
